import * as React from "react"
import { renderToString } from "react-dom/server"
import { Provider as ReduxProvider } from "react-redux"
import { StaticRouter } from "react-router-dom"
import { Router } from "../app/router"
import { WithStylesContext } from "../shared/components/styles.context"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { AchaRHTheme } from "../shared/theme";

export const Renderer = (url, userAgent, store, production) => {
    const css = []
    const inserter = (s) => { css.push(s._getCss()) }
    const Container = renderToString(
        <WithStylesContext onInsertCss={inserter}>
            <MuiThemeProvider muiTheme={getMuiTheme(AchaRHTheme, { userAgent })}>
                <StaticRouter location={url} context={{}}>
                    <ReduxProvider store={store}>
                        <Router production={production} userAgent={userAgent} />
                    </ReduxProvider>
                </StaticRouter>
            </MuiThemeProvider>
        </WithStylesContext>)
    return [Container, css]
}

export const Vendor = ({ path, defer = false, async = false, condition }) => {
    return (condition ?
        <script type={"text/javascript"} defer={defer} async={async} src={path} /> : null)
}
