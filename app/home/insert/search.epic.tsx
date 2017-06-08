export const DISPLAY_FILTERED_ADDS_ACTION_NAME = "DISPLAY_SEARCH_FIREBASE"
export const DISPLAY_FILTERED_ADDS = (query: string): IAction<any> => {
    return {
        payload: query,
        type: DISPLAY_FILTERED_ADDS_ACTION_NAME
    }
}

export const filteredAdds = (state = [], action) => {
    switch (action.type) {
        case DISPLAY_FILTERED_ADDS_ACTION_NAME:
            return action.payload
        default:
            return state
    }
}
