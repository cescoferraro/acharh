import * as React from "react"
import { compose } from "recompose"
import { reduxForm, Field } from "redux-form"
import { TextField } from "redux-form-material-ui"

export const InsertAdd = compose(
    reduxForm({
        form: "myForm"
    })
)(({ }) => {
    return (
        <form>
            <Field fullWidth={true} name="title" component={TextField} hintText="Title" />
            <Field fullWidth={true} name="description" component={TextField} hintText="Description" />
        </form>
    )
})
