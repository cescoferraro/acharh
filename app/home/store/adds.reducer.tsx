import { DISPLAY_SEARCH_ACTION_NAME } from "./adds.actions"


export const DisplaySearchReducer = (state = [], action) => {
    switch (action.type) {
        case DISPLAY_SEARCH_ACTION_NAME:
            return action.payload
        default:
            return state
    }
}
