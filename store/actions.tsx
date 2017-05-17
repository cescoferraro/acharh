import { bindActionCreators } from "redux";
import { SEARCH_ACTION } from "../app/containers/search.epic";
import { ROUTER_EMITTER } from "../app/containers/router.epic";

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        dispatch: dispatch,
        ROUTER_EMITTER: ROUTER_EMITTER,
        SEARCH_ACTION: SEARCH_ACTION
    }, dispatch);
};
