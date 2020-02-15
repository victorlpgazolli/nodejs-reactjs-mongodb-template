import React from 'react';
import styles from './style.js';

export default function Button({ title = "", onClick, type = "submit" }) {

    return (
        <styles.buttonDefault
            onClick={() => {
                if (onClick) onClick();
            }}
            type={type}
            className={"buttonDefault buttonColor"}>
            {title}
        </styles.buttonDefault>
    );
}
