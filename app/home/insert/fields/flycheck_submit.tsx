import * as React from "react"
import RaisedButton from "material-ui/RaisedButton"

export const SubmitButton = ({ send }) => {
    return <RaisedButton
        onClick={send}
        fullWidth={true}
        label="CESCO"
    />
}
