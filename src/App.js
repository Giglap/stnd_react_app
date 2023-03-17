import logo from './logo.svg';
import './App.css';
import './Flip.css';

export default function App() {
  return (<div className="gwrap">
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>    
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>    
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>    
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>    
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
    <Flip/><Flip/><Flip/><Flip/><Flip/><Flip/><Flip/>
  </div>
    
  );
}

function Flip() {
  return (
    <div className="Flip">VVV</div>
  )
}

function Logo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


