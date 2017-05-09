import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';
import { Add } from "./add-item";
import Avatar from 'material-ui/Avatar';

export const AddsList = ({ searchAdds }) => {
    console.log(searchAdds)
    return (
        <div>
            <List>
                {searchAdds.length === 0 ?
                    <ListItem
                        leftAvatar={<Avatar src="http://thecatapi.com/api/images/get?format=src&type=gif" />}
                        primaryText={"Nothing Here"}
                        secondaryText={"Nothing here too"} /> :
                    searchAdds.map(add => (
                        <Add key={Math.random()} addObject={add}
                        />
                    ))}
            </List>
        </div>
    );
}
