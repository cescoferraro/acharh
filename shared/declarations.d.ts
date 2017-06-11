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
interface IUser {
    name: string
    email: string
}

interface IResponsavel {
    razaosocial: string
    cnpj: number
    endereco: IAdress
    cargoCriador: string
    email: string
    cel: number
    facebook: string
    website: string
    intagram: string
    twitter: string
    linkedin: string
}
interface ICategory {
    main: number
    sub: number
}
interface IAdd {
    title: string
    description: string
    uf: number
    city: number
    paid: boolean
    confirmed: boolean
    categories: ICategory[]
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
