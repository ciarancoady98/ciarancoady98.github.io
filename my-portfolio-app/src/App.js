import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './NavBar';
import TemporaryDrawer from './AppDrawer'
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <TemporaryDrawer/>
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
