import * as React from "react"
import RaisedButton from "material-ui/RaisedButton"
import Subheader from "material-ui/Subheader"
import { compose } from "recompose"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as addCSS from "../css/add.pcss"
import * as classNames from "classnames"
import { Add } from "./add"
import { isLoaded, isEmpty } from "react-redux-firebase"
import { List } from "material-ui"
import { Spinner } from "../../../../shared/components/spinner";

export const AddsList = compose(
    withStyles(addCSS)
)(({ userAgent, adds, filters, groups, ROUTER_EMITTER, FILTER_ACTION }) => {
    const list = !isLoaded(groups)
        ? <Spinner userAgent={userAgent} />
        : isEmpty(groups)
            ? <Spinner userAgent={userAgent} /> :
            (adds.map((add) =>
                (
                    <Add
                        key={Math.random()}
                        ROUTER_EMITTER={ROUTER_EMITTER}
                        groups={groups}
                        add={add}
                    />
                )))
    const shirinkList = filters.hidden ?
        classNames(addCSS.fullList) :
        classNames(addCSS.shirinkedList)
    return (
        <div className={shirinkList} >
            {
                adds.length === 0 ?
                    <RaisedButton onClick={() => { FILTER_ACTION() }} fullWidth={true} label={"Go find something"} /> :
                    <Subheader>Anúncios selecionados para você:</Subheader>
            }
            <List >
                {list}
            </List>
        </div>
    )
})
