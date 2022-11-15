import React, {FC, useState} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavigateLink.module.css';

type LinkType = {
    title: string
    path: string
    d: string
}

export const NavigateLinkBlogs: FC<LinkType> = ({title, path}) => {
    const [styleDiv, setStyleDiv] = useState('')

    return (
        <div className={styleDiv}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                {/*<SvgBlog d={d} fill={styleDiv ? '#F8346B': '#1A1718'} height={24} width={24}/>*/}
                <svg width="24" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4ZM0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4Z" fill={styleDiv === styles.bodyActive ? '#F8346B' : '#1A1718'}/>
                </svg>

            </div>
            <NavLink to={path} className={act => {
                if (act.isActive) {
                    setStyleDiv(styles.bodyActive)
                    return styles.active
                } else {
                    setStyleDiv(styles.body)
                   return styles.default
                }
            }}>
                {title}
            </NavLink>
        </div>
    );
};

export const NavigateLinkPosts: FC<LinkType> = ({title, path}) => {
    const [styleDiv, setStyleDiv] = useState('')

    return (
        <div className={styleDiv}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                {/*<SvgBlog d={d} fill={styleDiv ? '#F8346B': '#1A1718'} height={24} width={24}/>*/}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z" fill={styleDiv === styles.bodyActive ? '#F8346B' : '#1A1718'}/>
                </svg>
            </div>
            <NavLink to={path} className={act => {
                if (act.isActive) {
                    setStyleDiv(styles.bodyActive)
                    return styles.active
                } else {
                    setStyleDiv(styles.body)
                    return styles.default
                }
            }}>
                {title}
            </NavLink>
        </div>
    );
};