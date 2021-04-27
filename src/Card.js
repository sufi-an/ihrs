import React from 'react';
import classes from './Card.module.css';
const card=(props)=>(
    <div className={classes.Card}>
        {props.data}
    </div>
)

export default card;