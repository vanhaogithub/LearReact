import React from 'react';
import './App.css';
import Login from './components/login/LoginComponent';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Login formName='Login Form!!' />
          <AppRouter />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
