export const DISPLAY_SEARCH_ACTION_NAME = "SEARCH_FIREBASE";
export const DISPLAY_SEARCH = (query: string): Action<any> => {
    return {
        type: DISPLAY_SEARCH_ACTION_NAME,
        payload: query
    }
};
