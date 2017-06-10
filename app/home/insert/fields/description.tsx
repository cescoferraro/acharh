import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormDescription = ({ }) => (
    <Field
        fullWidth={true}
        multiLine={true}
        rows={3}
        floatingLabelText="Description"
        name="description"
        component={TextField}
        hintText="Description"
    />
)
