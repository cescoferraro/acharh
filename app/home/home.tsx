import * as React from "react"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { Loading, Empty } from "../../shared/components/helpers"
import { InsertAdd } from "./add.form"
import { compose } from "recompose"
import { connect } from "react-redux"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { HomeStyle } from "../css"
import { APP_ACTIONS } from "../../store/actions"
import { Route, Switch } from "react-router-dom"
import { TabsAchaRS } from "./tabs"
import { BrowserComponent } from "./browser.component"

export class HomeContainerClass extends React.Component<any, any> {
    constructor(props) {
        super(props)
        console.warn("[HOME]")
        /* this.props.FILTER_ACTION()*/
    }

    public render() {
        const browser = () => (
            <BrowserComponent
                SET_FILTERS_ACTION={this.props.SET_FILTERS_ACTION}
                SET_HOME_STORE_ACTION={this.props.SET_HOME_STORE_ACTION}
                FILTER_ACTION={this.props.FILTER_ACTION}
                home={this.props.home}
                filters={this.props.filters}
                groups={this.props.groups}
                DisplaySearchReducer={this.props.DisplaySearchReducer}
            />
        )
        const insert = () => (
            !isLoaded(this.props.groups) ?
                <Loading /> : isEmpty(this.props.groups) ? <Empty /> :
                    (
                        <InsertAdd
                            groups={this.props.groups}
                            INSERT_ADD={this.props.INSERT_ADD}
                            SET_HOME_STORE_ACTION={this.props.SET_HOME_STORE_ACTION}
                        />)
        )

        return (
            <div>
                <Switch>
                    <TabsAchaRS>
                        <Route exact={true} path="/" render={browser} />
                        <Route path="/insert" exact={true} render={insert} />
                    </TabsAchaRS>
                </Switch>
            </div>
        )
    }
}

export const HomeContainer = compose(
    withStyles(HomeStyle),
    firebaseConnect(["/app", "/adds", "/groups"]),
    connect(({ firebase, home, todos, filters, DisplaySearchReducer }) => ({
        filters,
        home,
        DisplaySearchReducer,
        adds: dataToJS(firebase, "/adds"),
        groups: dataToJS(firebase, "/groups"),
        app: dataToJS(firebase, "/app")
    }), APP_ACTIONS)
)(HomeContainerClass)
