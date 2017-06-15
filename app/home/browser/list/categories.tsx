import * as React from "react"
import Chip from "material-ui/Chip"
import Avatar from "material-ui/Avatar"
import { blue300, indigo900 } from "material-ui/styles/colors"
import * as CSS from "../css/add.pcss"

export const AddCategories = ({ groups, add }: { add: IAdd, groups: any }) => {
    return (
        <div>
            <h3>Categories</h3>
            <CategoriesList groups={groups} add={add} />
        </div>
    )
}

const CategoriesList = ({ add, groups }: { add: IAdd, groups: any }) => {
    return add.categories === undefined ? (<None />) : (
        <div className={CSS.flex}>
            {add.categories.map((cat) => (<Category cat={cat} groups={groups} key={Math.random()} />))}
        </div>
    )
}

const None = () => (<div>Nenhuma Imagem</div>)

const Category = ({ cat, groups }) => {
    const main = groups.filter((group) => (group.code === cat.main))[0].name
    const sub = groups.filter((group) => (group.code === cat.main))[0]
        .children.filter((category) => (category.code === cat.sub))[0].name
    return (
        <Chip backgroundColor={blue300} >
            <Avatar size={22} color={blue300} backgroundColor={indigo900}>
                {main.charAt(0) + sub.charAt(0)}
            </Avatar>
            {main + " " + sub}
        </Chip>

    )
}
