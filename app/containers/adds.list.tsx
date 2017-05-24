import * as React from "react"
import { List, ListItem } from "material-ui/List"
import ContentInbox from "material-ui/svg-icons/content/inbox"
import { compose } from "recompose"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { addCSS } from "../css"

export const AddsList = compose(
    withStyles(addCSS)
)(({ adds }) => {
    const list = (
        adds.map(
            (add) => (
                <div key={Math.random()}>
                    <ContentInbox />
                    <h2>{add.title}</h2>
                    <h2>{add.uf}</h2>
                    <h2>{add.group}</h2>
                    <h2>{add.category}</h2>
                </div>
            )
        )
    )
    return (<List> {adds.length === 0 ? <h2>List is empty!</h2> : list} </List>)
})
