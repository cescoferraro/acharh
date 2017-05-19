import * as React from "react"
import { Route, Switch, Link } from "react-router-dom"
import { HomeContainer } from "./containers/home"
import { NoMatch } from "../shared/components/nomatch"
import * as Debug from "debug"

Debug.enable("*")

export let Router = () => {
    const debug = Debug("ROUTER")
    debug("Request if being handled!")
    return (
        <Switch>
            <Route exact={true} path="/" component={HomeContainer} />
            <Route component={NoMatch} />
        </Switch>
    )
}
