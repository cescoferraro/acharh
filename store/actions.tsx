import { bindActionCreators } from "redux"
import { SEARCH_ACTION } from "../app/home/search.epic"
import { FILTER_ACTION } from "../app/home/filter.epic"
import { ROUTER_EMITTER } from "../app/home/router.epic"
import { SET_FILTERS_ACTION } from "../app/home/filter.store"
import { SET_HOME_STORE_ACTION } from "../app/home/home.store"

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        dispatch,
        SET_HOME_STORE_ACTION,
        SET_FILTERS_ACTION,
        FILTER_ACTION,
        ROUTER_EMITTER,
        SEARCH_ACTION
    }, dispatch)
}
