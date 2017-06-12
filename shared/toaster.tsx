import * as React from "react"
import ReduxToastr from "react-redux-toastr"

export const Toaster = ({ }) => {
    return (
        <ReduxToastr
            timeOut={2000}
            newestOnTop={false}
            preventDuplicates={true}
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar={true}
        />
    )
}
