import * as React from "react";
import * as cs from "classnames"
import * as CSS from "../css/add.pcss"
import withStyles from 'isomorphic-style-loader/lib/withStyles'

export const ImageBIT = withStyles(CSS)(({ add }: { add: IAdd }) => {
    const rIMG = (
        add.images[0] === null ?
            <div>No Images</div> :
            <img className={cs(CSS.innerImage)} src={add.images[0].url} />
    )
    return (<div className={cs(CSS.image)} > {rIMG} </div>)
})
