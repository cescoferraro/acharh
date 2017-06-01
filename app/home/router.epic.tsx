import "rxjs"
import { Observable } from "rxjs"
import { push } from "connected-react-router"

const ROUTER_EMITTER_ACTION_NAME = "ROUTER-EMIITER"
export const ROUTER_EMITTER = (url: string): IAction<any> => {
    return {
        payload: url,
        type: ROUTER_EMITTER_ACTION_NAME
    }
}

export const routerEpic = (action$) => {
    return action$
        .ofType(ROUTER_EMITTER_ACTION_NAME)
        .mergeMap((action) => (Observable.of(push(action.payload))))
}
