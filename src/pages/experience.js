import React from 'react'
import Helmet from 'react-helmet'
import Intro from '../components/cv/Intro'
import { Layout} from '../components'
import { Content } from '../components/Content'
import Date from '../components/Date'
import config from '../../config'
const Immediate = () => <Date date="September 2018 – Present" />
const CKD = () => <Date date="September 2017 – September 2018" />
const Discover = () => <Date date="April 2017 – September 2017" />
const Test = () => {
    return (
        <>
        <Discover />
        <Intro />
        </>
    )
}

const arr = [<Intro />,<Test />, <Immediate />, <CKD />, <Discover />, <Intro />];    

const Experience = () => {    
    return (
    <Layout>        
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Content>
            {arr.map(item => {            
            return (
            <article style={styles.block} key={item}>                                  
                    <section style={styles.title}>
                        {item}
                    </section>                                    
            </article>            
            )})}      
        </Content>    
    </Layout>  
    )
}

const styles = {
    root: {
        padding: 0,
        margin: 0
    },
    block: {
        alignItems: 'center',
        background: '#fff',        
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: '20px',
        lineHeight: '28px',
        color: 'black',
        fontWeight: 100,
        padding: 20,
    }
}

export default Experience;