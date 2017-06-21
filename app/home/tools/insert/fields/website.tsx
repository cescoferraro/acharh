import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormWebsite = ({ }) => (
    <Field
        fullWidth={true}
        name="website"
        floatingLabelText="Website"
        component={TextField}
        hintText="Website"
    />
)
