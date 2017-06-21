import * as React from "react";
import * as cs from "classnames"
import * as CSS from "../css/add.pcss"
import withStyles from 'isomorphic-style-loader/lib/withStyles'

export const INFOBIT = withStyles(CSS)(({ add }: { add: IAdd }) => {
    const phoneR = (
        add.phones[0] === null ?
            (<div>(XX)XXXX-XXXX</div>) :
            (<div>
                {"(" + add.phones[0].ddd + ") - " + add.phones[0].number}
            </div>)
    )
    return (<div className={cs(CSS.body)}>
        <h4>{add.title}</h4>
        {phoneR}
    </div>)
})
