declare const require: any
declare const module: any
declare let global: any

interface Action<T> {
    type: string
    payload: T
    error?: boolean
    meta?: any
}
