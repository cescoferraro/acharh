import { bindActionCreators } from "redux"
import { SET_HOME_STORE_ACTION } from "../app/home/home.store"
import { INSERT_ADD } from "../app/home/insert/insert.epic"
import { ROUTER_EMITTER } from "../app/router.epic"
import {
    FILTER_ACTION,
    SET_FILTERS_ACTION
} from "../app/home/browser/filter/filter.store"
import { GET_ADD } from "../app/home/details/page.epic"

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        dispatch,
        SET_HOME_STORE_ACTION,
        GET_ADD,
        SET_FILTERS_ACTION,
        FILTER_ACTION,
        INSERT_ADD,
        ROUTER_EMITTER
    }, dispatch)
}
