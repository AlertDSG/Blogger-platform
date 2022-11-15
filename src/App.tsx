import React from 'react';
import './App.css';
import {Header} from "./common/components/Header";
import {Routers} from "./common/Routers";
import {NavigateLinkBlogs, NavigateLinkPosts} from "./common/components/NavigateLink";

function App() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header/>
                <div className='mainBody'>
                    <div className='navBar'>
                        <NavigateLinkBlogs title={'Blogs'} path={'blogs'}
                                           d={"M0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4ZM0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4Z"}/>
                        <NavigateLinkPosts title={'Posts'} path={'posts'}
                                           d={"M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z"}/>
                    </div>
                    <Routers/>
                </div>
            </div>
        </div>
    );
}

export default App;
