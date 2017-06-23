import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { Bar } from "./bar/bar"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as baseCSS from "./css/base.pcss"
import { HomeContainer } from "./home/home"
import { Toaster } from "../shared/toaster"

export let Router = withStyles(baseCSS)(({ userAgent, production }) => {
    console.log("hey hey")
    return (
        <div>
            <Route component={Bar} />
            <Switch>
                <Route
                    path="/"
                    render={() => <HomeContainer userAgent={userAgent} />}
                />
                <Route
                    path="/insert"
                    render={() => <HomeContainer userAgent={userAgent} />}
                />
                <Route
                    path="/add"
                    render={() => <HomeContainer userAgent={userAgent} />}
                />
            </Switch>
            <Route component={Toaster} />
        </div>
    )
})
