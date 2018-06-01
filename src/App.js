import React, { Component } from 'react';
import withRoot from './utils/withRoot';
import './assets/App.css';
// components
import AppBar from './components/AppBar';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'var(--grey)', color: '#ffffff' }}>
        <AppBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withRoot(App);
