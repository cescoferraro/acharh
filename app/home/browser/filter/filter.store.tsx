import * as assign from "lodash/fp/assign"

interface IFilters {
    uf: number
    group: number
    category: number
    keyword: string
    hidden: boolean
}

// Set Filters used to filter the database
export const SET_FILTERS_ACTION_NAME = "SET_FILTERS"
export function SET_FILTERS_ACTION(filter: IFilters): IAction<IFilters> {
    return {
        type: SET_FILTERS_ACTION_NAME,
        payload: filter
    }
}
const startup = { city: 0, hidden: true, uf: 0, group: 0, keyword: "", category: 0 }
export const filters = (state = startup, action) => {
    switch (action.type) {
        case SET_FILTERS_ACTION_NAME:
            return assign(state, action.payload)
        default:
            return state
    }
}

// Filter Firebase Database!
export const FILTER_ACTION_NAME = "FILTER"
export function FILTER_ACTION(): IAction<any> {
    return {
        type: FILTER_ACTION_NAME,
        payload: {}
    }
}

export const DISPLAY_FILTERED_ADDS_ACTION_NAME = "DISPLAY_ADDS"
export const filteredAdds = (state = [], action) => {
    switch (action.type) {
        case DISPLAY_FILTERED_ADDS_ACTION_NAME:
            return action.payload
        default:
            return state
    }
}
