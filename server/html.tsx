import * as React from "react"
import { Helmet } from "react-helmet"
import { Renderer, Vendor } from "./renderer"

export const HTML = ({ production, userAgent, url, store, title }) => {
    const App = Renderer(url, userAgent, store)
    const HelmetApp = Helmet.renderStatic()
    const HtmlAttr = HelmetApp.htmlAttributes.toComponent()
    const BodyAttr = HelmetApp.bodyAttributes.toComponent()
    return (
        <html {...HtmlAttr}>
            <head>
                {HelmetApp.title.toComponent()}
                {HelmetApp.meta.toComponent()}
                {HelmetApp.link.toComponent()}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="icons/favicon.ico" />
                <style type="text/css"> {App[1].join(" ")} </style>
            </head>
            <body {...BodyAttr} >
                <div
                    id="root"
                    dangerouslySetInnerHTML={{ __html: App[0] }}
                />

                <Vendor
                    path={"/vendor.js"}
                    isProduction={production}
                />

                <script type={"text/javascript"} async={true} src={"/js/client.js"} />
            </body>
        </html>)
}
