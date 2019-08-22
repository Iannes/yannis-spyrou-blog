import React from 'react';
import './floating.css';
import './pacman.css';
import './star.css';
import './diamond.css';
import './invader.css';
import './padlock.css';

export const FloatingSVG = () => (
  <section className="shapes float">
    <article className="square spin" />
    <article className="circle" />
    <article className="pacman" />
    <article className="star" />
    <article className="diamond" />
    <article className="cut-diamond" />
  </section>
);
