import * as React from "react"
import { Helmet } from "react-helmet"
import * as detailsCSS from "./css/details.pcss"
import { AddGeneral } from "../browser/list/general";
import { AddCategories } from "../browser/list/categories";
import { AddPhones } from "../browser/list/phones";
import { AddSocial } from "../browser/list/social";
import { AddImages } from "../browser/list/images";

export const AddModal = ({ history, match, location }) => {
    const back = (e) => {
        e.stopPropagation()
        history.goBack()
    }
    const add = location.state.add
    const groups = location.state.groups
    return (
        <div onClick={back} className={detailsCSS.container} >
            <Helmet>
                <title>AchaRH | {match.params.id}</title>
            </Helmet>
            <div className={detailsCSS.modal} >
                <AddGeneral add={add} />
                <AddCategories groups={groups} add={add} />
                <AddPhones add={add} />
                <AddImages add={add} />
                <button
                    onClick={back}
                    type="button"
                >
                    Close </button>
            </div>
        </div>
    )
}

/* <Card className={addCSS.add} key={Math.random()}>*/
/* </Card>*/
