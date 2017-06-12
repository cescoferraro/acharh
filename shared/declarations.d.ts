declare var require: any
declare var module: any
declare var global: any

interface IHome {
    tab: number
    add: IAdd
    detail: IAdd
}

interface IAction<T> {
    type: string
    payload: T
    error?: boolean
    meta?: any
}

interface IAdress {
    name: string
    number: number
    complemento: string
    bairro: string
    cep: number
    uf: number
    city: number
}

interface IUser {
    name: string
    email: string
    address: IAdress
}

interface ISocial {
    facebook: string
    website: string
    intagram: string
    twitter: string
    linkedin: string
}

interface IResponsavel {
    IUser
    razaosocial?: string
    cargo?: string
    cnpj?: number
    phones?: IPhone[]
}

interface ICategory {
    main: number
    sub: number
}

interface IPhone {
    ddd: number
    number: number
}

interface IPhoto {
    url: string
    default: boolean
}

interface IAdd {
    title: string
    description: string
    paid: boolean
    confirmed: boolean
    categories: ICategory[]
    address: IAdress
    website: string
    phones: IPhone[]
    images: IPhoto[]
    // social: ISocial
    // criadoPor: IUSer
    // responsável: IResposavel
}
