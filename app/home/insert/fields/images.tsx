import CancelIcon from "material-ui/svg-icons/navigation/cancel"
import * as faker from "faker"
import AddIcon from "material-ui/svg-icons/content/add-circle"
import Divider from "material-ui/Divider"
import IconButton from "material-ui/IconButton"
import * as React from "react"
import * as  addFormCSS from "../css/add.form.pcss"
import { FieldArray, Field } from "redux-form"
import { TextField, Toggle } from "redux-form-material-ui"
import { imageFactory } from "../../../../shared/add.factory"
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
            <div className={addFormCSS.flex}>
                <h4>Images</h4>
                <Divider />
                <IconButton onClick={pushcat}>
                    <AddIcon />
                </IconButton>
            </div>
            {
                fields.map((member, index) => {
                    return (
                        <div className={addFormCSS.flex} key={index}>
                            <h2>{index}</h2>
                            <div className={addFormCSS.vinte}>
                                <Field
                                    name={`${member}.default`}
                                    component={Toggle}
                                    type="checkbox"
                                />
                            </div>
                            <div className={addFormCSS.vinte}>
                                <div
                                    style={{
                                        backgroundImage: "url(" + fields.getAll()[index].url + ")",
                                        height: "100%",
                                        backgroundColor: "red"
                                    }}
                                />
                            </div>
                            <div className={addFormCSS.cinquenta}>
                                <Field
                                    name={`${member}.url`}
                                    component={TextField}
                                    type="url"
                                    fullWidth={true}
                                    label="URL"
                                />
                            </div>
                            <div className={addFormCSS.dez}>
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
