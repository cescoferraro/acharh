import * as React from "react"
const type = "text/javascript"
import { renderToStaticMarkup, renderToString } from "react-dom/server"
import { Provider as ReduxProvider } from "react-redux"
import { StaticRouter } from "react-router-dom"
import * as injectTapEventPlugin from "react-tap-event-plugin"
import { configureStore } from "../store/createStore"
import { Router } from "../app/router"
import { WithStylesContext } from "../shared/components/styles.context"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

export const HTML = ({ production, userAgent, url, store, title }) => {
    const css = []
    const inserter = (styles) => { css.push(styles._getCss()) }
    const container = renderToString(
        <WithStylesContext onInsertCss={inserter}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent })}>
                <StaticRouter location={url} context={{}}>
                    <ReduxProvider store={store}>
                        <Router />
                    </ReduxProvider>
                </StaticRouter>
            </MuiThemeProvider>
        </WithStylesContext>)
    const vendor = production ? null : (
        <script
        type={type}
        async={true}
        src="/dll/vendor.js"
        />)
    return (
        <html>
            <head>
                <link rel="shortcut icon" href="icons/favicon.ico" />
                <style type="text/css">{css.join(" ")}</style>
                <title>{title}</title>
            </head>
            <body>
                <div
                    id="root"
                    dangerouslySetInnerHTML={{ __html: container }}
                />
                {vendor}
                <script
                    type={type}
                    async={true}
                    src="/client.js"
                />
            </body>
        </html>)
}
