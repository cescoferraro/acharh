import CancelIcon from "material-ui/svg-icons/navigation/cancel"
import AddIcon from "material-ui/svg-icons/content/add-circle"
import Divider from "material-ui/Divider"
import IconButton from "material-ui/IconButton"
import * as React from "react"
import * as  addFormCSS from "../css/add.form.pcss"
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
            <div className={addFormCSS.flex}>
                <h4>Phones</h4>
                <Divider />
                <IconButton onClick={pushcat}>
                    <AddIcon />
                </IconButton>
            </div>
            {
                fields.map((member, index) => {
                    console.log(`${member}.${index}`)
                    return <div className={addFormCSS.flex} key={index}>
                        <div className={addFormCSS.vinte}>
                            <Field
                                name={`${member}.ddd`}
                                component={TextField}
                                type="number"
                                fullWidth={true}
                                label="Phone DDD"
                            />
                        </div>
                        <div className={addFormCSS.setenta}>
                            <Field
                                name={`${member}.number`}
                                component={TextField}
                                type="number"
                                fullWidth={true}
                                label="Phone Number"
                            />
                        </div>
                        <div className={addFormCSS.dez}>
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
