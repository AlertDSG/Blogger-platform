import React from 'react';
import {BlogComponent} from "../../../common/components/BlogComponent";
import {NavLink} from "react-router-dom";
import arrow from '../../../assets/west.svg'
import photoUnknown from '../../../assets/photo_size_select_actual.svg'
import {Title} from "../../../common/components/Title";

export const Blog = () => {
    return (
        <div>
            <Title title={"Blogs"}/>
            <NavLink to={'/blogs'}>
                <img src={arrow} alt="arrowBack"/>
                Back to blogs
            </NavLink>
            <img src={photoUnknown} alt={'photoUnknown'}/>
            <BlogComponent title={'s'} content={'s'} onClickHandler={() => {
            }}/>
        </div>
    );
};