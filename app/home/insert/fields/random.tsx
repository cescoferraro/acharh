import * as React from "react"
import RaisedButton from "material-ui/RaisedButton"

export const RandomButton = ({ send }) => {
    return <RaisedButton
        onClick={send}
        fullWidth={true}
        label="CESCO"
    />
}
