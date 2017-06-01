import * as React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import SwipeableViews from "react-swipeable-views"
import FaceIcon from "material-ui/svg-icons/action/face.js"
import InboxIcon from "material-ui/svg-icons/content/inbox.js"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import * as tabsCSS from "../css/tabs.pcss"
import { compose } from "recompose"
import { APP_ACTIONS } from "../../store/actions"

class TabsExampleSwipeableClass extends React.Component<any, any> {

    constructor(props) {
        super(props)
    }

    public componentWillMount() {
        console.warn("[TABS]")
        switch (this.props.computedMatch.url) {
            case "/":
                this.props.SET_HOME_STORE_ACTION({ tab: 0 })
                break
            case "/insert":
                this.props.SET_HOME_STORE_ACTION({ tab: 1 })
                break
        }
    }
    public render() {
        const handleChange = (value) => {
            const urls = ["/", "/insert"]
            this.props.SET_HOME_STORE_ACTION({ tab: value })
            this.props.ROUTER_EMITTER(urls[value])
        }
        return (
            <div
                id="tabs"
                className={tabsCSS.page}
            >
                <Tabs
                    className={tabsCSS.tabs}
                    onChange={handleChange}
                    value={this.props.home.tab}
                >
                    <Tab icon={<InboxIcon />} label="BROWSE" value={0} />
                    <Tab icon={<FaceIcon />} label="INSERT" value={1} />
                </Tabs>
                <SwipeableViews
                    className={tabsCSS.container}
                    index={this.props.home.tab}
                    onChangeIndex={handleChange}
                >
                    {this.props.children}
                </SwipeableViews>
            </div>
        )
    }
}
export const TabsAchaRS = compose(
    withRouter,
    withStyles(tabsCSS),
    connect((state) => ({
        app: state.app,
        home: state.home
    }), APP_ACTIONS)
)(TabsExampleSwipeableClass)
