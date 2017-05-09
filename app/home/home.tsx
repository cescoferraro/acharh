import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import { isLoaded, isEmpty, firebaseConnect, dataToJS } from "react-redux-firebase";
import { compose } from "recompose";
import { APP_ACTIONS } from "../../store/actions"
import { AddsList } from "./components/adds-list";
import { SearchInput } from "./components/adds-search";
import { HomeStyle } from "./css/style";
import ReduxModal from 'react-redux-modal'
import { TabsExampleSwipeable } from "../../shared/components/tabs/tabs";
import { Switch, Route } from "react-router-dom";

import { toastr } from 'react-redux-toastr'



@withStyles(HomeStyle)
@connect(state => ({ AddsReducer: state.AddsReducer }), APP_ACTIONS)
export class HomeComponent extends React.Component<any, any>{

    constructor(props) {
        super(props)
        this.props.SEARCH(" ")
    }

    render() {
        return <div>
            <Switch>
                <TabsExampleSwipeable>
                    <Route exact path="/"
                        render={() => {
                            return <div className={HomeStyle.container}>
                                <button
                                    onClick={() => toastr.success('The title', 'The message')}
                                    type="button">Toastr Success</button>
                                <SearchInput search={this.props.SEARCH} />
                                <AddsList searchAdds={this.props.AddsReducer} />
                            </div>
                        }}
                    />
                    <Route exact path="/blog"
                        render={() => {
                            return <div className={HomeStyle.container}>
                                <h2>BLOG</h2>
                            </div>
                        }} />
                </TabsExampleSwipeable>
            </Switch>
            <ReduxModal></ReduxModal>
        </div>


    }

}
