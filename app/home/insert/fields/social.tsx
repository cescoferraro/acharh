import * as React from "react"
import { TextField } from "redux-form-material-ui"
import { Field } from "redux-form"
import * as  CSS from "../css/add.form.pcss"
import * as cs from "classnames"

export const FormSocial = ({ }) => (
    <div>
        <h4 className={cs(CSS.down)}> Social Media </h4>
        <div className={cs(CSS.flex, CSS.center)}>
            <Field
                fullWidth={true}
                name="social.facebook"
                floatingLabelText="Facebook"
                component={TextField}
                hintText="Facebook"
            />
            <Field
                fullWidth={true}
                name="social.twitter"
                floatingLabelText="Twitter"
                component={TextField}
                hintText="Twitter"
            /></div>
        <div className={cs(CSS.flex, CSS.center)}>
            <Field
                fullWidth={true}
                name="social.linkedin"
                floatingLabelText="LinkedIn"
                component={TextField}
                hintText="LinkedIn"
            />
            <Field
                fullWidth={true}
                name="social.instagram"
                floatingLabelText="Instagram"
                component={TextField}
                hintText="Instagram"
            />
        </div>
    </div>
)
