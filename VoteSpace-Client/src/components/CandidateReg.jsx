import React from 'react'
const CandidateReg = () => {
    return (
        <>
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
                <form action="/" style={{ width: '100%', padding: '20px' }}>
                    <h1 style={{ margin: '0', fontWeight: '400' }}>Candidate Registration Form</h1>
                    <fieldset style={{ border: 'none', borderTop: '1px solid #8ebf42', margin: '0 15px' }}>
                        <legend>
                            <h3 style={{ margin: '12px 0', color: '#8ebf42' }}>Personal Details</h3>
                        </legend>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '50%' }}>
                                <div><label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle' }}>Full Name</label><input type="text" name="name" required /></div>
                                <div><label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle' }}>Party</label><input type="text" name="name" required /></div>
                                <div><label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle' }}>Position</label><input type="text" name="name" /></div>
                                <div><label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle' }}>Qualification</label><input type="text" name="name" /></div>
                            </div>
                            <div style={{ width: '50%' }}>
                                <div><label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle' }}>Location</label><input type="text" name="name" /></div>
                                <div><label style={{ padding: '0 5px', textAlign: 'right', verticalAlign: 'middle' }}>Networth</label><input type="number" name="name" /></div>
                                <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.2em' }}>
                                    <label style={{ textAlign: 'right', verticalAlign: 'middle' }}>Upload Photo :</label><input type="file" name="" />
                                </div>
                                <div style={{ marginLeft: '20em' }}>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <label style={{ textAlign: 'right', verticalAlign: 'middle' }}>Date</label>
                                        <select className="day" required style={{ width: '15vw' }}>
                                            <option value="">Date</option>
                                            <option value="">Date</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                        <select className="year" required style={{ width: '15vw', verticalAlign: 'unset' }}>
                                            <option value="2023">2023</option>
                                            <option value="">Month</option>
                                            <option value="">Month</option>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </select>
                                        <select class="year" required>
                                            <option value="2023">2023</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </fieldset>
                    <button type="submit" href="/" style={{ width: '100%', padding: '10px 0', margin: '10px auto', borderRadius: '5px', border: 'none', background: '#8ebf42', fontSize: '14px', fontWeight: '600', color: '#fff' }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CandidateReg