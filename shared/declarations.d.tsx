declare var require: any
declare var module: any
declare var global: any

interface IAction<T> {
    type: string
    payload: T
    error?: boolean
    meta?: any
}

interface IAdd {
    id: string
    title: string
    description: string
    uf: number
    confirmed: boolean
    paid: boolean
    group: number
    city: number
    category: number
}

interface IHome {
    tab: number
    add: IAdd
}
