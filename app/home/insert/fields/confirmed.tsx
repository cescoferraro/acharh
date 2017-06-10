import * as React from "react"
import { Toggle } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormConfirmed = ({ }) => (
    <div style={{ padding: "5px", width: "50%" }}>
        <Field
            name="confirmed"
            label="CONFIRMED"
            component={Toggle}
        />
    </div>
)
