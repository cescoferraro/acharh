import { Router } from "../app/router"
import { Renderer, tag } from "./renderer"
import * as injectTapEventPlugin from "react-tap-event-plugin"
import { unmountComponentAtNode } from "react-dom"
import * as React from "react"
injectTapEventPlugin()

Renderer(<Router userAgent={navigator.userAgent} />)

if (module.hot) {
    module.hot.accept(
        [
            "../store/createStore.tsx",
            "../app/router.tsx",
            "./renderer.tsx"
        ],
        () => {
            unmountComponentAtNode(tag)
            const NextRouter = require("../app/router.tsx").Router
            const NewRenderer = require("./renderer.tsx").Renderer
            NewRenderer(<NextRouter userAgent={navigator.userAgent} />)
        })
}
