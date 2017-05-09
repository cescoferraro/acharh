import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { compose } from "recompose"
import { connect } from "react-redux"
import { SearchStyle } from "../css/style"
import withStyles from "isomorphic-style-loader/lib/withStyles";

export const SearchInput = compose(
    reduxForm({ form: 'search' }),
    withStyles(SearchStyle)
)(({ handleSubmit, search, form }) => {
    return (
        <div className={SearchStyle.container}>
            <Field
                name="search"
                className={SearchStyle.input}
                component={TextField}
                onChange={(evt) => {
                    console.log(evt)
                    search(evt.target.value)
                }}
                hintText="Search" />
        </div>
    )
});
