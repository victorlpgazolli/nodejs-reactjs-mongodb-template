import React, { useState } from 'react';
import styles from './style.js';

export default function Input({ ...props }) {

    return (
        <styles.inputDefault
            {...props}
            className={["inputDefault"]}
        />
    );
}
