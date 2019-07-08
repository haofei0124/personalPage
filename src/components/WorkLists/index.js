
import React, { Component } from 'react';
import styles from './work.module.scss';
import { Button } from 'antd';
// import { Link } from 'react-router-dom';

export default ({ dataSource }) =>{
    return <div className={ styles.worklist }>
        <ul>
            {
                dataSource && dataSource.map(item=>
                    
                    <li key={item.id}>
                       <a 
                       href= {item.github}
                       target="_blank">
                            <div className={ styles.cover }>
                                <img src={ item.cover }/>
                            </div>
                            <div className={styles.workbrief}>
                                <h3>{item.title}</h3>
                                <p>{item.brief}</p>
                                <div className={styles.tag}>
                                    { item.tags && item.tags.map(i=><span key={i}>{i}</span>) }
                                </div>
                            </div>                       
                       </a>
                       <div style={{marginTop: 10}}>
                       <a 
                       href= {item.demo}
                       target="_blank"
                       type="button" className="btn btn-default btn-sm" style={{marginRight: 50}}>Demo</a>
                       <a
                       href= {item.github}
                       target="_blank"
                       type="button" className="btn btn-default btn-sm" 
                       >GitHub</a>
                       </div>
                    </li>
                       
                    
                    
                )
            }
        </ul>
    </div>
}
