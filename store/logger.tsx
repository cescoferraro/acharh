import { createLogger } from "redux-logger"

export const isServer = () => !(typeof window !== "undefined" && window.document)

export const logger = createLogger({
    collapsed: (getState, action, logEntry) => (!logEntry.error),
    predicate: (getState, action) => {
        const identifier = "@@reactReduxFirebase"
        const fromFirebase = (action.type.substr(0, identifier.length) === identifier)
        return !isServer() && (!fromFirebase || false)
    }
})
