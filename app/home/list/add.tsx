import * as React from "react"
import { Card } from "material-ui/Card"
import { states } from "../../../shared/states"
import { Link } from "react-router-dom"

export const Add = ({ add, groups }) => {
    const GROUP = groups !== undefined ? groups.filter((group) => (group.code === add.group))[0].name : "??"
    const CATEGORY = groups !== undefined ?
        groups.filter((group) => (group.code === add.group))[0].children
            .filter((category) => (category.code === add.category))[0].name : "sdjhfbsdf"

    const UF = states.filter((state) => (state.code === add.uf))[0].name
    const ciTY = states.filter((state) => (state.code === add.uf))[0].children
        .filter((city) => (city.code === add.city))[0]

    const to = { pathname: `/add/${add.id}`, state: { modal: true } }
    return (
        <Card key={Math.random()}>
            <Link key={add.id} to={to}> + DETAILS</Link>
            <h2>{add.title}</h2>
            <h2>{add.description}</h2>
            <h3> 🎱 GROUP: {GROUP}</h3>
            <h3>🥇 CATEGORY: {CATEGORY} </h3>
            <h3> ESTADO: {UF} </h3>
            <h3> REGIAO:  IMPLEMENTAR!! </h3>
            <h3>👁‍🗨 CONFIRMADO: {add.confirmed ? "🥇🥇🥇🥇🥇🥇" : "🥉🥉🥉🥉🥉🥉🥉"} </h3>

        </Card>
    )
}
