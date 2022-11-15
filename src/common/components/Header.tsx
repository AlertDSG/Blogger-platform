import React from 'react';
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Blogger Platform</h1>
        </div>
    );
};