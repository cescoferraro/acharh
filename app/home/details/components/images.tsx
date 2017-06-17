import { ViewPager, Frame, Track, View } from 'react-view-pager'
import * as React from "react"
import Slider from "react-slick"
import withStyles from "isomorphic-style-loader/lib/withStyles"
import * as CSS from "../css/details.pcss"

export const AddImageDetail = withStyles(CSS)(({ add }) => {
    return (
        <div>
            <h3>Images:</h3>
            <ImagesList add={add} />
        </div>
    )
})


const ImagesList = ({ add }: { add: IAdd }) => {
    console.log("hello")
    return add.images !== null && add.images.length > 0 ?
        (
            <div>
                <ViewPager>
                    <Frame
                        autoSize={true}
                        className="frame"
                    >
                        <Track
                            ref={c => this.track = c}
                            align={0.5}
                            infinite={true}
                            className="track"
                        >

                            {add.images.map((img) => (<View key={Math.random()} className="view">
                                <img className={CSS.img} src={img.url} />
                            </View>))}

                        </Track>
                    </Frame>
                    <nav className="pager-controls">
                        <a
                            className="pager-control pager-control--prev"
                            onClick={() => this.track.prev()}
                        > Prev </a>
                        <a
                            className="pager-control pager-control--next"
                            onClick={() => this.track.next()}
                        > Next </a>
                    </nav>
                </ViewPager>
            </div>
        ) :
        (<div>...loading</div>)

}
