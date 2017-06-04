import "rxjs"
import { Observable } from "rxjs"
import { getFirebase } from "react-redux-firebase"
import { DISPLAY_SEARCH_ACTION_NAME } from "./search.epic"
export const FILTER_ACTION_NAME = "FILTER"

export function FILTER_ACTION(): IAction<any> {
    return {
        type: FILTER_ACTION_NAME,
        payload: {}
    }
}

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
                    const id = array[0]
                    return array[1]
                })
                .filter(byUF(reduxFilter.uf))
                .filter(byGroup(reduxFilter.group))
                .filter(byCategory(reduxFilter.category))
                .filter(byKeyword(reduxFilter.keyword))
                .toArray()
                .map(displayResults)
        })
}

const displayResults = (array) => {
    console.log(array)
    return {
        payload: array,
        type: DISPLAY_SEARCH_ACTION_NAME
    }
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
    console.info(uf)
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
            if ([16, 21, 24].includes(add.uf)) {
                return true
            } else {
                return false
            }
        case 30:
            if ([16, 21, 24].includes(add.uf)) {
                return true
            } else {
                return false
            }
        case 31:
            if ([16, 21, 24].includes(add.uf)) {
                return true
            } else {
                return false
            }
        case 32:
            if ([16, 21, 24].includes(add.uf)) {
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
