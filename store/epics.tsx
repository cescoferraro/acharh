import { combineEpics } from "redux-observable"
import "rxjs"
import { searchEpic } from "../app/home/search.epic"
import { filterEpic } from "../app/home/filter.epic"
import { routerEpic } from "../app/home/router.epic"

const pingEpic = (action$) =>
    action$.filter((action) => action.type === "PING")
        .mapTo({ type: "PONG" })

export const RootEpic = combineEpics(pingEpic, filterEpic, searchEpic, routerEpic)
