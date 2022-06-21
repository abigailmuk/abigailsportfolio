import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import ScrollToTop from '../components/ScrollToTop'
import InfoSection from '../components/InfoSection'
import InfoSection2 from '../components/InfoSection/index2'
import Footer from '../components/Footer'
import { NewsOne, homeObjTwo } from '../components/InfoSection/Data'

const EducationPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>  
      <InfoSection {...homeObjTwo}/>      
      <InfoSection2 {...NewsOne}/> 
      <Footer />
    </>
    

  )
}

export default EducationPage