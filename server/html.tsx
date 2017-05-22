import * as React from "react"
import { renderToString } from "react-dom/server"
import { Provider as ReduxProvider } from "react-redux"
import { StaticRouter } from "react-router-dom"
import { Router } from "../app/router"
import { WithStylesContext } from "../shared/components/styles.context"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { Helmet } from "react-helmet"

const Vendor = ({ path, isProduction }) => {
    const type = "text/javascript"
    return (isProduction ? null :
        <script type={type} async={true} src={path} />)
}

export const Renderer = (url, userAgent, store) => {
    const css = []
    const inserter = (s) => { css.push(s._getCss()) }
    const Container = renderToString(
        <WithStylesContext onInsertCss={inserter}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent })}>
                <StaticRouter location={url} context={{}}>
                    <ReduxProvider store={store}>
                        <Router />
                    </ReduxProvider>
                </StaticRouter>
            </MuiThemeProvider>
        </WithStylesContext>)
    return [Container, css]
}

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
                <link rel="shortcut icon" href="icons/favicon.ico" />
                <style type="text/css">{App[1].join(" ")}</style>
            </head>
            <body {...BodyAttr} >
                <div
                    id="root"
                    dangerouslySetInnerHTML={{ __html: App[0] }}
                />
                <Vendor
                    path={"/dll/vendor.js"}
                    isProduction={production}
                />
                <Vendor
                    path={"/client.js"}
                    isProduction={production}
                />
            </body>
        </html>)
}
