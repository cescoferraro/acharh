import * as React from "react"
import { Toggle } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormPaid = ({ }) => (
    <div style={{ padding: "5px", width: "50%" }}>
        <Field
            name="paid"
            label="PAID"
            component={Toggle}
        />
    </div>
)
