import React from 'react';
import ReactDOM from 'react-dom';
import logo_ulstu from './logo_ulstu.svg';
import './App.css';
import Counter from './Counter';
import Tick from './Tick';
import EventHandler from './Mouse'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_ulstu} className="App-logo" alt="logo" />
        <br></br>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
        <Counter initialValue={10} step={5} />
        <Tick time={"null"} />
        <EventHandler onClick={MouseEvent.arguments} />
      </header>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;