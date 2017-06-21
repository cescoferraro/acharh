import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/pairs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/toArray'
import 'rxjs/add/observable/fromPromise'
import { getFirebase } from "react-redux-firebase"
import { DISPLAY_GROUPS_ACTION } from "../../../../shared/groups.reducer"

export const FETCH_GROUPS_ACTION = "FETCH_GROUPS_ACTION"

export function FETCH_GROUPS(): IAction<any> {
    return {
        type: FETCH_GROUPS_ACTION,
        payload: []
    }
}

export const groupsEpic = (action$, store) => {
    return action$
        .ofType(FETCH_GROUPS_ACTION)
        .mergeMap((action) => {
            const reduxFilter = store.getState().filters
            return Observable.fromPromise(
                getFirebase().database().ref("groups").once("value"))
                .map((value: any) => {
                    return {
                        type: DISPLAY_GROUPS_ACTION, payload: value.val()
                    }
                })

        })
}
