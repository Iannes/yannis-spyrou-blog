import React from 'react'

const styles = {
    intro: {
        width: '50%',
        margin: 'auto',
        lineHeight: '32px',
    },
    heading: {
        padding: 0,
        margin: '0 0 2rem',

    }
}

const Intro = () => {                
    return (
        <section style={styles.intro}>
        <h1  style={styles.heading}>Welcome</h1>
        <p>
            I am a front end developer, experienced with all development cycle stages on several 
            web projects. Well-versed in HTML5, CSS3 and JavaScript ( ES2015+ ) and currently 
            working with React / TypeScript and AWS Serverless technologies.Please check my <a href="https://github.com/iannes"> Github profile </a> for a few examples of my work
        </p>
        </section>
    )          
}

export default Intro;