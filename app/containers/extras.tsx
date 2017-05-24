import * as React from "react"
import { Loading, Empty } from "../../shared/components/helpers"
import { isEmpty, isLoaded } from "react-redux-firebase"
import RaisedButton from "material-ui/RaisedButton"

export const Extras = ({ FILTER_ACTION, css, app, ROUTER_EMITTER }) => {
    const handleClick = () => { ROUTER_EMITTER("/insert") }
    const handleAdds = () => { FILTER_ACTION() }
    const title = (!isLoaded(app) ?
        <Loading /> : isEmpty(app) ? <Empty /> :
            <h2>{app.title}</h2>)
    return (
        <div className={css}>

            {title}
            <RaisedButton
                onClick={handleClick}
                fullWidth={true}
                label="Go Somewhere"
                primary={true}
            />
            <br />
            <RaisedButton
                onClick={handleAdds}
                fullWidth={true}
                label="Update ADDS"
                primary={true}
            />
        </div>
    )
}
