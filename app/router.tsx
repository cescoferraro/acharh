import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { HomeContainer } from "./home/home"
import { Bar } from "./bar/bar"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { compose } from "recompose"
import * as routerCSS from "./router.pcss"

export let Router = compose(
    withStyles(routerCSS)
)(() => {
    return (
        <div className={routerCSS.container}>
            <Route component={Bar} />
            <Switch>
                <Route path="/" component={HomeContainer} />
                <Route path="/insert" component={HomeContainer} />
                <Route path="/add" component={HomeContainer} />
            </Switch>
        </div>
    )
})
