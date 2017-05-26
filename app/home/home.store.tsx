import * as _ from "lodash"
interface IHome {
    tab: number
}


export const SET_HOME_STORE_ACTION_NAME = "SET_HOME_STORE"
export function SET_HOME_STORE_ACTION(filter: IHome): Action<IHome> {
    return {
        type: SET_HOME_STORE_ACTION_NAME,
        payload: filter
    }
}

export const HomeReducers = (state: IHome = { tab: 0 }, action: Action<IHome>) => {
    switch (action.type) {
        case SET_HOME_STORE_ACTION_NAME:
            return _.assign(state, action.payload)
        default:
            return state
    }
}
