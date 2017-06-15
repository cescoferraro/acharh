import * as React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { APP_ACTIONS } from "../../../store/actions"
import { AddGeneral } from "../browser/list/general";
import { AddCategories } from "../browser/list/categories";
import { AddPhones } from "../browser/list/phones";
import { AddImages } from "../browser/list/images";
import { withRouter } from "react-router"
import { compose } from "recompose"
import { dataToJS, firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase"
import { Empty, Loading } from "../../../shared/components/helpers";

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
        return (<div>
            <Helmet>
                <title>AchaRH | {this.props.match.params.id}</title>
            </Helmet>
            {this.props.children} </div>)
    }
}

export const DetailComponent = compose(
    firebaseConnect(["/groups"]),
    connect(({ firebase }) => ({
        groups: dataToJS(firebase, "/groups", {}),
    }))
)(({ detail, groups }) => {
    console.log(detail)
    console.log(groups)
    return !isLoaded(groups) ?
        <Loading /> : isEmpty(groups) ? <Empty /> : (
            <div>
                <AddGeneral add={detail} />
                <AddCategories groups={groups} add={detail} />
                <AddPhones add={detail} />
                <AddImages add={detail} />
            </div>
        )
})

export const AddPage = compose(
    withRouter,
)(AddPageComponent)
