import React from "react";
import "./bubble.css";
import "./diamond.css";
import "./floating.css";

const Bubble = () => (

<section className="container">
  <figure className="bubble" />
</section>
);

export const FloatingSVG = ({ diamond = false, bubble = false }) => (
  <section className="shapes float">
    {bubble && <Bubble />}
    {diamond && <article className="shapes square spin" />}
  </section>
);
