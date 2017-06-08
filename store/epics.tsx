import { combineEpics } from "redux-observable"
import "rxjs"
import { filterEpic } from "../app/home/browser/filter/filter.epic"
import { routerEpic } from "../app/router.epic"
import { insertEpic } from "../app/home/insert/insert.epic"

const pingEpic = (action$) =>
    action$.filter((action) => action.type === "PING")
        .mapTo({ type: "PONG" })

export const RootEpic = combineEpics(pingEpic, insertEpic, filterEpic, routerEpic)
