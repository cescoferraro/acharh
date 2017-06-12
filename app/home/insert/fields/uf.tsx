import * as React from "react"
import { SelectField } from "redux-form-material-ui"
import { Field } from "redux-form"
import { states } from "../../../../shared/states"
import MenuItem from "material-ui/MenuItem"

export const estadosItems = states
    .filter((uf) => (!uf.region))
    .map((estado: any) => (
        <MenuItem
            key={Math.random()}
            value={estado.code}
            primaryText={estado.name}
        />))

export const FormUF = ({ }) => {
    return (
        <Field
            name="address.uf"
            floatingLabelText="UF"
            component={SelectField}
            fullWidth={true}
            hintText="Select a plan"
        >
            <MenuItem value={0} primaryText="Todos Estados" />
            {estadosItems}
        </Field>
    )
}
