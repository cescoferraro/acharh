import * as React from "react"
import { Route } from "react-router-dom"
import { HomeContainer } from "./home/home"
import { NoMatch } from "../shared/components/nomatch"
import { Bar } from "./bar/bar"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { compose } from "recompose"
import { routerCSS } from "./css"

export let Router = compose(
    withStyles(routerCSS)
)(() => {
    return (
        <div className={routerCSS.container}>
            <Route component={Bar} />
            <Route exact={true} path="/" component={HomeContainer} />
            <Route exact={true} path="/insert" component={HomeContainer} />
            <Route component={NoMatch} />
        </div>
    )
})
