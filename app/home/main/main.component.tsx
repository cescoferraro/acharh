import * as React from "react"
import { AddsList } from "./list/adds.list"
import { FilterComponent } from "./filter/filter.component"
import { compose } from "recompose"
import * as HomeStyle from "../css/home.pcss"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { isServer, MyHelmet } from "../../../shared/mix"

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
                <MyHelmet title="Anúncios" />
                <AddsList {...this.props} />
                <FilterComponent {...this.props} />
            </div >
        )
    }
}

export const MainComponent = compose(withStyles(HomeStyle))(MainComponentClass)
