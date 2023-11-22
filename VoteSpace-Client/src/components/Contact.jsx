import React from 'react'

const Contact = () => {
    return (
        <>
           <section style={{ position: 'relative', zIndex: 3, paddingTop: '50px', paddingBottom: '50px' }}>
                <div className="container" style={{ maxWidth: '1080px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', paddingRight: '20px' }}>
                    <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '3em', marginBottom: '20px' }}>Contact Us</h2>
                        <p style={{ color: 'black' }}>Thank you for choosing Votesphere, your trusted online voting system. At Votesphere, we are dedicated to providing a secure, transparent, and efficient platform for democratic processes.</p>
                    </div>
                    <div className="contact-info" style={{ width: '60%', margin:'0 auto' }}>
                        <div className="contact-info-item" style={{ display: 'flex', marginBottom: '30px' }}>
                            <div className="contact-info-icon" style={{ height: '60px', width: '60px', backgroundColor:'rgb(0 0 0 / 4%)', textAlign: 'center', borderRadius: '50%' }}>
                                <i className="fas fa-home" style={{ fontSize: '30px',lineHeight:'60px'}}></i>
                            </div>
                            <div className="contact-info-content" style={{ marginLeft: '20px' }}>
                                <h4 style={{ color: 'black', fontSize: '1.4em', marginBottom: '5px' }}>123 Voting Street,</h4>
                                <p style={{ color: 'black', fontSize: '1em' }}>Cyberpolis, Digital District,<br /> Webland, 98765</p>
                            </div>
                        </div>
                        <div className="contact-info-item" style={{ display: 'flex', marginBottom: '30px' }}>
                            <div className="contact-info-icon" style={{ height: '60px', width: '60px', backgroundColor: 'rgb(0 0 0 / 4%)', textAlign: 'center', borderRadius: '50%' }}>
                                <i className="fas fa-phone" style={{ fontSize: '30px', lineHeight: '60px' }}></i>
                            </div>
                            <div className="contact-info-content" style={{ marginLeft: '20px' }}>
                                <h4 style={{ color: 'black', fontSize: '1.4em', marginBottom: '5px' }}>Phone</h4>
                                <p style={{ color: 'black', fontSize: '1em' }}>+91 8827270124</p>
                            </div>
                        </div>
                        <div className="contact-info-item" style={{ display: 'flex', marginBottom: '30px' }}>
                            <div className="contact-info-icon" style={{ height: '60px', width: '60px', backgroundColor: 'rgb(0 0 0 / 4%)', textAlign: 'center', borderRadius: '50%' }}>
                                <i className="fas fa-envelope" style={{ fontSize: '30px', lineHeight: '60px' }}></i>
                            </div>
                            <div className="contact-info-content" style={{ marginLeft: '20px' }}>
                                <h4 style={{ color: 'black', fontSize: '1.4em', marginBottom: '5px' }}>Email</h4>
                                <p style={{ color: 'black', fontSize: '1em' }}>votesphere.contactus@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
