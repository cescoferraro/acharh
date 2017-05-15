import * as React from "react"
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { firebaseConnect, dataToJS } from 'react-redux-firebase'
import { HomeStyle } from "../css";
import { push } from 'connected-react-router'
import * as Debug from 'debug';
import { isLoaded, isEmpty } from 'react-redux-firebase'

@withStyles(HomeStyle)
@firebaseConnect(['/app'])
@connect(({ firebase, todos }) => ({ app: dataToJS(firebase, '/app') }))
export class HomeContainer extends React.Component<any, any> {
    render() {
        var debug = Debug("HomeContainer")
        debug('CREATED!');
        debug(this.props.app);
        const app = !isLoaded(this.props.app)
            ? 'Loading'
            : isEmpty(this.props.app)
                ? 'Todo list is empty' : <h2>{this.props.app.title}</h2>

        return (
            <div className={HomeStyle.app}>
                {app}
                <h2>React-boil</h2>
                <RaisedButton
                    onClick={() => { this.props.dispatch(push("/whatver")) }}
                    fullWidth={true}
                    label="Go Somewhere" primary={true} />
            </div >
        )
    }
}

