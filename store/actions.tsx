import { bindActionCreators } from "redux"
import { SEARCH_ACTION } from "../app/containers/search.epic"
import { ROUTER_EMITTER } from "../app/containers/router.epic"
import { SET_FILTERS_ACTION } from "./reducers"
export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        dispatch,
        SET_FILTERS_ACTION,
        ROUTER_EMITTER,
        SEARCH_ACTION
    }, dispatch)
}
