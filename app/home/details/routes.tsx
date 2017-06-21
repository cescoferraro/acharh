import * as React from "react"
import { AddPage, DetailComponent } from "./add.page"
import { Route } from "react-router-dom"


const ThatDet = (props) => {
    return <AddPage GET_ADD={props.GET_ADD} >
        <DetailComponent detail={props.home.detail} />
    </AddPage>
}

export const DetailRoutes = (props) => {
    return (
        <Route path="/add/:id" render={() => <ThatDet {...props} />} />

    )

}
