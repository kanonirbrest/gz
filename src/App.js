import React from 'react';
import {Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.scss';
import MainContent from './MainContent/MainContent';

const Canvas = React.forwardRef((props, ref: any) => (
  <canvas id="pageflip-canvas" ref={ref}></canvas>
));

function App() {
  const canvasRef = React.createRef();

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="paper">
          <Canvas ref={canvasRef}/>
          <div className="App effect2 box" id="book">
            <Route path="/" exact render={() => <MainContent canvas={canvasRef} />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
