import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Blogs} from "../features/blogs/Blogs";
import {Posts} from "../features/posts/Posts";

export const Routers = () => {
    return (
        <div style={{paddingTop: 29,paddingLeft: 24, background: '#f7f5f5', flex: 1}}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'blogs'}/>}/>
                <Route path={'blogs'} element={<Blogs/>}/>
                <Route path={'posts'} element={<Posts/>}/>
            </Routes>
        </div>
    );
};