import { Router } from "../app/router"
import { Renderer, tag } from "./renderer"
import * as injectTapEventPlugin from "react-tap-event-plugin"
import { unmountComponentAtNode } from "react-dom"

injectTapEventPlugin()
Renderer(Router)

if (module.hot) {
    module.hot.accept(
        [
            "../store/createStore.tsx",
            "../app/router.tsx",
            "./renderer.tsx"
        ],
        () => {
            unmountComponentAtNode(tag)
            const NextEatApp = require("../app/router.tsx").Router
            const NewRenderer = require("./renderer.tsx").Renderer
            NewRenderer(NextEatApp)
        })
}
