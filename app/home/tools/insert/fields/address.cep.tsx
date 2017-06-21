import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"

export const FormAddressCEP = ({ }) => (
    <Field
        fullWidth={true}
        name="address.cep"
        type="text"
        floatingLabelText="CEP"
        component={TextField}
        hintText="CEP"
    />
)
