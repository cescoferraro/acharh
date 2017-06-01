import * as React from "react"
import RaisedButton from "material-ui/RaisedButton"
import { compose } from "recompose"
import { reduxForm, Field } from "redux-form"
import { TextField, SelectField, Checkbox, Toggle } from "redux-form-material-ui"
import { connect } from "react-redux"
import MenuItem from "material-ui/MenuItem"
import { states } from "../../shared/states"
import * as faker from "faker"
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { addFormCSS } from "../css"

export const InsertAdd = compose(
    withStyles(addFormCSS),
    connect((state) => ({
        formState: state.form,
        home: state.home,
        initialValues: state.home.add
    })),
    reduxForm({
        enableReinitialize: true,
        form: "myForm"
    })
)(({ groups, handleSubmit, load, SET_HOME_STORE_ACTION, change, home, pristine, submitting, reset }) => {
    const submit = (form: IAdd) => {
        console.log(form)
    }

    const Nenhum = (text) => (
        <MenuItem
            value={0}
            primaryText={text}
        />
    )
    const estadosItems = states
        .map((estado: any) => (
            <MenuItem
                key={Math.random()}
                value={estado.code}
                primaryText={estado.name}
            />)
        )
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const eachItem = (group) => {
        return (
            <MenuItem
                key={Math.random()}
                value={group.code}
                primaryText={group.name}
            />
        )
    }
    const randomADD = () => {
        const randomGroup = groups.map((group) => (group.code))[Math.floor(Math.random() * groups.length)]
        const childrens = groups.filter((group) => (group.code === randomGroup))[0].children
        const randomCategory = childrens[Math.floor(Math.random() * childrens.length)].code
        const add: IAdd = {
            id: faker.random.uuid(),
            title: faker.name.findName(),
            description: faker.company.catchPhraseDescriptor(),
            group: randomGroup,
            category: randomCategory,
            uf: getRandomIntInclusive(1, 27),
            city: getRandomIntInclusive(1, 27),
            confirmed: Math.random() >= 0.5,
            paid: Math.random() >= 0.5
        }
        SET_HOME_STORE_ACTION({ add })
    }

    const isCurrentGroup = (group) => (group.code === home.add.group)
    const eachCategory = (group) => (group.children.map(eachItem))
    const isCurrentState = (state) => (state.code === home.add.uf)
    const eachCity = (state) => (state.children.map(eachItem))
    const groupHandler = (event, key, payload) => {
        const hey = home
        hey.add.category = 0
        SET_HOME_STORE_ACTION(hey)
    }
    return (
        <form className={addFormCSS.container}>
            <Field
                fullWidth={true}
                name="title"
                value={home.add.title}
                floatingLabelText="Title"
                component={TextField}
                hintText="Title"
            />
            <Field
                fullWidth={true}
                floatingLabelText="Description"
                name="description"
                component={TextField}
                hintText="Description"
            />
            <div style={{ display: "flex" }}>
                <Field
                    name="group"
                    floatingLabelText="Groups"
                    component={SelectField}
                    onChange={groupHandler}
                    fullWidth={true}
                    hintText="Select a plan"
                >
                    {Nenhum("all groups")}
                    {groups.map(eachItem)}
                </Field>
                <Field
                    name="category"
                    floatingLabelText="Category"
                    component={SelectField}
                    fullWidth={true}
                    hintText="Select a plan"
                >
                    {Nenhum("all categories")}
                    {groups.filter(isCurrentGroup).map(eachCategory)}
                </Field>
            </div>
            <div style={{ display: "flex" }}>
                <Field
                    name="uf"
                    floatingLabelText="UF"
                    component={SelectField}
                    fullWidth={true}
                    hintText="Select a plan"
                >
                    {Nenhum("all estado")}
                    {estadosItems}
                </Field>
                <Field
                    name="city"
                    floatingLabelText="CIdade"
                    component={SelectField}
                    fullWidth={true}
                    hintText="Select a plan"
                >
                    {Nenhum("all cities")}
                    {states.filter(isCurrentState).map(eachCity)}
                </Field>
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
                <div style={{ padding: "5px", width: "50%" }}>
                    <Field
                        name="confirmed"
                        label="CONFIRMED"
                        component={Toggle}
                    />
                </div>
                <div style={{ padding: "5px", width: "50%" }}>
                    <Field
                        name="paid"
                        label="PAID"
                        component={Toggle}
                    />
                </div>
            </div>
            <RaisedButton
                disabled={pristine || submitting}
                onClick={handleSubmit(submit)}
                fullWidth={true}
                label="SUBMIT"
            />
            <br />
            <br />
            <RaisedButton
                disabled={pristine || submitting}
                onClick={reset}
                fullWidth={true}
                label="RESET"
            />
            <br />
            <br />
            <RaisedButton
                onClick={randomADD}
                fullWidth={true}
                label="RANDOM ADD"
            />
        </form>
    )
})
