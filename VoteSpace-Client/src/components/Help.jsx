import React from 'react'

const Help = () => {
    return (
        <>
             <section style={{ position: 'relative', zIndex: 3, paddingTop: '50px', paddingBottom: '50px' }}>
                <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '3em', marginBottom: '20px' }}>Help & Support</h2>
                        <p style={{ color: 'black' }}>Thank you for choosing Votesphere, your trusted online voting system. At Votesphere, we are committed to
                            ensuring your online voting experience is smooth and trouble-free. If you encounter any issues, have
                            questions, or need assistance, our dedicated support team is here to help. Please fill out the form below,
                            providing details about the problem you're facing or the assistance you require. Our experts will promptly
                            address your concerns and guide you through any challenges you may encounter. Your satisfaction is our
                            priority, and we appreciate your trust in Votesphere for secure and transparent online voting.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="contact-form" style={{ backgroundColor: 'transparent', padding: '40px', width: '100%', paddingBottom: '20px', paddingTop: '20px', }}>
                        <form action="" id="contact-form">
                            <form action="./processform.php" id="contact-form" method="post"></form>
                            <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '10px', color: 'black' }}>Get in touch</h2>
                            <div className="input-box" style={{ position: 'relative', width: '100%', marginTop: '10px' }}>
                                <input type="text" required="true" name="" placeholder="Full Name" style={{ width: '100%', padding: '5px 0', fontSize: '16px', margin: '10px 0', border: 'none', borderBottom: '2px solid #333', outline: 'none' }} />
                            </div>

                            <div className="input-box" style={{ position: 'relative', width: '100%', marginTop: '10px' }}>
                                <input type="email" required="true" name="" placeholder="Email" style={{ width: '100%', padding: '5px 0', fontSize: '16px', margin: '10px 0', border: 'none', borderBottom: '2px solid #333', outline: 'none' }} />
                            </div>

                            <div className="input-box" style={{ position: 'relative', width: '100%', marginTop: '10px' }}>
                                <textarea required="true" name="" placeholder="Type Your Message Here...." style={{ width: '100%', padding: '5px 0', fontSize: '16px', margin: '10px 0', border: 'none', borderBottom: '2px solid #333', outline: 'none', resize: 'none' }}></textarea>
                            </div>

                            <div className="input-box" style={{ position: 'relative', width: '100%', marginTop: '10px' }}>
                                <input type="submit" value="Send" name="" style={{ width: '100%', background: '#ffa5004f', border: 'none', cursor: 'pointer', padding: '10px', fontSize: '18px', border: '1px solid black',borderRadius:'3px', transition: '0.5s' }} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Help