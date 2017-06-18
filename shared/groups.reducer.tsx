export const SET_APP_GROUPS = " SET_APP_GROUP"

export const GroupsReducers = (state = [], action: any) => {
    switch (action.type) {
        case SET_APP_GROUPS:
            return action.payload
        default:
            return state
    }
}
