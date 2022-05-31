import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';



function App() {
  return (
    <>
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
