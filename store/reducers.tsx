import { firebaseStateReducer } from "react-redux-firebase"
import { combineReducers } from "redux"
import { filteredAdds } from "../app/home/browser/filter/filter.store"
import { reducer as reduxFormReducer } from "redux-form"
import { filters } from "../app/home/browser/filter/filter.store"
import { HomeReducers as home } from "../app/home/home.store"
import { reducer as toastrReducer } from "react-redux-toastr"
import { GroupsReducers } from "../shared/groups.reducer"

export let allReducers = combineReducers({
    form: reduxFormReducer,
    toastr: toastrReducer,
    groups: GroupsReducers,
    filters,
    home,
    filteredAdds,
    firebase: firebaseStateReducer
})
