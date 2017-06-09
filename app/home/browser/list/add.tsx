import * as React from "react"
import { Card } from "material-ui/Card"
import { states } from "../../../../shared/states"
import { Link } from "react-router-dom"

export const Add = ({ add, groups }) => {
    const UF = states.filter((state) => (state.code === add.uf))[0].name
    const ciTY = states.filter((state) => (state.code === add.uf))[0].children
        .filter((city) => (city.code === add.city))[0]

    const to = { pathname: `/add/${add.id}`, state: { modal: true } }
    console.log(add.categories)
    console.log(groups)
    return (
        <Card key={Math.random()}>
            <Link key={add.id} to={to}> + DETAILS</Link>
            <h2>{add.title}</h2>
            <h2>{add.description}</h2>
            {
                add.categories.map(
                    (cat) => {
                        return (
                            <div key={Math.random()}>
                                <h3>Categories</h3>
                                <p>{groups.filter((group) => (group.code === cat.main))[0].name}</p>
                            </div>)
                    }
                )
            }
            {
                add.categories.map(
                    (cat) => {
                        return (
                            <div key={Math.random()}>
                                <h3>Sub Groups</h3>
                                <p>{groups.filter((group) => (group.code === cat.main))[0]
                                    .children.filter((category) => (category.code === cat.sub))[0].name}</p>
                            </div>)
                    }
                )
            }
            {/* <h3> 🎱 GROUP: {GROUP}</h3> */}
            {/* <h3>🥇 CATEGORY: {CATEGORY} </h3> */}
            <h3> ESTADO: {UF} </h3>
            <h3> REGIAO:  IMPLEMENTAR!! </h3>
            <h3>👁‍🗨 CONFIRMADO: {add.confirmed ? "🥇🥇🥇🥇🥇🥇" : "🥉🥉🥉🥉🥉🥉🥉"} </h3>

        </Card>
    )
}
