import * as React from "react";
import { Route, Switch } from "react-router-dom"
import { InsertAddForm } from "./insert/add.form"
import RaisedButton from "material-ui/RaisedButton"
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import * as CSS from "./css/tools.pcss"


class ToolsComponent extends React.Component<any, any>{

    public componentWillMount() {
        console.log("hey")
        /* this.props.SET_HOME_STORE_ACTION({ tab: 0 })*/
    }
    render() {
        return <div>
            <span className={CSS.flex}>
                <RaisedButton
                    secondary={true}
                    className={CSS.button}
                    onClick={() => {
                        this.props.ROUTER_EMITTER({ pathname: "/" })
                        this.props.SET_HOME_STORE_ACTION({ tab: 0 })
                    }}
                    label="CLICK-ME"
                />
                <RaisedButton
                    className={CSS.button}
                    secondary={true}
                    onClick={() => { this.props.ROUTER_EMITTER("/tools/form") }}
                    label="CLICK-ME"
                />
                <RaisedButton
                    secondary={true}
                    className={CSS.button}
                    onClick={() => { this.props.ROUTER_EMITTER("/tools/cesco") }}
                    label="CLICK-ME"
                />
            </span>
            <Switch>
                <Route
                    path="/tools/cesco"
                    exact={true}
                    render={() => { return <InsertAddForm {...this.props} /> }}
                />
                <Route
                    path="/tools/form"
                    exact={true}
                    render={() => { return <h2>teste2222</h2> }}
                />
            </Switch>
        </div>

    }
}

export const Tools = withStyles(CSS)(ToolsComponent)




