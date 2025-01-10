import { BrowserRouter, Routes , Route } from 'react-router';
import './App.css'
import Login from './components/Login';
import { createContext, useState } from 'react';
import DashBoard from './components/DashBoard';

const AuthContext = createContext();
function App() {
  const [name, setName]= useState("");
  const [role, setRole]= useState("");
   const handleLoginData =(data,name)=>{
    setRole(data.role);
    setName(name);
    console.log(data.role);
    console.log(name);
    
    
    
  }

  return (
    <>
    <AuthContext.Provider value={{role, setRole, name , setName}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login loginData={handleLoginData}></Login>}></Route>
          <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        </Routes>
      
      </BrowserRouter>
    </AuthContext.Provider>
      
    </>
  )
}
export default App
export {AuthContext};
