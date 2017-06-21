import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import SwipeableViews from "react-swipeable-views"
import FaceIcon from "material-ui/svg-icons/action/face.js"
import InboxIcon from "material-ui/svg-icons/content/inbox.js"
import * as CSS from "./css/home.pcss"

interface ITabsAcharhProps {
    ROUTER_EMITTER: any
    location: any
    CSS: any
    home: any
    SET_HOME_STORE_ACTION: any
}

const urls = ["/", "/tools"]

class TabsAchaRHComponent extends React.Component<ITabsAcharhProps, ITabsAcharhProps> {

    constructor(props) { super(props) }

    public componentWillMount() {
        const url = this.props.location.pathname
        if (url === "/") {
            this.props.SET_HOME_STORE_ACTION({ tab: 0 })
        }
        if (url.startsWith("/tools")) {
            this.props.SET_HOME_STORE_ACTION({ tab: 1 })
        }
    }

    public render() {
        const handleChange = (value) => {
            this.props.SET_HOME_STORE_ACTION({ tab: value })
            this.props.ROUTER_EMITTER({ pathname: urls[value] })
        }
        return (
            <div id="tabs" className={CSS.page} >
                <Tabs
                    className={CSS.tabs}
                    onChange={handleChange}
                    value={this.props.home.tab}
                >
                    <Tab icon={<InboxIcon />}
                        onClick={() => {
                            this.props.SET_HOME_STORE_ACTION({ tab: 0 })
                            this.props.ROUTER_EMITTER({ pathname: "/" })
                        }}
                        label="ANÚNCIOS" value={0} />
                    <Tab icon={<FaceIcon />}
                        onClick={() => {
                            this.props.SET_HOME_STORE_ACTION({ tab: 1 })
                            this.props.ROUTER_EMITTER({ pathname: "/tools" })
                        }}
                        label="TOOLS" value={1} />
                </Tabs>
                <SwipeableViews
                    className={CSS.tabcontainer}
                    onChangeIndex={handleChange}
                    index={this.props.home.tab}
                >
                    {this.props.children}
                </SwipeableViews>
            </div >
        )
    }
}
export const TabsAchaRH = withStyles(CSS)(TabsAchaRHComponent)
