import React from 'react'
import { Outlet } from "react-router-dom"
import MainHeader from '../../components/Main/Header'
function MainRoot() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}

export default MainRoot