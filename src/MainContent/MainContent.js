import React from 'react'
import { withRouter } from 'react-router-dom';
import styles from './MainContent.module.scss';
import {flip} from './../scripts/animation';
// import NewsItem from '../NewsItem/NewsItem';
import {articles} from './data';

export const MainContent = ({canvas, history}) => {
  console.log(canvas, 'ca')
  const canvasLayout = canvas.current;
  if(canvas.current) {
    console.log('asdf')
    flip(canvasLayout);
  }

  let articleItems: any[] = articles.map((article, index) => 
  <div>asdfasdfasfasdfs</div>)
  
  const onItemClick = (id: number) => {
    history.push(`/post/${id}`);
  }

  return (
    <>
    <section >
    <div>
        <h2><a href="http://ruseller.com/lessons.php?rub=2&id=452">8 способов сделать списки привлекательными при помощи стилей</a></h2>
        <p>В этом уроке я покажу вам 8 отличных способов, позволяющих сделать обычные скучные html-списки привлекательными.</p>
      </div>
    </section>
    <section >
    <div>
        <h2><a href="http://ruseller.com/lessons.php?rub=2&id=452">8 способов сделать списки привлекательными при помощи стилей</a></h2>
        <p>В этом уроке я покажу вам 8 отличных способов, позволяющих сделать обычные скучные html-списки привлекательными.</p>
      </div>
    </section>
    <section >
    <div>
        <h2><a href="http://ruseller.com/lessons.php?rub=2&id=452">8 способов сделать списки привлекательными при помощи стилей</a></h2>
        <p>В этом уроке я покажу вам 8 отличных способов, позволяющих сделать обычные скучные html-списки привлекательными.</p>
      </div>
    </section>
    <section >
    <div>
        <h2><a href="http://ruseller.com/lessons.php?rub=2&id=452">8 способов сделать списки привлекательными при помощи стилей</a></h2>
        <p>В этом уроке я покажу вам 8 отличных способов, позволяющих сделать обычные скучные html-списки привлекательными.</p>
      </div>
    </section>
    </>
  )
}

export default withRouter(MainContent);