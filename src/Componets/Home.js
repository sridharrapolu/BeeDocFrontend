import React from 'react'
import Carousel from '../Main/Carousel'
import Offerscroll from '../Main/Offerscroll'
import Aboutus from '../Main/Aboutus'
import Counterup from '../Main/Counterup'
import Whychooseus from '../Main/Whychooseus'
import UITreatements from '../Main/UITreatements'
import FloatingActions from '../Main/FloatingActions'
import UIHospitals from '../Main/UIHospitals'
import UIHospitalscroll from '../Main/UIHospitalscroll'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer' 

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Offerscroll/>
        <UITreatements/>
        <Aboutus/>
        <Counterup/>
        <Whychooseus/>
        <UIHospitals/>
        <UIHospitalscroll/>
        <FloatingActions/>
        <Footer/>
    </div>
  )
}

export default Home