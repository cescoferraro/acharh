import * as React from "react"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"

export const Add = ({ add }) => {
    return (
        <Card key={Math.random()}>
            <CardHeader
                title={add.title}
                subtitle="Subtitle"
                avatar="http://thecatapi.com/api/images/get?format=src&type=gif"
            />
            <CardText>{add.description}</CardText>
            <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
            </CardActions>
        </Card>
    )

}
