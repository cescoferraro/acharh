import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/map"
import "rxjs/add/operator/mapTo"
import "rxjs/add/observable/fromPromise"
import { getFirebase } from "react-redux-firebase"
import { actions as toastrActions } from "react-redux-toastr"
import { bindActionCreators } from "redux"
import { uuid } from "../../../shared/uuid"

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
            return (Observable.fromPromise(getFirebase().database().ref("adds").push(action.payload))
            )
                .mapTo(toaster
                    .add({
                        id: uuid(),
                        type: "success",
                        title: action.payload.title,
                        attention: true,
                        message: "ANÚNCIO ADICIONADO!",
                        options: {}
                    })
                )
        })
}
