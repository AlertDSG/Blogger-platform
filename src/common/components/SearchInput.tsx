import React from 'react';
import styles from './SearchInput.module.css'
import search from '../../assets/Search.svg'

export const SearchInput = () => {
    return (
        <div className={styles.body}>
            <img src={search} alt="search" className={styles.img}/>
            <input type="text" placeholder={'Search'} className={styles.input}/>
        </div>
    );
};