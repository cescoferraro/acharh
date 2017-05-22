import * as React from "react"

export const AddsList = ({ adds }) => {
    const list = (
        adds.map(
            (add) => (
                <div key={Math.random()}>
                    <h2>{add.title}</h2>
                </div>
            )
        )
    )
    return (<div> {list} </div>)
}
