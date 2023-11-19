import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
import './App.css'


import { Home } from './Home'  
import {Carrer} from './Carrer'
import {Course} from './Course'
import {Service} from './Service'
import {About} from './About'
import { Header } from './components/Header'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header/>}>
    <Route index element ={<Home/>}/>
    <Route path='carrer' element ={<Carrer/>}/>
    <Route path='courses' element ={<Course/>}/>
    <Route path='service' element ={<Service/>}/>
    <Route path='about' element ={<About/>}/>
  </Route>
  )
)
      

function App() {

  return (

    <RouterProvider router={router} />
           
  )
}

export default App
