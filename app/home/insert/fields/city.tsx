import * as React from "react"
import { SelectField } from "redux-form-material-ui"
import { Field } from "redux-form"
import { states } from "../../../../shared/states"
import MenuItem from "material-ui/MenuItem"

const eachItem = (group) => {
    return (
        <MenuItem
            key={Math.random()}
            value={group.code}
            primaryText={group.name}
        />
    )
}

const eachCity = (state) => (state.children.map(eachItem))
const isCurrentState = (uf) =>
    (state) => (state.code === uf)

export const FormCity = ({ formState }) => {
    const uf = formState.myForm === undefined ? 0 :
        formState.myForm.values.uf
    return (
        <Field
            name="city"
            floatingLabelText="CIdade"
            component={SelectField}
            fullWidth={true}
            hintText="Select a plan"
        >
            <MenuItem value={0} primaryText="Todas Cidades" />
            {states.filter(isCurrentState(uf)).map(eachCity)}
        </Field>
    )
}
