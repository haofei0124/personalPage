
import React, { Component } from 'react';
import styles from './works.module.scss';

export default class ContactPage extends React.Component {
    render(){
        return (
            <div>
                <div className={ styles.pic}>
                    <img src={ require("../../assets/images/9878701.png") } alt=""/>
                </div>
                <div className={ styles.wrap }>
                    <div className={ styles.title }>
                        <h3>CONTACT ME</h3>
                    </div>
                        <h1 style={{fontSize:16}}>Cellphone: (778)-798-6706</h1>
                        <h1 style={{marginTop: 10, fontSize:16}}>Email: chenghaofei@hotmail.com</h1>
                    <div style={{marginTop: 60}} >
                        <a 
                        href='http://www.linkedin.com/in/haofei-cheng-75745371/' 
                        target="_blank"
                        ><span style={{marginRight: 100}} ><i className="fa fa-linkedin fa-4x" ></i></span></a> 
                        <a 
                        href='http://www.facebook.com/haofei.cheng'  target="_blank"
                        ><b><i className="fa fa-facebook fa-4x" ></i></b></a>
                    </div>
                
                </div>
            </div>
        );
    }
}
