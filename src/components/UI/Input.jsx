import React from 'react';
import styles from './Input.module.css'


export const Input = React.forwardRef((
    { label="",
     input={} },
     ref ) => {

    return <div className={styles.input}>
        <label htmlFor={input.id} >{label}</label>
        <input 
        ref={ref}
         {...input} />
    </div>
});