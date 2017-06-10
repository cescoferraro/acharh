import * as React from "react"
import { compose } from "recompose"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as addCSS from "../css/add.pcss"
import * as classNames from "classnames"
import { Add } from "./add"
import { isLoaded, isEmpty } from "react-redux-firebase"

export const AddsList = compose(
    withStyles(addCSS)
)(({ adds, filters, groups }) => {
    const list = !isLoaded(groups)
        ? <h2>LATER</h2>
        : isEmpty(groups)
            ? <h3>hey</h3> :
            (adds.map((add) =>
                (
                    <Add
                        key={Math.random()}
                        groups={groups}
                        add={add}
                    />
                )))
    const hideContainer = filters.hidden ?
        classNames(addCSS.containerHidden) :
        classNames(addCSS.container)
    return (
        <div className={hideContainer}>
            {list}
        </div>
    )
})
