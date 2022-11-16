import React from 'react';
import {SearchInput} from "../../common/components/SearchInput";
import {Title} from "../../common/components/Title";
import {Select} from "../../common/components/Select";
import styles from './Blogs.module.css';
import {BlogComponent} from "../../common/components/BlogComponent";
import {Button} from "../../common/components/Button";
import iconArrow from '../../assets/Vector 50.svg'
import {useNavigate} from "react-router-dom";

const arr = [
    {
        id: 1,
        title: 'blog1',
        content: 'blabla bla'
    },
    {
        id: 2,
        title: 'blog2',
        content: 'blabla bla2'
    }
]

export const Blogs = () => {

    const navigate = useNavigate()

    const onClickHandler = (blogId: number) => {
        navigate(`/blog:${blogId}`)
    }

    return (
        <div>
            <Title title={'Blogs'}/>
            <div className={styles.bodyInputs}>
                <SearchInput/>
                <Select/>
            </div>
            <div>
                {arr.map(b => <BlogComponent key={b.id} title={b.title} content={b.content} onClickHandler={() => onClickHandler(b.id)} />)}
            </div>
            <div className={styles.bodyBtn}>
                <Button img={iconArrow} classNameForArrow={styles.btnArrow} className={styles.btn} name={'Show more'} onclickHandler={() =>{}}/>
            </div>
        </div>
    );
};