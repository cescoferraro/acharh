import { Observable } from "rxjs"
import { getFirebase } from "react-redux-firebase"
import { actions as toastrActions } from "react-redux-toastr"
import { bindActionCreators } from "redux"
import * as faker from "faker/locale/pt_BR"

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
            const id = faker.random.uuid()
            return (Observable.fromPromise(getFirebase().database().ref("adds").push(action.payload))
            )
                .mapTo(toaster
                    .add({
                        id: id,
                        type: "success",
                        title: action.payload.title,
                        attention: true,
                        message: "ANÚNCIO ADICIONADO!",
                        options: {}
                    })
                )
        })
}
