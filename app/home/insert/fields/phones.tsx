import * as cs from "classnames"
import CancelIcon from "material-ui/svg-icons/navigation/cancel"
import AddIcon from "material-ui/svg-icons/content/add-circle"
import Divider from "material-ui/Divider"
import IconButton from "material-ui/IconButton"
import * as React from "react"
import * as  CSS from "../css/add.form.pcss"
import { FieldArray, Field } from "redux-form"
import { TextField } from "redux-form-material-ui"
import { phoneFactory } from "../../../../shared/add.factory"
export const Phones = ({ }) => {
    return (
        <FieldArray
            name="phones"
            component={renderMembers}
        />
    )
}

const renderMembers = ({ fields, meta: { error, submitFailed } }) => {
    const pushcat = () => {
        fields.push(phoneFactory())
    }
    return (
        <div>
            <div className={CSS.flex}>
                <h4 className={cs(CSS.down)}>Phones</h4>
                <IconButton onClick={pushcat}>
                    <AddIcon />
                </IconButton>
            </div>
            <Divider />
            {
                fields.map((member, index) => {
                    console.log(`${member}.${index}`)
                    return <div className={CSS.flex} key={index}>
                        <div className={CSS.vinte}>
                            <Field
                                name={`${member}.ddd`}
                                component={TextField}
                                type="number"
                                fullWidth={true}
                                label="Phone DDD"
                                floatingLabelText="Phone DDD"
                            />
                        </div>
                        <div className={CSS.setenta}>
                            <Field
                                name={`${member}.number`}
                                component={TextField}
                                type="number"
                                fullWidth={true}
                                label="Phone Number"
                                floatingLabelText="Phone Number"
                            />
                        </div>
                        <div className={cs(CSS.flex, CSS.center, CSS.dez)}>
                            <IconButton onClick={() => fields.remove(index)}>
                                <CancelIcon />
                            </IconButton>
                        </div>
                    </div>
                })
            }
        </div >
    )
}
