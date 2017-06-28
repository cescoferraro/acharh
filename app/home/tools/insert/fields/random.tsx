import * as React from "react"
import RaisedButton from "material-ui/RaisedButton"
import { addFactory } from "../../../../../shared/add.factory"

export const RandomButton = ({ setHomeStore, groups }) => {
    const randomADD = () => {
        const add: IAdd = addFactory(groups)
        setHomeStore({ add })
    }
    return <RaisedButton
        onClick={randomADD}
        fullWidth={true}
        secondary={true}
        label="Embaralhar"
    />
}
