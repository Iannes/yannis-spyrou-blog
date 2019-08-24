import React from 'react';
import './floating.css';
import './diamond.css';
import './bubble.css';

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
