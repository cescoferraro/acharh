import * as React from "react"
import * as addCSS from "../css/add.pcss"
import * as classNames from "classnames"
import List from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"
import Subheader from "material-ui/Subheader"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { AddListItem } from "./add"
import { Spinner } from "../../../../shared/components/spinner";
import { compose } from "recompose"
import { isLoaded, isEmpty } from "react-redux-firebase"
import * as ReactDOM from "react-dom"

class AddsListComponent extends React.Component<any, any>{
    nameInput: any

    componentDidMount() {
        console.log(this.nameInput)
        ReactDOM.findDOMNode(this.nameInput).focus()
    }

    render() {
        const { adds, ROUTER_EMITTER, FILTER_ACTION, FETCH_GROUPS, groups, filters } = this.props
        const list = (adds.map((add) =>
            (
                <AddListItem
                    key={Math.random()}
                    ROUTER_EMITTER={ROUTER_EMITTER}
                    groups={groups}
                    add={add}
                />
            )))

        const shirinkList = filters.hidden ?
            classNames(addCSS.fullList) : classNames(addCSS.shirinkedList)
        const fetch = () => {
            FILTER_ACTION()
            FETCH_GROUPS()
        }

        return (
            <div
                ref={(input) => { this.nameInput = input }}
                className={shirinkList} >
                {
                    adds.length === 0 ?
                        <RaisedButton
                            secondary={true}
                            onClick={fetch}
                            fullWidth={true}
                            label={"Go find something"}
                        /> :
                        <Subheader>Anúncios selecionados para você:</Subheader>
                }
                <List >
                    {adds.length !== 0 ? list : null}
                </List>
            </div>
        )
    }
}

export const AddsList = compose(withStyles(addCSS))(AddsListComponent)

