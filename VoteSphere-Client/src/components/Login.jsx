import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%', backgroundColor: 'transparent'}} >
                <div style={{ position: 'relative', width: '400px', height: '450px', background: 'transparent', border: '2px solid black', borderRadius: '10px', backdropFilter: 'blur(15px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="form-box">
                    <div style={{ width: '100%' }} className="form-value">
                        <form action="">
                            <h2 style={{ fontSize: '2em', color:'black', textAlign: 'center' }}>Login</h2>
                            <br /><br />
                            <div style={{ position: 'relative', margin: '0 auto', width: '310px', borderBottom: '2px solid black' }} className="inputbox">
                                <p>VoterID :</p>
                                <ion-icon name="mail-outline" style={{ position: 'absolute', right: '8px', color: '#000000', fontSize: '1.2em', top: '20px' }}></ion-icon>
                                <input type="email" required style={{ width: '100%', height: '50px', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', padding: '0 35px 0 5px', color: '#000000' }} />
                                <label htmlFor="" style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)', color: '#2826267c', fontSize: '1em', pointerEvents: 'none', transition: '0.5s' }}></label>
                            </div>
                            <br />
                            <div style={{ position: 'relative', width: '310px', borderBottom: '2px solid black',margin:'0 auto' }} className="inputbox">
                            <p>Password :</p>
                                <input type="password" required style={{ width: '100%', height: '50px', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', padding: '0 35px 0 5px', color: '#000000' }} />
                                <label htmlFor="" style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)', color: 'black', fontSize: '1em', pointerEvents: 'none', transition: '0.5s' }}></label>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 15px', fontSize: '0.9em', color: '#000000' }} className="forget">
                                <label htmlFor="" style={{ display: 'flex', alignItems: 'center' ,margin:'0 auto'}}>
                                    <Link to="../Forget Form/forget.html" style={{ color: '#000000', textDecoration: 'none' }}>Forgot password?</Link>
                                </label>
                                
                            </div>
                            <br />
                            <button style={{ width: '50%', height: '40px', borderRadius: '40px', background: 'transparent', border: '2px solid black', outline: 'none', cursor: 'pointer', fontSize: '1em', fontWeight: '600',marginLeft:'6em'}}>Log in</button>
                            <div style={{ fontSize: '0.9em', color: '#000000', textAlign: 'center', margin: '25px 0 10px' }} className="register">
                                <p>Don't have an account ? <Link to="/user-registration" style={{ textDecoration: 'none', color: '#000000', fontWeight: '600' }}>Register</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Login