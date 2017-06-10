import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormTitle = ({ }) => (
    <Field
        fullWidth={true}
        name="title"
        floatingLabelText="Title"
        component={TextField}
        hintText="Title"
    />
)
