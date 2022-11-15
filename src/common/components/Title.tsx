import React, {FC} from 'react';
import styles from "../../features/blogs/Blogs.module.css";

type TitleType = {
    title: string
}

export const Title: FC<TitleType> = ({title}) => {
    return (
        <h3 className={styles.title}>{title}</h3>
    );
};