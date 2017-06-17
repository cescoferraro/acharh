import * as React from "react"
import { compose } from "recompose"
import * as  barCSS from "./bar.pcss"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { APP_ACTIONS } from "../../store/actions"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import { connect } from "react-redux"
import AppBar from "material-ui/AppBar"
import { withRouter } from "react-router"

export const Bar = compose(
    withRouter,
    withStyles(barCSS),
    firebaseConnect(["/app"]),
    connect(({ firebase }) => ({

        app: dataToJS(firebase, "/app", {})
    }), APP_ACTIONS)
)(({ match, location, app, ROUTER_EMITTER, FILTER_ACTION }) => {
    return (
        <AppBar
            title="AchaRH"
            className={barCSS.bar}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    )
})
