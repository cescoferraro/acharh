import * as React from "react"
import { compose } from "recompose"
import { reduxForm } from "redux-form"
import { connect } from "react-redux"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as  addFormCSS from "./css/add.form.pcss"
import Divider from "material-ui/Divider"
import { FormTitle } from "./fields/title"
import { FormUF } from "./fields/uf"
import { FormCity } from "./fields/city"
import { FormDescription } from "./fields/description"
import { FormAddressName } from "./fields/street"
import { FormAddressNumber } from "./fields/address.number"
import { FormAddressComplemento } from "./fields/address.complemento"
import { FormAddressBairro } from "./fields/address.bairro"
import { FormAddressCEP } from "./fields/address.cep"
import { SubmitButton } from "./fields/submit"
import { FormWebsite } from "./fields/website"
import { RandomButton } from "./fields/random"
import { FormPaid } from "./fields/paid"
import { FormConfirmed } from "./fields/confirmed"
import { Categories } from "./fields/categories"
import { Phones } from "./fields/phones"
import { Images } from "./fields/images"
import { FormSocial } from "./fields/social"
import * as cs from "classnames"
import { MyHelmet } from "../../../../shared/mix";

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
}) => (
        <div className={addFormCSS.container}>
            <MyHelmet title="Anuncie" />
            <div>
                <form className={addFormCSS.form}>
                    <h4 className={cs(addFormCSS.down)}>General</h4>
                    <Divider />
                    <FormTitle />
                    <FormWebsite />
                    <FormDescription />
                    <div className={addFormCSS.flex}>
                        <FormPaid />
                        <FormConfirmed />
                    </div>
                    <div id="add_address" >
                        <h4 className={cs(addFormCSS.down)}>Address</h4>
                        <Divider />
                        <div className={addFormCSS.flex}>
                            <FormAddressName />
                            <FormAddressNumber />
                        </div>
                        <div className={addFormCSS.flex}>
                            <FormAddressComplemento />
                            <FormAddressBairro />
                            <FormAddressCEP />
                        </div>
                        <div className={addFormCSS.flex}>
                            <FormUF />
                            <FormCity formState={formState} />
                        </div>
                    </div>
                    <Images />
                    <Phones />
                    <Categories categories={groups} />
                    <FormSocial />
                    <Divider />
                    <SubmitButton
                        groups={groups}
                        INSERT_ADD={INSERT_ADD}
                        handleSubmit={handleSubmit}
                        setHomeStore={setHomeStore}
                    />
                    <RandomButton
                        setHomeStore={setHomeStore}
                        groups={groups}
                    />
                </form>
            </div>
        </div>
    )

export const InsertAddForm = compose(
    withStyles(addFormCSS),
    connect((state) => ({
        formState: state.form,
        initialValues: state.home.add
    })),
    reduxForm({
        enableReinitialize: true,
        onChange: (value, dispatch, props) => {
            props.setHomeStore({ add: props.formState.myForm.values })
        },
        form: "myForm"
    })
)(FormComponent)
