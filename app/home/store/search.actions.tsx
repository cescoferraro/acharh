
export const SEARCH_ACTION_NAME = "SEARCH";
export function SEARCH_ACTION(query: string): Action<any> {
    return {
        type: SEARCH_ACTION_NAME,
        payload: query
    }
}
