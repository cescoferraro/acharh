import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/pairs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/toArray'
import 'rxjs/add/observable/fromPromise'


import { getFirebase } from "react-redux-firebase"
import { FILTER_ACTION_NAME } from "./adds.store"
import { DISPLAY_FILTERED_ADDS_ACTION_NAME } from "./filter.store"

export const filterEpic = (action$, store) => {
    return action$
        .ofType(FILTER_ACTION_NAME)
        .mergeMap((action) => {
            const reduxFilter = store.getState().filters
            return Observable.fromPromise(
                getFirebase().database().ref("adds").once("value"))
                .flatMap((db: any) => {
                    return Observable.pairs(db.val())
                })
                .map((array) => {
                    const result: any = array[1]
                    result.id = array[0]
                    return result
                })
                .filter(onlyConfirmed())
                .filter(byUF(reduxFilter.uf))
                .filter(byGroup(reduxFilter.group))
                .filter(byCategory(reduxFilter.category))
                .filter(byKeyword(reduxFilter.keyword))
                .toArray()
                .map(paidFirst)
                .map(displayResults)
        })
}

const paidFirst = (adds) => (adds.sort((a, b) => {
    return (a.paid === b.paid) ? 0 : a.paid ? -1 : 1
}))

const displayResults = (array) => {
    return {
        payload: array,
        type: DISPLAY_FILTERED_ADDS_ACTION_NAME
    }
}

const onlyConfirmed = () => (add: any) => {
    return add.confirmed ? true : false
}

const byKeyword = (keyword) => (add: any) => {
    if (keyword === "") {
        return true
    }
    return Include(add, keyword)
}
const byCategory = (category) => (add: any) => {
    if (category === 0) {
        return true
    }
    return add.category === category
}

const byUF = (uf) => (add: any) => {
    switch (uf) {
        case 0:
            return true
        case 28:
            if ([16, 21, 24].includes(add.uf)) {
                return true
            } else {
                return false
            }
        case 29:
            if ([25, 19, 13, 8].includes(add.uf)) {
                return true
            } else {
                return false
            }
        case 30:
            if ([7, 9, 11, 12].includes(add.uf)) {
                return true
            } else {
                return false
            }
        case 31:
            if ([5, 15, 6, 17, 20, 18, 26, 2, 27].includes(add.uf)) {
                return true
            } else {
                return false
            }
        case 32:
            if ([1, 3, 23, 14, 10, 22, 4].includes(add.uf)) {
                return true
            } else {
                return false
            }
        default:
            return uf === add.uf
    }
}
const byGroup = (group) => (add: any) => {
    return (group === 0) ? true : add.group === group
}

const Include = (add, keyword) => {
    let result
    Object.keys(add).map(
        (key) => {
            if (typeof add[key] === "string") {
                if (add[key].includes(keyword)) {
                    result = true
                }
            }
        })
    return result
}
