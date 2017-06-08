import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { AddPage } from "./list/add.modal"
import { InsertAdd } from "./insert/add.form"
import { compose } from "recompose"
import { connect } from "react-redux"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { AddModal } from "./list/add.page"
import * as HomeStyle from "./home.pcss"
import { APP_ACTIONS } from "../../store/actions"
import { TabsAchaRS } from "./tabs"
import { Loading, Empty } from "../../shared/components/helpers"
import { BrowserComponent } from "./list/browser.component"

export class HomeContainerClass extends React.Component<any, any> {
    public previousLocation = this.props.location

    constructor(props) {
        super(props)
        console.warn("[HOME]")
    }

    public componentWillUpdate(nextProps) {
        const { location } = this.props
        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== "POP" &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location
        }
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
        const { location } = this.props
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location // not initial render
        )
        console.log(location)
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    {
                        location.pathname.startsWith("/add") ?
                            <Route path="/add/:id" component={AddPage} />
                            : <TabsAchaRS>
                                <Route exact={true} path="/" render={browser} />
                                <Route path="/insert" exact={true} render={insert} />
                            </TabsAchaRS>
                    }
                </Switch>
                {isModal ? <Route path="/add/:id" component={AddModal} /> : null}
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
