import React from 'react'
import "../Stylesheets/Model.css"
import modelimg from "../assets/model.jpg"

const Model = () => {
    return (
        <div>
        <br /><br />
        <section>
            <div className="YourUniqueModelContainerClassName container">
                <div className="YourUniqueBestSellerClassName">
                    <div className="YourUniqueModelClassName">
                        <img src={modelimg} alt="" />
                    </div>
                    <div>
                        <h3>Empower <br /><span className="YourUniqueTextStrokeClassName" style={{color:"transparent",webkitTextStroke:"1.2px black"}}> Democracy </span> <br /> VoteSphere – Your <span className="YourUniqueTextStrokeClassName" style={{color:"transparent",webkitTextStroke:"1.2px black"}}> Voice</span> Matter</h3>
                    </div>
                </div>
            </div>
        </section>
        <br /><br /><br /><br /><br />
    </div>
    )
}

export default Model