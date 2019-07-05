
import React, { Component } from 'react';
import styles from './works.module.scss';

export default class ContactPage extends React.Component {
    render(){
        return (
            <div className={ styles.wrap }>
                <div className={ styles.title }>
                    <h3>CONTACT ME</h3>
                </div>
                    <h1>Cellphone: (778)-798-6706</h1>
                    <div style={{marginTop: 100}} >
                        <a 
                        href='http://www.linkedin.com/in/haofei-cheng-75745371/' 
                        target="_blank"
                        
                        ><span style={{marginRight: 100}} ><i className="fa fa-linkedin fa-4x" ></i></span></a> 
                        <a 
                        href='http://www.facebook.com/haofei.cheng'  target="_blank"
                        ><b><i className="fa fa-facebook fa-4x" ></i></b></a>
                    </div>
                
            </div>
        );
    }
}
