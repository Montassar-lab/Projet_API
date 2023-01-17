import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Userslist from './Components/Userslist';
import Userdetails from './Components/Userdetails';
import { useState } from 'react';
import PrivateRoute from './Components/Privateroute';

function App() {

  const [auth,setAuth]=useState(false)

  return (
    <div>
      <Header auth={auth} setAuth={setAuth}/>

      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Userlist' element={<PrivateRoute auth={auth}><Userslist/></PrivateRoute>} />
        <Route path='/Userdetails/:id' element={<PrivateRoute auth={auth}><Userdetails/></PrivateRoute>} />
      
      </Routes>
    </div>

  );
}

export default App;
