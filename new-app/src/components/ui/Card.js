import React from 'react';
import classes from './Card.module.css';

// children is a tag all props have
function Card(props){
    return(
    <div className={classes.card}>
        {props.children}
    </div>);
}

export default Card;