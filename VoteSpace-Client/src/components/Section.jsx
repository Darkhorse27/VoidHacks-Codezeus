import React from 'react'
import { Link } from 'react-router-dom'
import "../Stylesheets/Section.css"

const Section = () => {
  return (
    <>
    <section id="yourUniqueSectionId" className='yourUniqueSectionClassName'>
      <div className="yourUniqueHomeTxtClassName">
        <p className="yourUniqueCollectioClassName">Transforming Democracy with Technology</p>
        <h2>
          Explore the <br />
          <div id='yourUniqueFallWinterId' style={{ fontSize: "4.2rem", color: "",padding:'20px 8px' }}>VoteSphere</div>
        </h2>
        <div className="yourUniqueHomeLabelClassName">
          <p>Empowering voters through a secure and efficient online voting experience. Join us in shaping the future of democratic elections.</p>
        </div>
        <button id='yourUniqueBtnId' style={{ border: "1px solid black", color: "black" }}>
          <Link to="/voting">VOTE NOW</Link><i className='bx bx-right-arrow-alt'></i>
        </button>
      </div>
    </section>
  </>
  )
}

export default Section