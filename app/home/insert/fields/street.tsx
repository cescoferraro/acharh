import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormAddressName = ({ }) => (
    <Field
        fullWidth={true}
        name="address.name"
        floatingLabelText="STREET NAME"
        component={TextField}
        hintText="Street Name"
    />
)
