import "rxjs"
import { Observable } from "rxjs"
import { getFirebase } from "react-redux-firebase"

const INSERT_ADD_ACTION_NAME = "INSERT_ADD"
export const INSERT_ADD = (add: IAdd): IAction<any> => {
    return {
        payload: add,
        type: INSERT_ADD_ACTION_NAME
    }
}

export const insertEpic = (action$) => {
    return action$
        .ofType(INSERT_ADD_ACTION_NAME)
        .mergeMap((action: IAction<IAdd>) => {
            console.log(action.payload)
            return (Observable.fromPromise(
                getFirebase().database().ref("adds").push(action.payload))
            ).mapTo({ type: "whocater", payload: ["sdfnjksd"] })
        })
}
