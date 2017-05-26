import * as React from "react"
import { compose } from "recompose"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { addCSS } from "../css"
import * as classNames from "classnames"
import { Add } from "./add"
export const AddsList = compose(
    withStyles(addCSS)
)(({ adds, home }) => {
    const list = (adds.map((add) => (<Add key={Math.random()} add={add} />))
    )
    const hideContainer = !home.hidden ?
        classNames(addCSS.container) : classNames(addCSS.containerHidden)

    return (
        <div className={hideContainer}>
            {adds.length === 0 ? <h2>List is empty!</h2> : list}
        </div>
    )
})
