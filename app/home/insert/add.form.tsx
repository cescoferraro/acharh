import * as React from "react"
import { compose } from "recompose"
import { reduxForm } from "redux-form"
import { connect } from "react-redux"
import withStyles from "isomorphic-style-loader/lib/withStyles"

import * as  addFormCSS from "./css/add.form.pcss"
import { FormTitle } from "./fields/title"
import { FormUF } from "./fields/uf"
import { FormCity } from "./fields/city"
import { FormDescription } from "./fields/description"
import { SubmitButton } from "./fields/submit"
import { RandomButton } from "./fields/random"
import { FormPaid } from "./fields/paid"
import { FormConfirmed } from "./fields/confirmed"
import { Categories } from "./fields/categories"
import { addFactory } from "../../../shared/add.factory"

const FormComponent = ({
    groups,
    INSERT_ADD,
    handleSubmit,
    formState,
    setHomeStore,
    home,
    pristine,
    submitting,
    reset
}) => {
    const randomADD = () => {
        const add: IAdd = addFactory(groups)
        setHomeStore({ add })
    }
    return (
        <form className={addFormCSS.container}>
            <FormTitle />
            <FormDescription />
            <div className={addFormCSS.flex}>
                <FormUF />
                <FormCity formState={formState} />
            </div>
            <div className={addFormCSS.flex}>
                <FormPaid />
                <FormConfirmed />
            </div>
            <Categories />
            <SubmitButton send={handleSubmit(INSERT_ADD)} />
            <RandomButton send={randomADD} />
        </form>
    )
}

export const InsertAddForm = compose(
    withStyles(addFormCSS),
    connect((state) => ({
        formState: state.form,
        initialValues: addFactory()
    })),
    reduxForm({
        form: "myForm"
    })
)(FormComponent)
