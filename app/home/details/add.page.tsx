import * as React from "react"
import { Helmet } from "react-helmet"
import * as detailsCSS from "./css/details.pcss"

export const AddModal = ({ history, match }) => {
    const back = (e) => {
        e.stopPropagation()
        history.goBack()
    }
    return (
        <div onClick={back} className={detailsCSS.container} >
            <Helmet>
                <title>AchaRH | {match.params.id}</title>
            </Helmet>
            <div className={detailsCSS.modal} >
                <h1>{match.params.id}</h1>
                <button
                    onClick={back}
                    type="button"
                >
                    Close </button>
            </div>
        </div>
    )
}
