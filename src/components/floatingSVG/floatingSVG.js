import React from 'react'
import { Triangle } from './TriangleSVG'
import './floating.css'

export const FloatingSVG = () => {    
    return (
    <React.Fragment>
        <section className="shapes float">
            <article className="square spin"></article>
            <article className="circle"></article>      
            <Triangle />
        </section>                                
    </ React.Fragment>
  )
}

