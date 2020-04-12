import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { FloatingSVG } from "../../floatingSVG/floatingSVG";

const Bubbles = () => (
<>
<ParallaxLayer offset={1.9} speed={0.1}>
<FloatingSVG bubble />
</ParallaxLayer>
<ParallaxLayer offset={2.9} speed={0.1}>
<FloatingSVG bubble />
</ParallaxLayer>
</>
);

export default Bubbles;
