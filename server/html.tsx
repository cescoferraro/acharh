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
    let css = []
    const container = renderToString(
        <WithStylesContext onInsertCss={(styles) => { css.push(styles._getCss()) }}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent })}>
                <StaticRouter location={url} context={{}}>
                    <ReduxProvider store={store}>
                        <Router />
                    </ReduxProvider>
                </StaticRouter>
            </MuiThemeProvider>
        </WithStylesContext>)
    return (<html>
        <head>
            <link rel="shortcut icon" href="icons/favicon.ico" />
            <style type="text/css">{css.join('  ')}</style>
            <title>{title}</title>
        </head>
        <body>
            <div id="root"
                dangerouslySetInnerHTML={{ __html: container }} />
            {production ? null : <script type={type} async src="/dll/vendor.js"></script>}
            <script type={type} async src="/client.js"></script>
        </body>
    </html>)
}
