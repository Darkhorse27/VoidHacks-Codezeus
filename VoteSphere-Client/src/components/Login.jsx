import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%', backgroundColor: '#242523' }}>
                <div style={{ position: 'relative', width: '400px', height: '450px', background: 'transparent', border: '2px solid #8ebf42', borderRadius: '20px', backdropFilter: 'blur(15px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="form-box">
                    <div style={{ width: '100%' }} className="form-value">
                        <form action="">
                            <h2 style={{ fontSize: '2em', color: '#8cda17', textAlign: 'center' }}>Login</h2>
                            <div style={{ position: 'relative', margin: '30px 0', width: '310px', borderBottom: '2px solid #8ebf42' }} className="inputbox">
                                <ion-icon name="mail-outline" style={{ position: 'absolute', right: '8px', color: '#000000', fontSize: '1.2em', top: '20px' }}></ion-icon>
                                <input type="email" required style={{ width: '100%', height: '50px', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', padding: '0 35px 0 5px', color: '#000000' }} />
                                <label htmlFor="" style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)', color: '#2826267c', fontSize: '1em', pointerEvents: 'none', transition: '0.5s' }}>Email or Username</label>
                            </div>
                            <div style={{ position: 'relative', width: '310px', borderBottom: '2px solid #8ebf42' }} className="inputbox">
                                <input type="password" required style={{ width: '100%', height: '50px', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', padding: '0 35px 0 5px', color: '#000000' }} />
                                <label htmlFor="" style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)', color: '#2826267c', fontSize: '1em', pointerEvents: 'none', transition: '0.5s' }}>Password</label>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 15px', fontSize: '0.9em', color: '#000000' }} className="forget">
                                <label htmlFor="" style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type="checkbox" />Remember me
                                </label>
                                <label htmlFor="" style={{ display: 'flex', alignItems: 'center' }}>
                                    <Link to="../Forget Form/forget.html" style={{ color: '#000000', textDecoration: 'none' }}>Forgot password?</Link>
                                </label>
                            </div>
                            <button style={{ width: '100%', height: '40px', borderRadius: '40px', background: '#ffffff', border: '3px solid #8ebf42', outline: 'none', cursor: 'pointer', fontSize: '1em', fontWeight: '600' }}>Log in</button>
                            <div style={{ fontSize: '0.9em', color: '#000000', textAlign: 'center', margin: '25px 0 10px' }} className="register">
                                <p>Don't have an account ? <Link to="/Registration.jsx" style={{ textDecoration: 'none', color: '#000000', fontWeight: '600' }}>Register</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Login