import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Subway from './components/Subway'
import Rest from './components/rest'
import Todo from './components/TodoList'
import MyClock from './02/MyClock'
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain'

function App() {


  return (
    <BrowserRouter>
    <div className="w-full h-screen bg-white mx-auto flex flex-col justify-start items-start">
      <Nav/>
      <main className="mt-10 w-full flex flex-col justify-start items-center overflow-y-auto flex-grow mb-8">
        <Routes>
          <Route path='/Home' element={<Home/>} ></Route>
          <Route path='/Login' element={<Login/>} ></Route>
          <Route path='/Subway' element={<Subway/>} ></Route>
          <Route path='/rest' element={<Rest/>} ></Route>
          <Route path='/todo' element={<Todo/>}></Route> 
          <Route path='/myclock' element={<MyClock/>}></Route> 
          <Route path='/lotto' element={<Lotto/>}></Route> 
          <Route path='/Food' element={<FoodMain/>}></Route> 
        </Routes>
      </main>
      <footer className="w-full min-h-20 flex justify-center items-center bg-blue-400 text-white">
        k-digital 2025 2기 FrontEnd
      </footer>
      </div>
    </BrowserRouter>



  )
}

export default App
