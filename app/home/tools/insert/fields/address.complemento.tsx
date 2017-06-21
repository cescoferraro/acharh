import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormAddressComplemento = ({ }) => (
    <Field
        fullWidth={true}
        name="address.complemento"
        type="text"
        floatingLabelText="Complemento"
        component={TextField}
        hintText="Complemento"
    />
)
