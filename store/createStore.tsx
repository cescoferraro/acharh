import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reactReduxFirebase } from "react-redux-firebase"
import { createEpicMiddleware } from "redux-observable"
import { RootEpic } from "./epics"
import { routerMiddleware, connectRouter } from "connected-react-router"
import { allReducers } from "./reducers"
import { logger } from "./logger"

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAKk3VUcJLr4mDI6r7tCoc-5W-OJnxwmlw",
    authDomain: "achars-82daf.firebaseapp.com",
    databaseURL: "https://achars-82daf.firebaseio.com",
    enableRedirectHandling: false,
    messagingSenderId: "1011360147154",
    projectId: "achars-82daf",
    storageBucket: "achars-82daf.appspot.com"
}

const ReplacebleEpicMiddleware = createEpicMiddleware(RootEpic)

export const configureStore = (history: any = {}) => {
    const startup = {}
    const FirebaseStoreCreator = compose(reactReduxFirebase(FIREBASE_CONFIG))(createStore)
    const middlewares = applyMiddleware(routerMiddleware(history), logger, ReplacebleEpicMiddleware)
    const composeEnhancers = composeWithDevTools(middlewares)
    const store = FirebaseStoreCreator(
        connectRouter(history)(allReducers),
        startup, composeEnhancers)

    if (module.hot) {
        module.hot.accept(["./reducers.tsx"], () => {
            const nextRootReducer = require("./reducers.tsx").allReducers
            store.replaceReducer(nextRootReducer)
        })
        module.hot.accept(["./epics.tsx"], () => {
            const nextRootEpic = require("./epics.tsx").RootEpic
            ReplacebleEpicMiddleware.replaceEpic(nextRootEpic)
        })
    }

    return store
}
