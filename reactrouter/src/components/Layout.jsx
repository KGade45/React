import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        {/* <h1 className='bg-orange-600'>hii</h1> */}
    </>
  )
}

export default Layout