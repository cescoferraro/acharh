import { flushChunkNames } from 'react-universal-component/server'
import * as ReactLodable from 'react-loadable'
import * as React from "react"
import { Renderer, Vendor } from "./renderer"
import { ssrBehavior } from "react-md-spinner"
import { flushModuleIds } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import { flushFiles } from 'webpack-flush-chunks'
import { Styler } from "../shared/mix";
import { Helmator } from "./util"
import universal from 'react-universal-component'
declare const System: any


export const HTML = ({ clientStats, serverStats, production, userAgent, url, store, title }) => {
    const App = Renderer(url, userAgent, store, production)
    const Helamn = Helmator()
    const rules = require("-!raw-loader!react-redux-toastr/lib/css/react-redux-toastr.min.css")
    return (
        <html
            lang="pt" {...Helamn.html}>
            <head>
                {Helamn.title}
                {Helamn.meta}
                {Helamn.link}
                {production ? <link rel="manifest" href="/icons/manifest.json" /> : null}
                <Styler rules={ssrBehavior.getStylesheetString(userAgent)} />
                <Styler rules={App[1].join(" ")} />
                <Styler rules={rules} />
            </head>
            <body {...Helamn.body} >
                <div id="root" dangerouslySetInnerHTML={{ __html: App[0] }} />
                {/* {development} */}
                <Vendor async={false} path={"/js/bootstrap.js"} condition={!production} />
                <Vendor async={false} path={"/js/vendor.js"} condition={!production} />
                <Vendor async={false} path={"/js/client.js"} condition={!production} />
                {/* {production} */}
                <Vendor condition={production} path={"/vendor/react.js"} />
                <Vendor condition={production} path={"/vendor/firebase.js"} />
                <Vendor condition={production} path={"/vendor/rxjs.js"} />
                <Vendor condition={production} path={"/vendor/material.js"} />
                <Vendor condition={production} path={"/js/client.js"} defer={true} />
            </body>
        </html>
    )
}
