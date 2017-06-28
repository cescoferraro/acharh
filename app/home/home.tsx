import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { compose } from "recompose"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { TabsAchaRH } from "./tabs"
import { APP_ACTIONS } from "../../store/actions"
import { AddModal } from "./details/add.modal"
import { MainComponent } from "./main/main.component"
import { DetailRoutes } from "./details/routes"
import { Tools } from "./tools/tools"

export class HomeContainerClass extends React.Component<any, any> {
    public previousLocation = this.props.location
    constructor(props) { super(props) }

    public componentWillUpdate(nextProps) {
        const { location } = this.props
        if (
            nextProps.history.action !== "POP" &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location
        }
    }

    public render() {
        console.log("hey hey ")
        const browser = () => (<MainComponent {...this.props} />)
        const tools = () => (<Tools {...this.props} />)
        const { location } = this.props
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        )
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    {location.pathname.startsWith("/add") && !isModal ?
                        <DetailRoutes {...this.props} /> :
                        <TabsAchaRH {...this.props} >
                            <Route exact={true} path="/" render={browser} />
                            <Route path="/tools" render={tools} />
                        </TabsAchaRH>
                    }
                </Switch>
                {isModal ? <Route path="/add/:id" component={AddModal} /> : null}
            </div>
        )
    }
}

export const HomeContainer = compose(
    withRouter,
    connect(
        ({ home, filters, groups, adds }) =>
            ({ filters, home, groups, adds, }), APP_ACTIONS)
)(HomeContainerClass)
