import * as _ from "lodash"

export const SET_HOME_STORE_ACTION_NAME = "SET_HOME_STORE"
export function SET_HOME_STORE_ACTION(filter: IHome): IAction<IHome> {
    return {
        type: SET_HOME_STORE_ACTION_NAME,
        payload: filter
    }
}

const startup: IHome = {
    tab: 0,
    add: {
        id: " dsfsdf",
        title: " dsfsdf",
        description: "initial",
        confirmed: true,
        paid: true,
        group: 45797,
        category: 2915,
        uf: 21,
        city: 528
    }
}

export const HomeReducers = (state: IHome = startup, action: IAction<IHome>) => {
    switch (action.type) {
        case SET_HOME_STORE_ACTION_NAME:
            return _.assign(state, action.payload)
        default:
            return state
    }
}
