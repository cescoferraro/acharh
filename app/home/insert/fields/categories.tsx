import CancelIcon from "material-ui/svg-icons/navigation/cancel"
import * as cs from "classnames"
import AddIcon from "material-ui/svg-icons/content/add-circle"
import Divider from "material-ui/Divider"
import IconButton from "material-ui/IconButton"
import * as React from "react"
import * as  CSS from "../css/add.form.pcss"
import MenuItem from "material-ui/MenuItem"
import { FieldArray, Field } from "redux-form"
import { SelectField } from "redux-form-material-ui"
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
            <div className={CSS.flex}>

                <h4 className={cs(CSS.down)}> Categories</h4> <Divider />
                <Divider />
                <IconButton onClick={pushcat}>
                    <AddIcon />
                </IconButton>
            </div>
            {
                fields.map((member, index) => (
                    <div className={CSS.flex} key={index}>
                        <div className={CSS.quarenta}>
                            <Field
                                name={`${member}.main`}
                                component={SelectField}
                                type="number"
                                floatingLabelText="Main Category"
                                fullWidth={true}
                                label="First Name"
                            >
                                <MenuItem primaryText="BLOCK" value={0} />
                                {catMain}
                            </Field>
                        </div>
                        {console.log(fields.getAll()[index].main)}
                        <div className={CSS.quarenta}>
                            <Field
                                name={`${member}.sub`}
                                type="number"
                                component={SelectField}
                                fullWidth={true}
                                floatingLabelText="Sub Category"
                                label="Last Name"
                            >
                                <MenuItem primaryText="BLOCK" value={0} />
                                {
                                    categories
                                        .filter((cat) => (cat.code === fields.getAll()[index].main))[0]
                                        .children.map((sub) => (
                                            <MenuItem
                                                key={Math.random()}
                                                value={sub.code}
                                                primaryText={sub.name}
                                            />
                                        ))
                                }
                            </Field>
                        </div>
                        <div className={cs(CSS.dez, CSS.center, CSS.flex)} >
                            <IconButton onClick={() => fields.remove(index)}>
                                <CancelIcon />
                            </IconButton>
                        </div>
                    </div>
                )
                )
            }
        </div >
    )
}
