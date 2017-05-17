import "rxjs";
import { Observable } from "rxjs";
import { getFirebase } from "react-redux-firebase";
import { push } from "connected-react-router";


export const SEARCH_ACTION_NAME = "SEARCH";
export function SEARCH_ACTION(query: string): Action<any> {
    return {
        type: SEARCH_ACTION_NAME,
        payload: query
    }
}

export const DISPLAY_SEARCH_ACTION_NAME = "SEARCH_FIREBASE";
export const DISPLAY_SEARCH = (query: string): Action<any> => {
    return {
        type: DISPLAY_SEARCH_ACTION_NAME,
        payload: query
    }
};

export const DisplaySearchReducer = (state = [], action) => {
    switch (action.type) {
        case DISPLAY_SEARCH_ACTION_NAME:
            return action.payload
        default:
            return state
    }
}

export const searchEpic = action$ => {
    return action$
        .ofType(SEARCH_ACTION_NAME)
        .mergeMap(action => {
            let filtered = []
            return Observable.fromPromise(
                getFirebase().database().ref("adds").once("value")
            ).map((allAdds: any) => {
                Object.keys(allAdds.val()).map(
                    ID => {
                        let Add = (allAdds.val()[ID])
                        if (HasSearchQuery(action, Add)) { filtered.push(Add) }
                    }
                )
                return allAdds
            }).mapTo({
                type: DISPLAY_SEARCH_ACTION_NAME,
                payload: filtered
            })

        })
};



const HasSearchQuery = (action, adds: any) => {
    let result = false
    Object.keys(adds).map(
        field => {
            if (typeof adds[field] === "string"
                && adds[field].includes(action.payload)) {
                result = true
            }
        }
    )
    return result
}
