export const DISPLAY_GROUPS_ACTION = "DISPLAY_GROUPS"

export const GroupsReducers = (state = [], action: any) => {
    switch (action.type) {
        case DISPLAY_GROUPS_ACTION:
            return action.payload
        default:
            return state
    }
}
