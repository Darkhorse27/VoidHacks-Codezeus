import React from 'react'
import "../Stylesheets/Section.css"

const Section = () => {
  return (
    <>
      <section id="home" className='section-container'>
          <div class="home_txt ">
            <p class="collectio ">Transforming Democracy with Technolog</p>
            <h2>Explore the <br /><div id='fallwinter' style={{ fontSize: "3.2rem", color: "" }}>VoteSphere</div> Platform</h2>
          <div class="home_label ">
            <p>Empowering voters through a secure and efficient online voting experience. Join us in shaping the future of democratic elections.</p>
          </div>
          <button id='btn' style={{ border: "1px solid black", color: "black" }}><a href="#sellers">VOTE NOW</a><i class='bx bx-right-arrow-alt'></i></button>
        </div>
      </section>
      <hr />
    </>
  )
}

export default Section