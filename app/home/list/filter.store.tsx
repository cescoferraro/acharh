import * as _ from "lodash"
interface IFilters {
    uf: number
    group: number
    category: number
    keyword: string
    hidden: boolean
}

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
            return _.assign(state, action.payload)
        default:
            return state
    }
}
