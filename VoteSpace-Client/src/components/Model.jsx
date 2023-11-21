import React from 'react'
import "../Stylesheets/Model.css"
import modelimg from "../assets/model.jpg"

const Model = () => {
    return (
        <div>
        <br /><br />
            <section>
                <div class="model container">
                    <div class="best-seller">
                        <div className="model">
                            <img src={modelimg} alt="" />
                        </div>
                        <div>
                            <h3>Empower <br /><span style={{WebkitTextStroke:"1.5px black",color:"transparent"}}> Democracy </span> <br /> VoteSphere – Your <span style={{WebkitTextStroke:"1.5px black",color:"transparent"}}> Voice</span> Matter</h3>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br />
        </div>
    )
}

export default Model