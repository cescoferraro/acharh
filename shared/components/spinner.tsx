import * as React from "react"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import MDSpinner from "react-md-spinner"
let appCss = require("./css/spinner.pcss")

export const Spinner = withStyles(appCss)(({ userAgent }) => {
    return <div className={appCss.spinnerContainer}>
        <MDSpinner size={100} userAgent={userAgent} />
    </div>
});
