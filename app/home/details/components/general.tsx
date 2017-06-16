import * as React from "react"
import * as css from "../css/add.pcss"
import withStyles from "isomorphic-style-loader/lib/withStyles"

export const AddGeneral = withStyles(css)(
    ({ add }) => {
        const to = { pathname: `/add/${add.id}`, state: { modal: true } }
        return (
            <div>
                <div><h3>ID</h3> <p>{add.id}</p></div>
                <div><h3>Title</h3> <p>{add.title}</p></div>
                <h3>Descrição</h3>
                <p>{add.description}</p>
                <h3>Confirmado: {add.confirmed ? "🥇" : "🥉"} </h3>
                <h3>Paid: {add.paid ? "🥇" : "🥉"} </h3>
            </div>
        )
    }
)
