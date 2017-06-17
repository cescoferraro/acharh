import { assign } from "lodash"

import { addFactory, genericAddFactory } from "../../shared/add.factory"

export const SET_HOME_STORE_ACTION_NAME = "SET_HOME_STORE"

export function SET_HOME_STORE_ACTION(filter: IHome): IAction<IHome> {
    return {
        type: SET_HOME_STORE_ACTION_NAME,
        payload: filter
    }
}

const startup: IHome = {
    tab: 0,
    add: addFactory(),
    detail: genericAddFactory()
}

export const HomeReducers = (state: IHome = startup, action: IAction<IHome>) => {
    switch (action.type) {
        case SET_HOME_STORE_ACTION_NAME:
            return assign(state, action.payload)
        default:
            return state
    }
}
