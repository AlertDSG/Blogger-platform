import React, {FC} from 'react';
import styles from './BlogComponent.module.css'
import icon from '../../assets/photo_size_select_actual.svg'


type BlogType = {
    title: string
    img?: string
    content: string
    onClickHandler: () => void
}

export const BlogComponent: FC<BlogType> = ({title, img, content, onClickHandler}) => {
    return (
        <div className={styles.body}>
            <div className={styles.bodyImg}>
                <img src={img ? img : icon} alt="icon"/>
            </div>
            <div className={styles.bodyText}>
                <h2 className={styles.title} onClick={onClickHandler}>{title}</h2>
                <p className={styles.content}>{content}</p>
            </div>

        </div>
    );
};