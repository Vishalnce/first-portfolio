import './App.css'
import {  Header, About, Skills, Education, Profolio, Contact} from './Components/index.js';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


function App() {


  return (
    <>

      <Header/>
      <About/>
      <Skills/>
      <Education/>
      <Profolio/>
      <Contact/> 


    </>
  )
}

export default App
