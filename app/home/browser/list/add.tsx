import * as React from "react"
import * as CSS from "../css/add.pcss"
import { ListItem } from "material-ui"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as cs from "classnames"

export const Add = withStyles(CSS)((
    { add, groups, ROUTER_EMITTER }:
        { add: IAdd, groups: any, ROUTER_EMITTER: any }
) => {

    const goToDetails = () => (ROUTER_EMITTER({
        pathname: `/add/${add.id}`,
        state: { modal: true, groups, add }
    }))

    return (

        <ListItem
            onClick={goToDetails}
        >
            <div className={cs(CSS.flex)}>
                <div className={cs(CSS.image)} >
                    {
                        add.images[0] === null ?
                            <div>No Images</div> :
                            <div>
                                <img alt="" src={add.images[0].url + "?cache=none"} />
                            </div>
                    }
                </div>
                <div className={cs(CSS.body)}>
                    <h4>{add.title}</h4>
                    {
                        add.phones[0] === null ?
                            <div>(XX)XXXX-XXXX</div> :
                            <div>
                                {"(" + add.phones[0].ddd + ") - " + add.phones[0].number}
                            </div>
                    }
                </div>
            </div>
        </ListItem >
    )
})
