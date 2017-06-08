import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as React from "react"
import TextField from "material-ui/TextField"
import { compose } from "recompose"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { Loading, Empty } from "../../../shared/components/helpers"
import RaisedButton from "material-ui/RaisedButton"
import { states } from "../../../shared/states"
import * as  filtersCSS from "./filters.pcss"
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
        const setCity = (event, index, city) => {
            this.props.SET_FILTERS_ACTION({ city })
            this.props.FILTER_ACTION()
        }
        const setUf = (event, index, uf) => {
            this.props.SET_FILTERS_ACTION({ uf, city: 0 })
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
        const isCurrentState = (state) => (state.code === this.props.filters.uf)
        const eachCategory = (group) => (group.children.map(eachItem))
        const eachState = (state) => (state.children.map(eachItem))
        const estadosItems = states
            .map((estado: any) => (
                <MenuItem
                    key={Math.random()}
                    value={estado.code}
                    primaryText={estado.uf}
                />)
            )
        const showHide = () => {
            this.props.SET_FILTERS_ACTION({ hidden: !this.props.filters.hidden })
        }
        const hideFilter = !this.props.filters.hidden ?
            classNames(filtersCSS.flex) : classNames(filtersCSS.hidden)
        const buttonLabel = !this.props.filters.hidden ?
            "ESCONDER FILTROS" : "EXIBIR FILTROS"
        const hideContainer = !this.props.filters.hidden ?
            classNames(filtersCSS.container) : classNames(filtersCSS.containerHidden)
        return (
            !isLoaded(this.props.groups) ?
                <Loading /> : isEmpty(this.props.groups) ? <Empty /> :
                    (
                        <div className={hideContainer}>
                            <div className={hideFilter}>
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
                            <div className={hideFilter}>
                                <div className={filtersCSS.uf}>
                                    <SelectField
                                        id={"WhateverUF"}
                                        floatingLabelText="UF"
                                        fullWidth={true}
                                        value={this.props.filters.uf}
                                        onChange={setUf}
                                    >
                                        {Nenhum("All States!")}
                                        {estadosItems}
                                    </SelectField>
                                </div>
                                <div className={filtersCSS.city}>
                                    <SelectField
                                        id={"cIDADES"}
                                        floatingLabelText="Cidades"
                                        fullWidth={true}
                                        value={this.props.filters.city}
                                        onChange={setCity}
                                    >
                                        {Nenhum("All Cities!")}
                                        {states.filter(isCurrentState).map(eachState)}
                                    </SelectField>
                                </div>
                                <div className={filtersCSS.keyword}>
                                    <TextField
                                        fullWidth={true}
                                        onChange={setKeyword}
                                        floatingLabelText="Floating Label Text"
                                    />
                                </div>
                            </div>
                            <RaisedButton fullWidth={true} onClick={showHide} label={buttonLabel} />
                        </div >))
    }
}
export const FilterComponent = compose(withStyles(filtersCSS))(FilterComponentClass)
