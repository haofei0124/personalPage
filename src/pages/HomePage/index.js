
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>
        
        {/* 个人简介 */}
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/avatar.jpg") } />
            <h2>Harry Cheng</h2>
            <ul>
                <li>Front-end developer</li>
             
            </ul>
            <p>More than two years of experience in Front-end developing.<br/> Good at frameworks and responsive design. Experienced in React.js and working with Redux.</p>
       
        </section>  

        {/* 作品列表 */}
        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>A list of project</h3>
                <p></p>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
