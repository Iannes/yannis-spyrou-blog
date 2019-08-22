import React from 'react';
import { Triangle } from './TriangleSVG';
import './floating.css';
import './pacman.css';
import './star.css';

export const FloatingSVG = () => (
  <section className="shapes float">
    <article className="square spin" />
    <article className="circle" />
    <article className="pacman" />
    <article className="star" />
    <Triangle />
  </section>
);
