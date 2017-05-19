import * as Debug from "debug"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import RaisedButton from "material-ui/RaisedButton"
import * as React from "react"
import { connect } from "react-redux"
import { dataToJS, firebaseConnect } from "react-redux-firebase"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { APP_ACTIONS } from "../../store/actions"
import { HomeStyle } from "../css"

const Loading = () => (<h2>Loading</h2>)
const Empty = () => (<h2>Empty</h2>)

@withStyles(HomeStyle)
@firebaseConnect(["/app", "/adds"])
@connect(({ firebase, todos, DisplaySearchReducer }) => ({
    actualSearch: DisplaySearchReducer,
    adds: dataToJS(firebase, "/adds"),
    app: dataToJS(firebase, "/app"),
}), APP_ACTIONS)
export class HomeContainer extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.props.SEARCH_ACTION(" ")
    }
    public render() {
        /* let debug = Debug("HomeContainer")*/
        /* debug("CREATED!")*/
        /* debug(this.props)*/
        const FirebaseAdds = !isLoaded(this.props.adds) ? <Loading /> :
            isEmpty(this.props.adds) ? <Empty /> :
                Object.keys(this.props.adds).
                    map((add) => <h2 key={Math.random()}>{add}</h2>)

        /* const FrontEndAdds = Object.keys(this.props.DisplaySearchReducer).*/
        /* map((add) => <h2 key={Math.random()}>{this.props.DisplaySearchReducer[add].email}</h2>)*/

        const app = !isLoaded(this.props.app) ? <Loading /> :
            isEmpty(this.props.app) ? <Empty /> :
                <h2>{this.props.app.title}</h2>

        return (
            <div className={HomeStyle.app}>
                {app}
                {FirebaseAdds}
                {/* {FrontEndAdds} */}
                <h2>React-boil</h2>
                <RaisedButton
                    onClick={() => { this.props.ROUTER_EMITTER("/whatver") }}
                    fullWidth={true}
                    label="Go Somewhere" primary={true} />
            </div >
        )
    }
}
