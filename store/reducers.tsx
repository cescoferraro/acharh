import { firebaseStateReducer as firebase } from "react-redux-firebase"
import { combineReducers } from "redux"
import { DisplaySearchReducer } from "../app/containers/search.epic"
import * as _ from "lodash"

interface IFilters {
    group: number
    category: number
}

export const SET_FILTERS_ACTION_NAME = "SET_FILTERS"

export function SET_FILTERS_ACTION(filter: IFilters): Action<IFilters> {
    return {
        type: SET_FILTERS_ACTION_NAME,
        payload: filter
    }
}

function filters(state = { group: 0, category: 0 }, action: Action<IFilters>) {
    switch (action.type) {
        case SET_FILTERS_ACTION_NAME:
            console.log(action.payload)
            return _.assign(state, action.payload)
        default:
            return state
    }
}

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
    filters,
    DisplaySearchReducer,
    firebase,
    todos
})
