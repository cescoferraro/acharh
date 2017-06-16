import * as React from "react"

export const AddImages = ({ add }) => {
    return (
        <div>
            <h3>Images:</h3>
            <ImagesList add={add} />
        </div>
    )
}

const ImagesList = ({ add }) => {
    return (add.images === undefined ?
        (<h5>Nenhuma Imagem</h5>) :
        (
            <div>
                {add.images.map((img) => (<img key={Math.random()} src={img.url} />))}
            </div>
        )
    )
}
