import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <br /><br /><br />
      <section className="about-section" style={{display:'flex',margin:'0 auto',width:'70%',justifyContent:'space-between'}}>
      <div className="image">
        <img style={{width:'250px',}} src="https://seeklogo.com/images/I/indian-government-logo-1C3F1925AA-seeklogo.com.png" alt="" srcset="" />
      </div>
      <div>
      <h2 style={{fontSize:'3rem',marginLeft:'2em'}}>About Us</h2>
      <p style={{marginLeft:'6.1em'}}>
        VoteSphere is a dedicated platform committed to promoting transparency, accountability,
        and citizen engagement in the democratic process. Our mission is to empower individuals
        by providing access to comprehensive information about electoral candidates, facilitating
        informed decision-making during elections.
      </p>
      <br /><br />

      <h3 style={{fontSize:'2.5rem',marginLeft:'2.3em'}}>Our Vision</h3>
      <p style={{marginLeft:'6.1em'}}>
        To build a community where every citizen is well-informed about political candidates,
        fostering a strong democratic society.
      </p>
      </div>
      </section>
      <br /><br /><br />
    </>
  )
}

export default About