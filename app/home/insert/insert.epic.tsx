import "rxjs"
import { Observable } from "rxjs"
import { getFirebase } from "react-redux-firebase"
import { actions as toastrActions } from "react-redux-toastr"
import { bindActionCreators } from "redux"
/* import * as faker from "faker"*/

const INSERT_ADD_ACTION_NAME = "INSERT_ADD"
export const INSERT_ADD = (add: IAdd): IAction<any> => {
    return {
        payload: add,
        type: INSERT_ADD_ACTION_NAME
    }
}

export const insertEpic = (action$, store) => {
    const toaster = bindActionCreators(toastrActions, store.dispatch)
    return action$
        .ofType(INSERT_ADD_ACTION_NAME)
        .mergeMap((action: IAction<IAdd>) => {
            console.log(store)
            return (Observable.fromPromise(
                getFirebase().database().ref("adds").push(action.payload))
            )
                .mapTo(toaster
                    .add({
                        type: "success",
                        title: action.payload.title,
                        attention: true,
                        message: "ANÚNCIO ADICIONADO!",
                        options: {}
                    }))
        })
}
