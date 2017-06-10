export const FILTER_ACTION_NAME = "FILTER"

export function FILTER_ACTION(): IAction<any> {
    return {
        type: FILTER_ACTION_NAME,
        payload: {}
    }
}

export const filteredAdds = (state = [], action) => {
    switch (action.type) {
        case FILTER_ACTION_NAME:
            return action.payload
        default:
            return state
    }
}
