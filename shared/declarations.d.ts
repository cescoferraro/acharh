declare var require: any
declare var module: any
declare var global: any

interface IAction<T> {
    type: string
    payload: T
    error?: boolean
    meta?: any
}

interface IAdress {
    name: string
    numero: number
    complemento: string
    bairro: string
    cep: number
    uf: number
    city: number
}

interface IResponsavel {
    razaosocial: string
    cnpj: number
    endereco: IAdress
    cargoCriador: string
    cel: number
    email: string
    facebook: string
    website: string
    intagram: string
    twitter: string
    linkedin: string
}

interface IAdd {
    title: string
    description: string
    uf: number
    city: number
    paid: boolean
    confirmed: boolean

    // website: string
    // telefone
    // images: string[]
    // criadoPor: IUSer
    // responsável: IResposavel
    // endereco: IAddress
}

interface IHome {
    tab: number
    add: IAdd
}
