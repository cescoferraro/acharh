import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as React from "react"
import TextField from "material-ui/TextField"
import { compose } from "recompose"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { Loading, Empty } from "../../shared/components/helpers"
import { states } from "../../shared/states"
import { filtersCSS } from "../css"
import * as classNames from "classnames"

class FilterComponentClass extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }
    public render() {
        const setCategory = (event, index, category) => {
            this.props.SET_FILTERS_ACTION({ category })
            this.props.FILTER_ACTION()
        }
        const setUf = (event, index, uf) => {
            this.props.SET_FILTERS_ACTION({ uf })
            this.props.FILTER_ACTION()
        }
        const setGroup = (event, index, group) => {
            this.props.SET_FILTERS_ACTION({ group, category: 0 })
            this.props.FILTER_ACTION()
        }
        const setKeyword = (event, keyword) => {
            this.props.SET_FILTERS_ACTION({ keyword })
            this.props.FILTER_ACTION()
        }
        const eachItem = (group) => (
            <MenuItem
                key={Math.random()}
                value={group.code}
                primaryText={group.name}
            />
        )
        const Nenhum = (text) => (
            <MenuItem
                value={0}
                primaryText={text}
            />
        )
        const isCurrentGroup = (group) => (group.code === this.props.filters.group)
        const eachCategory = (group) => (group.children.map(eachItem))
        const estadosItems = states
            .map((estado: any) => (
                <MenuItem
                    key={Math.random()}
                    value={estado.code}
                    primaryText={estado.name}
                />)
            )
        return (
            !isLoaded(this.props.groups) ?
                <Loading /> : isEmpty(this.props.groups) ? <Empty /> :
                    (
                        <div className={filtersCSS.container}>
                            <div className={classNames(filtersCSS.flex)}>
                                <SelectField
                                    id={"Whatever"}
                                    floatingLabelText="Groups"
                                    fullWidth={true}
                                    value={this.props.filters.group}
                                    onChange={setGroup}
                                >
                                    {Nenhum("All Groups!")}
                                    {this.props.groups.map(eachItem)}
                                </SelectField>
                                <SelectField
                                    id={"anotherWhatever"}
                                    floatingLabelText="Categories"
                                    fullWidth={true}
                                    value={this.props.filters.category}
                                    onChange={setCategory}
                                >
                                    {Nenhum("All Catagories!")}
                                    {this.props.groups.filter(isCurrentGroup).map(eachCategory)}
                                </SelectField>
                            </div>
                            <div className={classNames(filtersCSS.flex)}>
                                <div className={filtersCSS.uf}>
                                    <SelectField
                                        id={"WhateverUF"}
                                        floatingLabelText="UF"
                                        fullWidth={true}
                                        value={this.props.filters.uf}
                                        onChange={setUf}
                                    >
                                        {Nenhum("All Groups!")}
                                        {estadosItems}
                                    </SelectField></div>
                                <div className={filtersCSS.keyword}>
                                    <TextField
                                        fullWidth={true}
                                        onChange={setKeyword}
                                        floatingLabelText="Floating Label Text"
                                    />
                                </div>
                            </div>
                        </div>))
    }
}
export const FilterComponent = compose(withStyles(filtersCSS))(FilterComponentClass)
