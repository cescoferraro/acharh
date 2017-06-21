import * as React from "react"
import * as CSS from "../css/add.pcss"
import ListItem from "material-ui/List/ListItem"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as cs from "classnames"
import { ImageBIT } from "./image"
import { INFOBIT } from "./info"

export const AddListItem = withStyles(CSS)((
    { add, groups, ROUTER_EMITTER }:
        { add: IAdd, groups: any, ROUTER_EMITTER: any }
) => {

    const goToDetails = () => (ROUTER_EMITTER({
        pathname: `/add/${add.id}`,
        state: { modal: true, groups, add }
    }))

    return (

        <ListItem onClick={goToDetails} >
            <div className={cs(CSS.flex, { [`${CSS.paid}`]: add.paid })}>
                <ImageBIT add={add} />
                <INFOBIT add={add} />
            </div>
        </ListItem >
    )
})
