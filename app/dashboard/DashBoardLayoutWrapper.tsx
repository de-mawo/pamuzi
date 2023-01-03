'use client'

import { useState } from "react"
import DashHeader from "./DashHeader"
import DashSideBar from "./DashSideBar"


const DashBoardLayoutWrapper = ({children}: any) => {

    const [show, setShow] = useState(false)
    const showSideBar = () => {
        setShow(!show)
    }
  return (
    <>
        <DashSideBar show={show} showSideBar={showSideBar}/>
        <main className={`dash_container ${show && 'pl-[5.25rem] md:pl-[15rem]'}`}>

        <DashHeader/>
        {children}
        </main>
    </>
  )
}

export default DashBoardLayoutWrapper