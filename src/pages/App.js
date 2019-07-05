import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link,Route,withRouter } from 'react-router-dom';
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import WorkPageDetail from './WorkPageDetail'

class App extends Component {
  render() {
    // const { location } = this.props;
    return (
      <div className={styles.App}>

         {/* 头部导航 */}
         <header className={styles.header}>
            <div className={styles.box}>
            {/* <Link to="/"><div className={styles.boxleft}>Vauxlab</div></Link> */}
               <div className={styles.boxright}>
                  <Link to="/personalPage"><p className={ styles.sel }>HOME</p></Link> 
                  <Link to="/contact"><p className={ styles.selected} >CONTACT</p></Link>
               </div>
            </div>
         </header>

         {/* 内容区 */}
         <section className={styles.content}>
           <Route path="/personalPage" exact component={ HomePage } />
           <Route path="/contact" exact component={ ContactPage } />
           <Route path="/works/:id" exact component={ WorkPageDetail } />
         </section>

         {/* 底部 */}
         <footer className={styles.footer}>
           <p>Copyright © 2019 by Harry Cheng. All rights reserved.</p>
         </footer>
      </div>
    );
  }
}

export default App;