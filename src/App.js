import React from 'react';
import BreweryContainer from './containers/BreweryContainer/BreweryContainer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <BreweryContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
