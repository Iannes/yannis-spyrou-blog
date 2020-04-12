import React from "react";

const styles = {
h1: {
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
lineHeight: '50px',
margin: 30,
padding: 0,
}
};

const Date = ({ date }) => <h3 style={styles.h1}>{date}</h3>;

export default Date;
