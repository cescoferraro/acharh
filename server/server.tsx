import * as React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import * as injectTapEventPlugin from "react-tap-event-plugin"
import { XMLHttpRequest } from "xmlhttprequest"
import { HTML } from "./html"
import { configureStore } from "../store/createStore"

global.XMLHttpRequest = XMLHttpRequest
injectTapEventPlugin()

export default function serverRenderer({ production, clientStats, serverStats, title }) {
    return (req, res, next) => {
        console.log(production)
        const store = configureStore()
        res.send("<!DOCTYPE html>" +
            renderToStaticMarkup(
                <HTML
                    title={title}
                    production={production}
                    userAgent={req.headers["user-agent"]}
                    url={req.url}
                    store={store}
                />))
    }
}
