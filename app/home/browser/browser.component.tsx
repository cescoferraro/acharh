import * as React from "react"
import { AddsList } from "./list/adds.list"
import { FilterComponent } from "./filter/filter.component"
import { Helmet } from "react-helmet"
import { compose } from "recompose"
import * as HomeStyle from "../home.pcss"
import withStyles from "isomorphic-style-loader/lib/withStyles"

const isServer = () => !(typeof window !== "undefined" && window.document)


class BrowserComponentClass extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    public componentWillMount() {
        if (!isServer()) {
            console.info("BROWSER")
            var visited = localStorage.getItem('visited');
            if (visited !== "true") {
                alert("Please view this is Firefox");
                localStorage.setItem('visited', "true");
            }
        }
    }

    public render() {
        return (
            <div className={HomeStyle.container}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Anúncios | AchaRH </title>
                    <link rel="canonical" href="http://acharh.cescoferraro.xyz" />
                </Helmet>
                <AddsList
                    filters={this.props.filters}
                    ROUTER_EMITTER={this.props.ROUTER_EMITTER}
                    userAgent={this.props.userAgent}
                    groups={this.props.groups}
                    FILTER_ACTION={this.props.FILTER_ACTION}
                    adds={this.props.filteredAdds}
                />
                <FilterComponent
                    SET_HOME_STORE_ACTION={this.props.SET_HOME_STORE_ACTION}
                    SET_FILTERS_ACTION={this.props.SET_FILTERS_ACTION}
                    FILTER_ACTION={this.props.FILTER_ACTION}
                    filters={this.props.filters}
                    groups={this.props.groups}
                />
            </div >
        )
    }
}

export const BrowserComponent = compose(withStyles(HomeStyle))(BrowserComponentClass)
