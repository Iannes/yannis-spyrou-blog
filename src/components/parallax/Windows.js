import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { ClientMain } from "../floatingSVG/ClientMain";
import { Clients } from "../floatingSVG/Clients";

const styles = {
section: {
display: 'flex',
width: '100%',
justifyContent: 'center',
},
};

const Windows = ({ onClick }) => (
<>
<ParallaxLayer offset={4.5} speed={-0.3}>
<Clients styles={styles.section} />
</ParallaxLayer>
<ParallaxLayer
offset={4}
speed={-0}
style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
onClick={onClick} >
<ClientMain styles={styles.clientMain} />
</ParallaxLayer>
</>
);

export default Windows;
