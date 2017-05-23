import * as React from "react"
import { compose } from "recompose"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import { isEmpty, isLoaded } from "react-redux-firebase"
import { Loading, Empty } from "../../shared/components/helpers"

class FilterComponentClass extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    public render() {
        const setCategory = (event, index, category) => {
            this.props.SET_FILTERS_ACTION({ category })
        }
        const setGroup = (event, index, group) => {
            this.props.SET_FILTERS_ACTION({ group, category: 0 })
        }
        const eachItem = (group) => (
            <MenuItem
                key={Math.random()}
                value={group.code}
                primaryText={group.name}
            />
        )
        const isCurrentGroup = (group) => (group.code === this.props.filters.group)
        const eachCategory = (group) => (group.children.map(eachItem))
        return (
            !isLoaded(this.props.groups) ?
                <Loading /> : isEmpty(this.props.groups) ? <Empty /> :
                    (
                        <div>
                            <SelectField
                                id={"Whatever"}
                                floatingLabelText="Categoria"
                                fullWidth={true}
                                value={this.props.filters.group}
                                onChange={setGroup}
                            >
                                {this.props.groups.map(eachItem)}
                            </SelectField>

                            <SelectField
                                id={"anotherWhatever"}
                                floatingLabelText="Categoria"
                                fullWidth={true}
                                value={this.props.filters.category}
                                onChange={setCategory}
                            >
                                {this.props.groups.filter(isCurrentGroup).map(eachCategory)}
                            </SelectField>
                        </div>))

    }
}
export const FilterComponent = compose(

)(FilterComponentClass)
