import React from 'react'
import { withRouter } from 'react-router-dom';
import styles from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <main className={styles.main}>
      {/* <div className={styles.postsWrapper}>
        {articleItems}
      </div> */}
    </main>
  )
}

export default withRouter(MainContent);