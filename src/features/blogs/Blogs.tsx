import React from 'react';
import {SearchInput} from "../../common/components/SearchInput";
import {Title} from "../../common/components/Title";
import {Select} from "../../common/components/Select";
import styles from './Blogs.module.css'

export const Blogs = () => {
    return (
        <div>
            <Title title={'Blogs'}/>
            <div className={styles.bodyInputs}>
                <SearchInput/>
                <Select/>
            </div>
        </div>
    );
};