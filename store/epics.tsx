import { combineEpics } from "redux-observable"
import { filterEpic } from "../app/home/main/filter/filter.epic"
import { routerEpic } from "../app/router.epic"
import { insertEpic } from "../app/home/tools/insert/insert.epic"
import { detailEpic } from "../app/home/details/page.epic"
import { groupsEpic } from "../app/home/main/filter/groups.epic"

export const RootEpic = combineEpics(groupsEpic, detailEpic, insertEpic, filterEpic, routerEpic)
