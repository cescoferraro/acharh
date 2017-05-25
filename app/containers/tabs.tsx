import * as React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import SwipeableViews from "react-swipeable-views"
import FaceIcon from "material-ui/svg-icons/action/face.js"
import InboxIcon from "material-ui/svg-icons/content/inbox.js"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { withRouter } from "react-router"
import { tabsCSS } from "../css"
import { compose } from "recompose"

class TabsExampleSwipeableClass extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.state = { slideIndex: 0 }
    }

    public render() {
        const handleChange = (value) => {
            this.setState({
                slideIndex: value
            },
                () => {
                    switch (value) {
                        case 0:
                            this.props.dispatch(push("/"))
                            break
                        case 1:
                            this.props.dispatch(push("/blog"))
                            break
                    }
                }
            )

        }
        return (
            <div
                id="tabs"
                className={tabsCSS.page}
            >
                <Tabs
                    className={tabsCSS.tabs}
                    onChange={handleChange}
                    value={this.state.slideIndex}
                >

                    <Tab
                        icon={<InboxIcon />}
                        label="ADDS"
                        value={0}
                    />
                    <Tab icon={<FaceIcon />} label="BLOG" value={1} />
                </Tabs>
                <SwipeableViews
                    className={tabsCSS.container}
                    index={this.state.slideIndex}
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
        app: state.app
    }))
)(TabsExampleSwipeableClass)
