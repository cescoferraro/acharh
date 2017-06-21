import * as React from "react";
import { Route, Switch } from "react-router-dom"
import { InsertAddForm } from "./insert/add.form"

export const Tools = (props) => {
    return <div>
        <h2>iIIIII</h2>
        <button onClick={() => {
            props.ROUTER_EMITTER({ pathname: "/" })
            props.SET_HOME_STORE_ACTION({ tab: 0 })
        }} >CLICK-ME</button>
        <button onClick={() => {
            console.log(props)
            props.ROUTER_EMITTER("/tools/form")
        }} >CLICK-ME</button>
        <button onClick={() => {
            props.ROUTER_EMITTER("/tools/cesco")
        }} >CLICK-ME</button>
        <Switch>
            <Route path="/tools/cesco" exact={true} render={() => { return <InsertAddForm {...props} /> }} />
            <Route path="/tools/form" exact={true} render={() => { return <h2>teste2222</h2> }} />
        </Switch>
    </div>
}




