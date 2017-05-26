import { bindActionCreators } from "redux"
import { SEARCH_ACTION } from "../app/containers/search.epic"
import { FILTER_ACTION } from "../app/containers/filter.epic"
import { ROUTER_EMITTER } from "../app/containers/router.epic"
import { SET_FILTERS_ACTION, SET_HOME_TAB_ACTION } from "./reducers"

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        dispatch,
        SET_HOME_TAB_ACTION,
        SET_FILTERS_ACTION,
        FILTER_ACTION,
        ROUTER_EMITTER,
        SEARCH_ACTION
    }, dispatch)
}
