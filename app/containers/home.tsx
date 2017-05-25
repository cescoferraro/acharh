import * as React from "react"
import { compose } from "recompose"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { HomeStyle } from "../css"
import { AddsList } from "./adds.list"
import { FilterComponent } from "./filter.component"
import { APP_ACTIONS } from "../../store/actions"
import { Route } from "react-router-dom"
import { TabsAchaRS } from "./tabs"

export class HomeContainerClass extends React.Component<any, any> {
    constructor(props) {
        super(props)
        console.log("cesco")
        this.props.FILTER_ACTION()
    }

    public render() {
        return (
            <TabsAchaRS>
                <Route
                    exact={true}
                    path="/"
                    render={() => {
                        return (<div className={HomeStyle.container}>
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>AchaRS</title>
                                <link rel="canonical" href="http://achars.cescoferraro.xyz" />
                            </Helmet>
                            <FilterComponent
                                SET_FILTERS_ACTION={this.props.SET_FILTERS_ACTION}
                                FILTER_ACTION={this.props.FILTER_ACTION}
                                filters={this.props.filters}
                                groups={this.props.groups}
                            />
                            <AddsList
                                adds={this.props.DisplaySearchReducer}
                            />
                        </div >)
                    }}
                />
            </TabsAchaRS>
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
