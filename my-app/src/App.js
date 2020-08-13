import React from 'react';
import './App.css';
import Login from './components/login/LoginComponent';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Login formName='Login Form!!'/>
      </div>
    );
  }
}
export default App;
