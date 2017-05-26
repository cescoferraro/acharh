import { firebaseStateReducer as firebase } from "react-redux-firebase"
import { combineReducers } from "redux"
import { DisplaySearchReducer } from "../app/home/search.epic"
import { reducer as reduxFormReducer } from "redux-form"
import { filters } from "../app/home/filter.store"
import { HomeReducers as home } from "../app/home/home.store"

export let allReducers = combineReducers({
    form: reduxFormReducer,
    filters,
    home,
    DisplaySearchReducer,
    firebase
})
