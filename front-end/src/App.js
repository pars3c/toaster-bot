import React, { Component } from 'react';
import ToastForm from './ToastForm'
import FinishedRequests from './FinishedRequests'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastForm></ToastForm>
        <FinishedRequests></FinishedRequests>
      </div>
    );
  }
}

export default App;
