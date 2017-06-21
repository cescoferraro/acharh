import * as React from "react"
import { AddsList } from "./list/adds.list"
import { FilterComponent } from "./filter/filter.component"
import { Helmet } from "react-helmet"
import { compose } from "recompose"
import * as HomeStyle from "../css/home.pcss"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { isServer } from "../../../shared/mix"

class MainComponentClass extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    public componentWillMount() {
        if (!isServer()) {
            const visited = localStorage.getItem("visited")
            if (visited !== "true") {
                alert("Please view this is Firefox")
                localStorage.setItem("visited", "true")
            }
        }
    }
    public render() {
        return (
            <div className={HomeStyle.container} >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Anúncios | AchaRH </title>
                    <link rel="canonical" href="http://acharh.cescoferraro.xyz" />
                </Helmet>
                <AddsList {...this.props} />
                <FilterComponent {...this.props} />
            </div >
        )
    }
}

export const MainComponent = compose(withStyles(HomeStyle))(MainComponentClass)
