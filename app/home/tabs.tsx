import * as React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import SwipeableViews from "react-swipeable-views"
import FaceIcon from "material-ui/svg-icons/action/face.js"
import InboxIcon from "material-ui/svg-icons/content/inbox.js"

interface ITabsAcharhProps {
    ROUTER_EMITTER: any
    location: any
    CSS: any
    home: any
    SET_HOME_STORE_ACTION: any
}

export class TabsAchaRH extends React.Component<ITabsAcharhProps, ITabsAcharhProps> {

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
                    value={this.props.home.tab}
                >
                    <Tab icon={<InboxIcon />}
                        onClick={() => {
                            this.props.SET_HOME_STORE_ACTION({ tab: 0 })
                            this.props.ROUTER_EMITTER({ pathname: "/" })
                            console.log("dsfds")
                        }}
                        label="ANÚNCIOS" value={0} />
                    <Tab icon={<FaceIcon />}
                        onClick={() => {
                            this.props.SET_HOME_STORE_ACTION({ tab: 1 })
                            this.props.ROUTER_EMITTER({ pathname: "/insert" })
                            console.log("dsfds")
                        }}
                        label="ANUNCIAR" value={1} />
                </Tabs>
                <SwipeableViews
                    className={this.props.CSS.tabcontainer}
                    index={this.props.home.tab}
                >
                    {this.props.children}
                </SwipeableViews>
            </div>
        )
    }
}
