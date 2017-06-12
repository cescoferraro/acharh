import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormAddressBairro = ({ }) => (
    <Field
        fullWidth={true}
        name="address.bairro"
        type="text"
        floatingLabelText="Bairro"
        component={TextField}
        hintText="Bairro"
    />
)
