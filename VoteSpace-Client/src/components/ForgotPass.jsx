import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPass = () => {
    return (
        <>
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%', backgroundColor: '#242523' }}>
                <div className="form-box" style={{ position: 'relative', width: '400px', height: '450px', background: 'transparent', border: '2px solid #8ebf42', borderRadius: '20px', backdropFilter: 'blur(15px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="form-value">
                        <form action="">
                            <h2 style={{ fontSize: '2em', color: '#8cda17', textAlign: 'center' }}>Reset Password</h2>
                            <div className="inputbox" style={{ position: 'relative', margin: '30px 0', width: '310px', borderBottom: '2px solid #8ebf42' }}>
                                <i className='bx bx-envelope' style={{ position: 'absolute', right: '8px', color: '#000000', fontSize: '1.2em', top: '20px' }}></i>
                                <input type="email" required style={{ width: '100%', height: '50px', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', padding: '0 35px 0 5px', color: '#000000' }} />
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox" style={{ position: 'relative', margin: '30px 0', width: '310px', borderBottom: '2px solid #8ebf42' }}>
                                <i className='bx bx-phone' style={{ position: 'absolute', right: '8px', color: '#000000', fontSize: '1.2em', top: '20px' }}></i>
                                <input type="text" required style={{ width: '100%', height: '50px', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', padding: '0 35px 0 5px', color: '#000000' }} />
                                <label htmlFor="">Phone Number</label>
                            </div>
                            <div className="back" style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 15px', fontSize: '0.9em', color: '#000000' }}>
                                <label htmlFor="">
                                    <button>
                                        <Link to="../Login Form/login.html"> <i className='bx bx-arrow-back' style={{ color: '#000000' }}></i> Back </Link>
                                    </button>
                                </label>
                            </div>
                            <button type="submit">Reset Password</button>
                            <div className="register" style={{ fontSize: '0.9em', color: '#000000', textAlign: 'center', margin: '25px 0 10px' }}>
                                <p>Don't have an account? <Link to="../Registration form/registration.html">Register</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPass