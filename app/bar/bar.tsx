import * as React from "react"
import { compose } from "recompose"
import { barCSS } from "../css"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { APP_ACTIONS } from "../../store/actions"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import { connect } from "react-redux"
import AppBar from "material-ui/AppBar"

export const Bar = compose(
    withStyles(barCSS),
    firebaseConnect(["/app"]),
    connect(({ firebase }) => ({
        app: dataToJS(firebase, "/app")
    }), APP_ACTIONS)
)(({ app, ROUTER_EMITTER, FILTER_ACTION }) => {
    return (
        <AppBar
            title="AchaRS"
            className={barCSS.bar}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    )
})
