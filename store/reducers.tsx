import { firebaseStateReducer as firebase } from "react-redux-firebase"
import { combineReducers } from "redux"
import { DisplaySearchReducer } from "../app/containers/search.epic"
import { reducer as reduxFormReducer } from "redux-form"
import * as _ from "lodash"

interface IFilters {
    uf: number
    group: number
    category: number
    keyword: string
}

export const SET_FILTERS_ACTION_NAME = "SET_FILTERS"

export function SET_FILTERS_ACTION(filter: IFilters): Action<IFilters> {
    return {
        type: SET_FILTERS_ACTION_NAME,
        payload: filter
    }
}

const filters = (state = { uf: 0, group: 0, keyword: "", category: 0 }, action) => {
    switch (action.type) {
        case SET_FILTERS_ACTION_NAME:
            return _.assign(state, action.payload)
        default:
            return state
    }
}

export let allReducers = combineReducers({
    form: reduxFormReducer,
    filters,
    DisplaySearchReducer,
    firebase
})
