export const FILTER_ACTION_NAME = "FILTER"

export function FILTER_ACTION(): IAction<any> {
    return {
        type: FILTER_ACTION_NAME,
        payload: {}
    }
}

