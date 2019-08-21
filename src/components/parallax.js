import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const Test = () => {
    return (
        <p>Hi</p>
    )
}


export default Test;