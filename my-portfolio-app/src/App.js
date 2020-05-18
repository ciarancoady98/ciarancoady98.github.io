import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import ReactDOM from 'react-dom';
import Header from './Header';
import background from './header-background.jpg';


const divStyle = {
  display: 'flex',
  height: '100vh',
  width: '100vw',
  backgroundSize: 'cover',
  backgroundImage: "url(" + background + ")",
  color: 'blue',
  //paddingTop: '5vh',
  //paddingBottom: '5vh',
  justifyContent: 'center',
};

function App() {
  return (
    <div style={divStyle}>
      <Menu/>
      <Header/>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
