import * as React from "react"
import { compose } from "recompose"
import * as  barCSS from "./bar.pcss"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { APP_ACTIONS } from "../../store/actions"
import { connect } from "react-redux"
import AppBar from "material-ui/AppBar"
import IconButton from "material-ui/IconButton"
import NavigationClose from "material-ui/svg-icons/navigation/close"
import FlatButton from "material-ui/FlatButton"
import { withRouter } from "react-router"

export const Bar = compose(
    withRouter,
    withStyles(barCSS),
    connect(({ firebase }) => ({}), APP_ACTIONS)
)(({ match, location, ROUTER_EMITTER, FILTER_ACTION }) => {
    return (
        <AppBar
            title="AchaRH"
            className={barCSS.bar}
            iconElementLeft={<FlatButton label="Save" />}
            iconElementRight={<FlatButton label="Save" />}
        />
    )
})
