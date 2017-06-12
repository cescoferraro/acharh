import * as React from "react"
import RaisedButton from "material-ui/RaisedButton"
import { addFactory } from "../../../../shared/add.factory"

export const SubmitButton = ({
    groups,
    INSERT_ADD,
    setHomeStore,
    handleSubmit
}) => {
    const submit = (add) => {
        INSERT_ADD(add)
        setHomeStore({ add: addFactory(groups) })
    }
    return (
        <RaisedButton
            onClick={handleSubmit(submit)}
            fullWidth={true}
            label=" Anunciar"
        />
    )
}
