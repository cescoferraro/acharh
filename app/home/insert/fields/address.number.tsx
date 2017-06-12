import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormAddressNumber = ({ }) => (
    <Field
        fullWidth={true}
        name="address.number"
        type="number"
        floatingLabelText="STREET number"
        component={TextField}
        hintText="Número"
    />
)
