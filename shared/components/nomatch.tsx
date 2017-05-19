import * as React from "react"
import { push } from "connected-react-router"
import { compose } from "recompose"
import { connect } from "react-redux"

export const NoMatch = compose(connect())(({ dispatch }) => {
    const clicker = () => dispatch(push("/"))
    return (
        <div>
            <h2>I dont know where you want to go.</h2>
            <button onClick={clicker} >GO somewhere nice!</button>
        </div>
    )
})
