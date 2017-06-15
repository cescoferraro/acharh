import * as React from "react"
import Subheader from "material-ui/Subheader"
import { compose } from "recompose"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as addCSS from "../css/add.pcss"
import * as classNames from "classnames"
import { Add } from "./add"
import { isLoaded, isEmpty } from "react-redux-firebase"
import { List } from "material-ui"

export const AddsList = compose(
    withStyles(addCSS)
)(({ adds, filters, groups, ROUTER_EMITTER }) => {
    const list = !isLoaded(groups)
        ? <h2>LATER</h2>
        : isEmpty(groups)
            ? <h3>hey</h3> :
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
            <Subheader>Todos Anúncios:</Subheader>
            <List >
                {list}
            </List>
        </div>
    )
})
