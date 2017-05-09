import "rxjs";
import { Observable } from "rxjs";
import { getFirebase } from "react-redux-firebase";
import { push } from "connected-react-router";
import { DISPLAY_SEARCH_ACTION_NAME } from "./adds.actions"
import { SEARCH_ACTION_NAME } from "./search.actions"


export const searchEpic = action$ => {
    return action$
        .ofType(SEARCH_ACTION_NAME)
        .mergeMap(action => {
            let filtered = []
            return Observable.fromPromise(
                getFirebase().database().ref("adds").once("value")
            ).map((allAdds: any) => {
                console.log("action.payload ", action.payload)
                console.log(typeof action.payload)
                console.log(action)
                console.log("action.payload ", action.payload === "")
                Object.keys(allAdds.val()).map(
                    ID => {
                        let Add = (allAdds.val()[ID])
                        if (HasSearchQuery(action, Add)) {
                            filtered.push(Add)
                        }
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
