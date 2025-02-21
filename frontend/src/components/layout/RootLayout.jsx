import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { EcommerceNavbar } from '../Navbar'
import { Footer } from '../Footer'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <EcommerceNavbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout

//  class 9 sesh next 10 start hobe