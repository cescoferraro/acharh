import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

export const Add = ({ addObject }: { addObject: add }) => {
    console.log(addObject)
    let old = <ListItem
        leftAvatar={<Avatar
            src="http://thecatapi.com/api/images/get?format=src&type=gif" />}
        primaryText={addObject.title}
        secondaryText={addObject.description}>
        <p>{addObject.author}</p>
    </ListItem>
    return (old);

}
