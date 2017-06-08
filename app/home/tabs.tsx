import * as React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import SwipeableViews from "react-swipeable-views"
import FaceIcon from "material-ui/svg-icons/action/face.js"
import InboxIcon from "material-ui/svg-icons/content/inbox.js"

interface ITabsAcharsProps {
    ROUTER_EMITTER: any
    location: any
    CSS: any
    home: any
    SET_HOME_STORE_ACTION: any
}

export class TabsAchaRS extends React.Component<ITabsAcharsProps, ITabsAcharsProps> {

    constructor(props) {
        super(props)
    }

    public componentWillMount() {
        console.warn("[TABS]")
        const url = this.props.location.pathname
        if (url === "/") {
            this.props.SET_HOME_STORE_ACTION({ tab: 0 })
        }
        if (url === "/insert") {
            this.props.SET_HOME_STORE_ACTION({ tab: 1 })
        }
    }

    public render() {
        const handleChange = (value) => {
            const urls = ["/", "/insert"]
            this.props.SET_HOME_STORE_ACTION({ tab: value })
            this.props.ROUTER_EMITTER({
                pathname: urls[value]
                // this is the trick!
            })
        }
        return (
            <div
                id="tabs"
                className={this.props.CSS.page}
            >
                <Tabs
                    className={this.props.CSS.tabs}
                    onChange={handleChange}
                    value={this.props.home.tab}
                >
                    <Tab icon={<InboxIcon />} label="BROWSE" value={0} />
                    <Tab icon={<FaceIcon />} label="INSERT" value={1} />
                </Tabs>
                <SwipeableViews
                    className={this.props.CSS.tabcontainer}
                    index={this.props.home.tab}
                    onChangeIndex={handleChange}
                >
                    {this.props.children}
                </SwipeableViews>
            </div>
        )
    }
}
