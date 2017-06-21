import CancelIcon from "material-ui/svg-icons/navigation/cancel"
import * as cs from "classnames"
import AddIcon from "material-ui/svg-icons/content/add-circle"
import Divider from "material-ui/Divider"
import IconButton from "material-ui/IconButton"
import * as React from "react"
import * as  CSS from "../css/add.form.pcss"
import { FieldArray, Field } from "redux-form"
import { TextField } from "redux-form-material-ui"
import { imageFactory } from "../../../../../shared/add.factory"

export const Images = ({ }) => {
    return (
        <FieldArray
            name="images"
            component={renderMembers}
        />
    )
}

const renderMembers = ({ fields, meta: { error, submitFailed } }) => {
    const pushcat = () => {
        fields.push(imageFactory())
    }
    return (
        <div>
            <div className={CSS.flex}>
                <h4 className={cs(CSS.down)}>Images</h4>
                <IconButton onClick={pushcat}>
                    <AddIcon />
                </IconButton>
            </div>
            <Divider />
            {
                fields.map((member, index) => {
                    return (
                        <div className={CSS.flex} key={index}>

                            <div className={CSS.vinte}>
                                <div
                                    style={{
                                        backgroundImage: "url(" + fields.getAll()[index].url + ")",
                                        height: "100%",
                                        backgroundColor: "red"
                                    }}
                                />
                            </div>
                            <div className={CSS.setenta}>
                                <Field
                                    name={`${member}.url`}
                                    component={TextField}
                                    type="url"
                                    floatingLabelText="Url"
                                    fullWidth={true}
                                    label="URL"
                                />
                            </div>
                            <div className={cs(CSS.flex, CSS.center, CSS.dez)}>
                                <IconButton onClick={() => fields.remove(index)}>
                                    <CancelIcon />
                                </IconButton>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
