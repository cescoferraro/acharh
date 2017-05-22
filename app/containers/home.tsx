import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as React from "react"
import { connect } from "react-redux"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import { APP_ACTIONS } from "../../store/actions"
import { HomeStyle } from "../css"
import { Helmet } from "react-helmet"
import { compose } from "recompose"
import { FilterComponent } from "./filter.component"
import { Extras } from "./extras"
import { AddsList } from "./adds.list"

export class HomeContainerClass extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.props.SEARCH_ACTION(" ")
    }

    public render() {
        return (
            <div className={HomeStyle.container}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>AchaRS</title>
                    <link rel="canonical" href="http://achars.cescoferraro.xyz" />
                </Helmet>
                <Extras
                    app={this.props.app}
                    css={HomeStyle.app}
                    ROUTER_EMITTER={this.props.ROUTER_EMITTER}
                />
                <FilterComponent
                    SET_FILTERS_ACTION={this.props.SET_FILTERS_ACTION}
                    filters={this.props.filters}
                    groups={this.props.groups}
                />
                <AddsList
                    adds={this.props.DisplaySearchReducer}
                />
            </div >
        )
    }
}

export const HomeContainer = compose(
    withStyles(HomeStyle),
    firebaseConnect(["/app", "/adds", "/groups"]),
    connect(({ firebase, todos, filters, DisplaySearchReducer }) => ({
        filters,
        DisplaySearchReducer,
        adds: dataToJS(firebase, "/adds"),
        groups: dataToJS(firebase, "/groups"),
        app: dataToJS(firebase, "/app")
    }), APP_ACTIONS)
)(HomeContainerClass)
