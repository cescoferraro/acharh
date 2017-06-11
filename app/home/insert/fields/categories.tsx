import CancelIcon from "material-ui/svg-icons/navigation/cancel"
import AddIcon from "material-ui/svg-icons/content/add-circle"

import IconButton from "material-ui/IconButton"
import * as React from "react"
import * as  addFormCSS from "../css/add.form.pcss"
import MenuItem from "material-ui/MenuItem"
import { FieldArray, Field } from "redux-form"
import { SelectField } from "redux-form-material-ui"
import { TextField } from "redux-form-material-ui"
import { categoryFactory } from "../../../../shared/add.factory"
export const Categories = ({ categories }) => {
    return (
        <FieldArray
            name="categories"
            categories={categories}
            component={renderMembers}
        />
    )
}

const renderMembers = ({ categories, fields, meta: { error, submitFailed } }) => {
    const catMain = categories
        .map((cat: any) => (
            <MenuItem
                key={Math.random()}
                value={cat.code}
                primaryText={cat.name}

            />))
    const pushcat = () => {
        fields.push(categoryFactory(categories))
    }
    return (
        <div>
            <div className={addFormCSS.flex}>
                <h4>Categories</h4>
                <IconButton onClick={pushcat}>
                    <AddIcon />
                </IconButton>
            </div>
            {
                fields.map((member, index) => (
                    <div className={addFormCSS.flex} key={index}>
                        <div className={addFormCSS.quarenta}>
                            <Field
                                name={`${member}.main`}
                                component={SelectField}
                                type="number"
                                fullWidth={true}
                                label="First Name"
                            >
                                <MenuItem primaryText="BLOCK" value={0} />
                                {catMain}
                            </Field>
                        </div>
                        <div className={addFormCSS.quarenta}>
                            <Field
                                name={`${member}.sub`}
                                type="number"
                                component={TextField}
                                fullWidth={true}
                                label="Last Name"
                            />
                        </div>
                        <div className={addFormCSS.dez}>
                            <IconButton onClick={() => fields.remove(index)}>
                                <CancelIcon />
                            </IconButton>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
