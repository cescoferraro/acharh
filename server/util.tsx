import { Helmet } from "react-helmet"

export const Helmator = () => {
    const HelmetApp = Helmet.renderStatic()
    return ({
        html: HelmetApp.htmlAttributes.toComponent(),
        body: HelmetApp.bodyAttributes.toComponent(),
        title: HelmetApp.title.toComponent(),
        meta: HelmetApp.meta.toComponent(),
        link: HelmetApp.link.toComponent()
    })
}
