import { Observable } from "rxjs"
import { getFirebase } from "react-redux-firebase"
import { SET_HOME_STORE_ACTION_NAME } from "../home.store";

const GET_ADD_ACTION_NAME = "GET ADD"

export const GET_ADD = (id: string): IAction<any> => {
    return {
        payload: id,
        type: GET_ADD_ACTION_NAME
    }
}

export const detailEpic = (action$, store) => {
    return action$
        .ofType(GET_ADD_ACTION_NAME)
        .mergeMap((action: IAction<IAdd>) => {
            return Observable.fromPromise(
                getFirebase().database().ref("adds/").child(action.payload).once("value")
            ).map((value: any) => (value.val()))
                .map((add: IAdd) => ({
                    type: SET_HOME_STORE_ACTION_NAME,
                    payload: { detail: add }
                }))
        })

}


