import * as React from "react"
import MenuItem from "material-ui/MenuItem"
import { Helmet } from "react-helmet"

export const eachItem = (group) => {
    return (
        <MenuItem
            key={Math.random()}
            value={group.code}
            primaryText={group.name}
        />
    )
}

export const Styler = ({ rules }) => {
    return (
        <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: rules }}
        />
    )
}
export const isServer = () => !(typeof window !== "undefined" && window.document)

export const MyHelmet = ({ title }) => (
    <Helmet>
        <html lang="pt" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="shortcut icon" href="icons/favicon.ico" />
        <meta name="theme-color" content="#00bfff" />
        <title>{title} | AchaRH </title>
        <link rel="canonical" href="http://acharh.cescoferraro.xyz" />
    </Helmet>

)
