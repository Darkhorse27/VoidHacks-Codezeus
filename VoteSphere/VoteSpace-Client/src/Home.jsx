import React from 'react'
import Navbar from './components/Navbar'
import Parties from './components/Parties'
import Section from './components/Section'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Section/>
        <Parties/>
        <Footer/>
    </div>
  )
}

export default Home