import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { HomeContainer } from "./containers/home"
import { NoMatch } from "../shared/components/nomatch"
import { InsertAdd } from "./containers/add.form"
import * as Debug from "debug"
import { Bar } from "./bar/bar"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { compose } from "recompose"
import { routerCSS } from "./css"
Debug.enable("*")

export let Router = compose(
    withStyles(routerCSS)
)(() => {
    const debug = Debug("ROUTER")
    debug("Request if being handled!")
    return (
        <div className={routerCSS.container}>
            <Route component={Bar} />
            <Route exact={true} path="/" component={HomeContainer} />
            <Route exact={true} path="/insert" component={HomeContainer} />
            <Route component={NoMatch} />
        </div>
    )
})
