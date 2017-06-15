import * as React from "react"
import { Facebook } from "./facebook"
import { Instagram } from "./instagram"
import { Twitter } from "./twitter"
import { LinkedIn } from "./linkedin"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as css from "../css/add.pcss"

export const AddSocial = withStyles(css)(({ add, css }: { add: IAdd, css: any }) => {
    return (
        <div>
            <h3>Social Media:</h3>
            <div className={css.flex}>
                <div className={css.flex}>
                    <Facebook css={css.icons} /> <p>@{add.social.facebook}</p>
                </div>
                <div className={css.flex}>
                    <Twitter css={css.icons} /> <p>@{add.social.twitter}</p></div>
                <div className={css.flex}>
                    <Instagram css={css.icons} /> <p>@{add.social.instagram}</p>
                </div>
                <div className={css.flex}>
                    <LinkedIn css={css.icons} />  <p>{add.social.linkedin}</p>
                </div>
            </div>
        </div>
    )
})
