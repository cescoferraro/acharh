import * as React from "react"

export const AddPage = ({ match }) => {
    return (
        <div>
            {match.params.id}
        </div>
    )
}
