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
                                onChange={
                                    (event, index, valuerr) => {
                                        this.props.SET_FILTERS_ACTION({ group: valuerr, category: 0 })
                                    }
                                }
                            >
                                {this.props.groups.map(
                                    (group) => (
                                        <MenuItem
                                            key={Math.random()}
                                            value={group.code}
                                            primaryText={group.name}
                                        />
                                    ))}
                            </SelectField>

                            <SelectField
                                id={"anotherWhatever"}
                                floatingLabelText="Categoria"
                                fullWidth={true}
                                value={this.props.filters.category}
                                onChange={
                                    (event, index, value) => {
                                        this.props.SET_FILTERS_ACTION({ category: value })
                                    }
                                }
                            >

                                {this.props.groups.filter((group) => {
                                    return group.code === this.props.filters.group
                                }).map((group) => (
                                    group.children.map(
                                        (service) => (
                                            <MenuItem
                                                key={Math.random()}
                                                value={service.code}
                                                primaryText={service.name}
                                            />

                                        )
                                    )
                                ))}
                            </SelectField>
                        </div>))

    }
}
export const FilterComponent = compose(

)(FilterComponentClass)
