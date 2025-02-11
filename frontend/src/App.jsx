import React from 'react'
import {createRoutesFromElements,createBrowserRouter,Route, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './components/layout/RootLayout';
import About from './pages/About';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
  </Route>
  ))
const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App