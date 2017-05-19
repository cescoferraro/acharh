import * as React from "react"
import { PropTypes } from "prop-types"

export class WithStylesContext extends React.Component<any, any> {
    public static propTypes = {
        children: PropTypes.element.isRequired,
        onInsertCss: PropTypes.func.isRequired,
    }

    public static childContextTypes = {
        insertCss: PropTypes.func.isRequired,
    }

    public getChildContext() {
        return { insertCss: this.props.onInsertCss }
    }

    public render() {
        return React.Children.only(this.props.children)
    }
}
