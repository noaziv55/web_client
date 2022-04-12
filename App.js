import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage'
import LoginPage from './LoginPage/LoginPage'
import './App.css'
import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/RegisterPage' element={<RegisterPage />}></Route>
          <Route path='/' element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;