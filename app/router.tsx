import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { Bar } from "./bar/bar"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as baseCSS from "./css/base.pcss"
import { HomeContainer } from "./home/home"
import { Toaster } from "../shared/toaster"
export let Router = withStyles(baseCSS)(() => {
    return (
        <div>
            <Route component={Bar} />
            <Switch>
                <Route path="/" component={HomeContainer} />
                <Route path="/insert" component={HomeContainer} />
                <Route path="/add" component={HomeContainer} />
            </Switch>
            <Route component={Toaster} />
        </div>
    )
})
