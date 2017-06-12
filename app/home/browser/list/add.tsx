import * as React from "react"
import { Card } from "material-ui/Card"
/* import { states } from "../../../../shared/states"*/
import { Link } from "react-router-dom"
import * as addCSS from "../css/add.pcss"

export const Add = ({ add, groups }) => {
    const to = { pathname: `/add/${add.id}`, state: { modal: true } }
    return (
        <div className={addCSS.add}>
            <Card key={Math.random()}>
                <Link key={add.id} to={to}> + DETAILS</Link>
                <h3>Title</h3>
                <h3>{add.title}</h3>
                <h3>Descrição</h3>
                <p>{add.description}</p>
                <h3>👁‍🗨 CONFIRMADO: {add.confirmed ? "🥇🥇🥇🥇🥇🥇" : "🥉🥉🥉🥉🥉🥉🥉"} </h3>
                <div>
                    <h3>Categories</h3>
                    {
                        add.categories !== undefined ? add.categories.map(
                            (cat) => {
                                return (
                                    <div key={Math.random()}>
                                        <p>
                                            {groups.filter((group) => (group.code === cat.main))[0].name}
                                            {" "}
                                            {
                                                groups
                                                    .filter((group) => (group.code === cat.main))[0]
                                                    .children
                                                    .filter((category) => (category.code === cat.sub))[0].name
                                            }
                                        </p>
                                    </div>)
                            }
                        ) : <div><h2>Not Categorie</h2></div>
                    }
                </div>
            </Card>
        </div>
    )
}
