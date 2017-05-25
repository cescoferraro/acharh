import * as React from "react"
import { List } from "material-ui/List"
import { compose } from "recompose"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import { addCSS } from "../css"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"

export const AddsList = compose(
    withStyles(addCSS)
)(({ adds }) => {
    const list = (
        adds.map(
            (add) => (
                <Card className={addCSS.test} key={Math.random()}>
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
        )
    )
    return (<div className={addCSS.container}> {adds.length === 0 ? <h2>List is empty!</h2> : list} </div>)
})
