import withStyles from "isomorphic-style-loader/lib/withStyles"
import RaisedButton from "material-ui/RaisedButton"
import * as React from "react"
import { connect } from "react-redux"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import { APP_ACTIONS } from "../../store/actions"
import { HomeStyle } from "../css"
import { Helmet } from "react-helmet"
import { compose } from "recompose"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { Loading, Empty } from "../../shared/components/helpers"
import { FilterComponent } from "./filter.component"




export class HomeContainerClass extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.props.SEARCH_ACTION(" ")
    }

    public render() {

        const handleClick = () => {
            this.props.ROUTER_EMITTER("/whatever")
        }
        const app = (!isLoaded(this.props.app) ?
            <Loading /> : isEmpty(this.props.app) ? <Empty /> :
                <h2>{this.props.app.title}</h2>)
        const NFL = (
            <Helmet>
                <meta charSet="utf-8" />
                <title>AchaRS CESCO</title>
                <link rel="canonical" href="http://achars.cescoferraro.xyz" />
            </Helmet>
        )
        const extras = (
            <div className={HomeStyle.app}>
                <h2>React-boil</h2>
                <RaisedButton
                    onClick={handleClick}
                    fullWidth={true}
                    label="Go Somewhere"
                    primary={true}
                />
            </div>
        )
        return (
            <div className={HomeStyle.container}>
                {NFL}
                {extras}
                {app}
                <FilterComponent
                    SET_FILTERS_ACTION={this.props.SET_FILTERS_ACTION}
                    filters={this.props.filters}
                    groups={this.props.groups}
                />
                {this.props.DisplaySearchReducer.map(
                    (add) => (
                        <div key={Math.random()}>
                            <h2>{add.title}</h2>
                        </div>
                    )
                )}
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
