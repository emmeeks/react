import React, { Component } from 'react'
import logo from './star.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Hey there.</h1>
        </header>
        <p className='App-intro'>
          I built this app using React. I plan to build more soon.
        </p>
      </div>
    )
  }
}

export default App
