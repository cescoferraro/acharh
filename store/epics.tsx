import { combineEpics } from "redux-observable";
import "rxjs";
import { searchEpic } from "../app/containers/search.epic";
import { routerEpic } from "../app/containers/router.epic";


const pingEpic = action$ =>
    action$.filter(action => action.type === 'PING')
        .mapTo({ type: 'PONG' });

export const RootEpic = combineEpics(
    pingEpic, searchEpic, routerEpic
);
