import * as React from "react"
import { Helmet } from "react-helmet"
import { Renderer, Vendor } from "./renderer"
import { ssrBehavior } from "react-md-spinner"

const Styler = ({ rules }) => {
    return (
        <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: rules }}
        />
    )
}

export const HTML = ({ production, userAgent, url, store, title }) => {
    const App = Renderer(url, userAgent, store)
    const HelmetApp = Helmet.renderStatic()
    const HtmlAttr = HelmetApp.htmlAttributes.toComponent()
    const BodyAttr = HelmetApp.bodyAttributes.toComponent()
    return (
        <html lang="pt" {...HtmlAttr}>
            <head>
                {HelmetApp.title.toComponent()}
                {HelmetApp.meta.toComponent()}
                {HelmetApp.link.toComponent()}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="icons/favicon.ico" />

                <Styler rules={ssrBehavior.getStylesheetString(userAgent)} />
                <style type="text/css"> {App[1].join(" ")} </style>
                <Styler rules={require("-!raw-loader!react-redux-toastr/lib/css/react-redux-toastr.min.css")} />
            </head>
            <body {...BodyAttr} >
                <div id="root" dangerouslySetInnerHTML={{ __html: App[0] }} />
                <Vendor async={false} path={"/js/dev.js"} isProduction={!production} />
                <Vendor async={false} path={"/js/client.js"} isProduction={!production} />


                <Vendor async={false} path={"/vendor/react.js"} isProduction={production} />
                <Vendor async={false} path={"/vendor/firebase.js"} isProduction={production} />
                <Vendor async={false} path={"/vendor/rxjs.js"} isProduction={production} />
                <Vendor async={false} path={"/vendor/faker.js"} isProduction={production} />
                <Vendor async={false} path={"/vendor/material.js"} isProduction={production} />
                <Vendor async={true} path={"/js/client.js"} isProduction={production} />

            </body>
        </html>)
}
