import React from 'react'
import "../Stylesheets/Footer.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer-container container">
                    <div class="content_1">
                        <div style={{ fontSize: "2rem", color: "black" }}>
                            VoteSphere
                        </div>
                        <p>Empowering Democracy through Digital Voting. <br /> Exercise Your Right to Vote Online with <br /> VoteSphere, where Your Voice Matters.</p>
                    </div>
                    <div class="content_2">
                        <h4>EXPLORE</h4>
                        <a href="#">Candidates</a>
                        <a href="#">Election Updates</a>
                        <a href="#">Voting Process</a>
                    </div>
                    <div class="content_3">
                        <h4>RESOURCES</h4>
                        <a href="./contact.html">Contact Us</a>
                        <a href="#">How to Vote</a>
                        <a href="#">Election FAQs</a>
                        <a href="#">Terms and Conditions</a>
                    </div>
                    <div class="content_4">
                        <h4>NEWSLETTER</h4>
                        <p>Stay Informed about Elections! Sign up to receive updates, <br /> election news, and important announcements.</p>
                        <div class="f-mail">
                            <input type="email" placeholder="Your Email" />
                            <i class='bx bx-envelope'></i>
                        </div>
                        <hr />
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer