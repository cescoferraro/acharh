import * as React from "react"
import { compose } from "recompose"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as addCSS from "../css/add.pcss"
import * as classNames from "classnames"
import { Add } from "./add"
import { isLoaded } from 'react-redux-firebase'

export const AddsList = compose(
    withStyles(addCSS)
)(({ adds, filters, groups }) => {
    const list = !isLoaded(groups)
        ? <h2>hehehehehe</h2>
        : (adds.map((add) => (<Add key={Math.random()} groups={groups} add={add} />)))
    const hideContainer = !filters.hidden ?
        classNames(addCSS.container) : classNames(addCSS.containerHidden)

    return (
        <div className={hideContainer}>
            {adds.length === 0 ? <h2>List is empty!</h2> : list}
        </div>
    )
})
