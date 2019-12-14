import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
// import './styles/mainPage.css';
// import './styles/paperEffect.css';
import MainContent from './MainContent/MainContent';
import {flip} from './scripts/animation';

const Canvas = React.forwardRef((props, ref) => (
  <canvas id="pageflip-canvas" ref={ref}></canvas>
));

class App extends Component {
  canvasRef: any;

  constructor(props: any) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.canvasRef.current);
    flip(this.canvasRef.current)
    // console.log(loupsImg, 'img');
  }

  render() {
    return (
      <div id="book">
        <Canvas ref={this.canvasRef} />
        <div className="App effect2 box" id="pages">
          <section >
            <div>
              <h2><a href="http://ruseller.com/lessons.php?rub=2&id=452">8 способов сделать списки привлекательными при помощи стилей</a></h2>
              <p>В этом уроке я покажу вам 8 отличных способов, позволяющих сделать обычные скучные html-списки привлекательными.</p>
            </div>
          </section>
          <section >
            <div>
              <h2><a href="http://ruseller.com/lessons.php?rub=2&id=452">9 способов сделать списки привлекательными при помощи стилей</a></h2>
              <p>В этом уроке я покажу вам 9 отличных способов, позволяющих сделать обычные скучные html-списки привлекательными.</p>
            </div>
          </section>
          <section >
            <div>
              <h2><a href="http://ruseller.com/lessons.php?rub=2&id=452">10 способов сделать списки привлекательными при помощи стилей</a></h2>
              <p>В этом уроке я покажу вам 10 отличных способов, позволяющих сделать обычные скучные html-списки привлекательными.</p>
            </div>
          </section>
          <section >
            <div>
              <h2><a href="http://ruseller.com/lessons.php?rub=2&id=452">11 способов сделать списки привлекательными при помощи стилей</a></h2>
              <p>В этом уроке я покажу вам 11 отличных способов, позволяющих сделать обычные скучные html-списки привлекательными.</p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App;
