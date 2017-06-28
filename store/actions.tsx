import { bindActionCreators } from "redux"
import { SET_HOME_STORE_ACTION } from "./home/home.store"
import { INSERT_ADD } from "../app/home/tools/insert/insert.epic"
import { ROUTER_EMITTER } from "../app/router.epic"
import {
    FILTER_ACTION,
    SET_FILTERS_ACTION
} from "../app/home/main/filter/filter.store"
import { GET_ADD } from "./home/details/page.epic"
import { FETCH_GROUPS } from "../app/home/main/filter/groups.epic"

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        dispatch,
        SET_HOME_STORE_ACTION,
        FETCH_GROUPS,
        GET_ADD,
        SET_FILTERS_ACTION,
        FILTER_ACTION,
        INSERT_ADD,
        ROUTER_EMITTER
    }, dispatch)
}
