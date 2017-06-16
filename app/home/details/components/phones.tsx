import * as React from "react"

export const AddPhones = ({ add }) => {
    return (
        <div>
            <h3>Phone:</h3>
            <PhoneList add={add} />
        </div>
    )
}

const PhoneList = ({ add }) => {
    const list = add.phones
        .map((phone) => (<PHONE key={Math.random()} phone={phone} />))
    return add.phones === undefined ?
        (<None />) :
        (<div> {list} </div>)
}

const None = () => (<div>Nenhuma Imagem</div>)

const PHONE = ({ phone }) => (<h5> {phone.ddd}-{phone.number} </h5>)
