import React from 'react'
import Header from './Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
export default function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    )
}

