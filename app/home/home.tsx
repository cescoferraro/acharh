import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { compose } from "recompose"
import { connect } from "react-redux"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { withRouter } from "react-router"
import * as HomeStyle from "./home.pcss"
import { Loading, Empty } from "../../shared/components/helpers"
import { TabsAchaRH } from "./tabs"
import { APP_ACTIONS } from "../../store/actions"
import { AddModal } from "./details/add.modal"
import { AddPage, DetailComponent } from "./details/add.page"
import { InsertAddForm } from "./insert/add.form"
import { BrowserComponent } from "./browser/browser.component"

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
                ROUTER_EMITTER={this.props.ROUTER_EMITTER}
                filters={this.props.filters}
                userAgent={this.props.userAgent}
                groups={this.props.groups}
                filteredAdds={this.props.filteredAdds}
            />
        )
        const insert = () => (
            !isLoaded(this.props.groups) ?
                <Loading /> : isEmpty(this.props.groups) ? <Empty /> :
                    (
                        <InsertAddForm
                            groups={this.props.groups}
                            INSERT_ADD={this.props.INSERT_ADD}
                            setHomeStore={this.props.SET_HOME_STORE_ACTION}
                        />)
        )
        const { location } = this.props
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        )
        const thing = (
            <TabsAchaRH
                location={location}
                CSS={HomeStyle}
                home={this.props.home}
                SET_HOME_STORE_ACTION={this.props.SET_HOME_STORE_ACTION}
                ROUTER_EMITTER={this.props.ROUTER_EMITTER}
            >
                <Route exact={true} path="/" render={browser} />
                <Route path="/insert" exact={true} render={insert} />
            </TabsAchaRH>
        )



        const thatDet = () => (
            <AddPage GET_ADD={this.props.GET_ADD} >
                <DetailComponent detail={this.props.home.detail} />
            </AddPage>
        )
        const pageP = (
            <Route path="/add/:id" render={thatDet} />
        )
        /* const specific = (<Route path="/add/:id" component={pageP} />)*/
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    {location.pathname.startsWith("/add") ? pageP : thing}
                </Switch>
                {isModal ? <Route path="/add/:id" component={AddModal} /> : null}
            </div>
        )
    }
}

export const HomeContainer = compose(
    withRouter,
    withStyles(HomeStyle),
    firebaseConnect(["/app", "/groups"]),
    connect(({ firebase, home, todos, filters, filteredAdds }) => ({
        filters,
        home,
        filteredAdds,
        groups: dataToJS(firebase, "/groups", {}),
        app: dataToJS(firebase, "/app", {})
    }), APP_ACTIONS)
)(HomeContainerClass)
