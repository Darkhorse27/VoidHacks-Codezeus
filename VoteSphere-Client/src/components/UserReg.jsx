import React from 'react'

const UserReg = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff' }} className="main-block">
                <form action="/" style={{ width: '100%', padding: '20px' }}>
                    <h1 style={{ margin: '0', fontWeight: '400' }}>Regitration Form</h1>
                    <fieldset style={{ border: 'none', borderTop: '1px solid #8ebf42' }}>
                        <legend>
                            <h3 style={{ margin: '12px 0', color: '#8ebf42' }}>Account Details</h3>
                        </legend>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} className="account-details">
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
                                <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>Create Username <b>@</b></label>
                                <input type="text" name="name" required style={{ padding: '5px', verticalAlign: 'middle', width: '60%' }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
                                <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>Password*</label>
                                <input type="password" name="name" required style={{ padding: '5px', verticalAlign: 'middle', width: '60%' }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
                                <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>email*</label>
                                <input type="text" name="name" required style={{ padding: '5px', verticalAlign: 'middle', width: '60%' }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
                                <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>Repeat password*</label>
                                <input type="password" name="name" required style={{ padding: '5px', verticalAlign: 'middle', width: '60%' }} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset style={{ border: 'none', borderTop: '1px solid #8ebf42' }}>
                        <legend>
                            <h3 style={{ margin: '12px 0', color: '#8ebf42' }}>Personal Details</h3>
                        </legend>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} className="personal-details">
                            <div style={{ width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
                                    <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>Full Name*</label>
                                    <input type="text" name="name" required style={{ padding: '5px', verticalAlign: 'middle', width: '60%' }} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
                                    <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>Phone*</label>
                                    <input type="text" name="name" required style={{ padding: '5px', verticalAlign: 'middle', width: '60%' }} />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>State*</label>
                                    <select style={{ width: '60%' }}>
                                        <option value="">Select your state</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
                                    <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>District</label>
                                    <input type="text" name="name" style={{ padding: '5px', verticalAlign: 'middle', width: '60%' }} />
                                </div>
                            </div>
                            <div style={{ width: '100%' }}>
                                <div style={{ width: '100%' }}>
                                    <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>Gender*</label>
                                    <div style={{ display: 'flex', alignItems: 'center' }} className="gender">
                                        <input type="radio" value="none" id="male" name="gender" required />
                                        <label htmlFor="male" className="radio">Male</label>
                                        <input type="radio" value="none" id="female" name="gender" required />
                                        <label htmlFor="female" className="radio">Female</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }} className="birthdate">
                                    <label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle', width: '40%' }}>Birthdate*</label>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }} className="bdate-block">
                                        <input type="text" name="name" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFileSm" className="form-label">Upload Aadhar Card</label>
                                    <input className="form-control form-control-sm" id="formFileSm" type="file" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFileSm" className="form-label">Upload Voter Id Card</label>
                                    <input className="form-control form-control-sm" id="formFileSm" type="file" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" to="/" style={{ width: '100%', padding: '10px 0', margin: '10px auto', borderRadius: '5px', border: 'none', background: '#8ebf42', fontSize: '14px', fontWeight: '600', color: '#fff' }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default UserReg