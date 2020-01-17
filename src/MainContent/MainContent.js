import React from 'react'
import {withRouter} from 'react-router-dom';
// import styles from './MainContent.module.scss';
import {flip} from './../scripts/animation';

// import {articles} from './data';
import Page from './Page/Page';

export const MainContent = ({canvas, history}) => {

  const canvasLayout = canvas.current;
  if (canvas.current) {
    flip(canvasLayout);
  }

  return (
    <>
      <Page></Page>
      <Page></Page>
      <Page></Page>
      <Page></Page>
    </>
  )
}

export default withRouter(MainContent);