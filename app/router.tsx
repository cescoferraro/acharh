import * as React from "react"
import { Bar } from "./bar/bar"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as baseCSS from "./css/base/base.pcss"
import { HomeContainer } from "./home/home"
import { Toaster } from "../shared/toaster"
import { Route, Switch } from "react-router"

export let Router = withStyles(baseCSS)((props) => {
    const Home = () => (<HomeContainer {...props} />)
    return (
        <div>
            <Route component={Bar} />
            <Switch>
                <Route path="/" render={Home} />
                <Route path="/insert" render={Home} />
                <Route path="/add" render={Home} />
            </Switch>
            <Route component={Toaster} />
        </div>
    )
})
