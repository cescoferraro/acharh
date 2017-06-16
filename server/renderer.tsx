import * as React from "react"
import { renderToString } from "react-dom/server"
import { Provider as ReduxProvider } from "react-redux"
import { StaticRouter } from "react-router-dom"
import { Router } from "../app/router"
import { WithStylesContext } from "../shared/components/styles.context"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

export const Renderer = (url, userAgent, store) => {
    const css = []
    const inserter = (s) => { css.push(s._getCss()) }
    const Container = renderToString(
        <WithStylesContext onInsertCss={inserter}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent })}>
                <StaticRouter location={url} context={{}}>
                    <ReduxProvider store={store}>
                        <Router userAgent={userAgent} />
                    </ReduxProvider>
                </StaticRouter>
            </MuiThemeProvider>
        </WithStylesContext>)
    return [Container, css]
}

export const Vendor = ({ path, isProduction }) => {
    return (isProduction ? null :
        <script type={"text/javascript"} async={true} src={path} />)
}
