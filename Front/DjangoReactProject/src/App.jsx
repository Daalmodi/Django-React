import { BrowserRouter, Routes , Route } from 'react-router';
import './App.css'
import Login from './components/Login';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/panel' element={<h1>panel</h1>}></Route>
        </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
