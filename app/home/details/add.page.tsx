import * as React from "react"
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { APP_ACTIONS } from "../../../store/actions"
import { withRouter } from "react-router"
import { compose } from "recompose"
import { dataToJS, firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase"
import { Empty, Loading } from "../../../shared/components/helpers"
import { AddGeneral } from "./components/general"
import { AddCategories } from "./components/categories"
import { AddPhones } from "./components/phones"
import { AddImageDetail } from "./components/images"
import * as CSS from "./css/details.pcss"


export class AddPageComponent extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    public componentWillMount() {
        if (!this.props.match.url.endsWith(".json")) {
            this.props.GET_ADD(this.props.match.params.id)
        }
    }

    public render() {
        return (<div className={CSS.container}>
            <Helmet>
                <title>AchaRH | {this.props.match.params.id}</title>
            </Helmet>
            {this.props.children} </div>)
    }
}
export const DetailComponent = compose(
    withStyles(CSS),
    firebaseConnect(["/groups"]),
    connect(({ firebase }) => ({
        groups: dataToJS(firebase, "/groups", {}),
    }))
)(({ detail, groups }) => {
    return !isLoaded(groups) ?
        <Loading /> : isEmpty(groups) ? <Empty /> : (
            <div className={CSS.content}>
                <AddImageDetail add={detail} />
                <AddGeneral add={detail} />
                <AddCategories groups={groups} add={detail} />
                <AddPhones add={detail} />
            </div>
        )
})

export const AddPage = compose(
    withRouter,
)(AddPageComponent)
