import * as React from "react"
import { AddsList } from "./adds.list"
import { FilterComponent } from "./filter.component"
import { Helmet } from "react-helmet"
import { compose } from "recompose"
import { HomeStyle } from "../css"
import withStyles from "isomorphic-style-loader/lib/withStyles"

class BrowserComponentClass extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    public componentWillMount() {
        this.props.FILTER_ACTION()
    }

    public render() {
        return (
            <div className={HomeStyle.container}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>AchaRS</title>
                    <link rel="canonical" href="http://achars.cescoferraro.xyz" />
                </Helmet>
                <FilterComponent
                    home={this.props.home}
                    SET_HOME_STORE_ACTION={this.props.SET_HOME_STORE_ACTION}
                    SET_FILTERS_ACTION={this.props.SET_FILTERS_ACTION}
                    FILTER_ACTION={this.props.FILTER_ACTION}
                    filters={this.props.filters}
                    groups={this.props.groups}
                />
                <AddsList
                    home={this.props.home}
                    groups={this.props.groups}
                    adds={this.props.DisplaySearchReducer}
                />
            </div >
        )
    }
}

export const BrowserComponent = compose(withStyles(HomeStyle))(BrowserComponentClass)
