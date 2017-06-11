import * as React from "react"
import MenuItem from "material-ui/MenuItem"

export const eachItem = (group) => {
    return (
        <MenuItem
            key={Math.random()}
            value={group.code}
            primaryText={group.name}
        />
    )
}
