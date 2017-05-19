import { firebaseStateReducer as firebase } from "react-redux-firebase"
import { combineReducers } from "redux"
import { DisplaySearchReducer } from "../app/containers/search.epic"

function todos(state = [], action) {
    switch (action.type) {
        case "TODO":
            return state.concat([action.text])
        case "ADD_TODO":
            return state.concat([action.text])
        default:
            return state
    }
}
export let allReducers = combineReducers({
    DisplaySearchReducer, firebase, todos
})
