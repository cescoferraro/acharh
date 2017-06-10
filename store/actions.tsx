import { bindActionCreators } from "redux"
import { FILTER_ACTION } from "../app/home/browser/filter/filter.store"
import { INSERT_ADD } from "../app/home/insert/insert.epic"
import { ROUTER_EMITTER } from "../app/router.epic"
import { SET_FILTERS_ACTION } from "../app/home/browser/filter/filter.store"
import { SET_HOME_STORE_ACTION } from "../app/home/home.store"

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        dispatch,
        SET_HOME_STORE_ACTION,
        SET_FILTERS_ACTION,
        FILTER_ACTION,
        INSERT_ADD,
        ROUTER_EMITTER
    }, dispatch)
}
