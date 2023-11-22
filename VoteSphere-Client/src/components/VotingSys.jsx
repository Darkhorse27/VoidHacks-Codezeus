import React from 'react'
import "../Stylesheets/VotingSys.css"

const VotingSys = () => {
    return (
        <>

            <div class="container">
                <h1 id="text"><span id="orange">Your Voice,</span> <span id="white">Your Vote,</span> <span id="green">Your Power.</span></h1>
                <div class="card-container">

                    <div class="card">
                        <img src="./Assets/bjp.jpg" alt="John" style={{ width: "100%" }} />
                        <h1>Narendra Modi</h1>
                        <p class="title">Bhartiya Janta Party</p>
                        <img id="symbol"
                            src="./Assets/bjplogo.webp"
                            alt="" />
                        <p><button>VOTE</button></p>
                    </div>

                    <div class="card">
                        <img src="./Assets/congress.jpg" alt="John" style={{ width: "100%" }} />
                        <h1>Rahul Gandhi</h1>
                        <p class="title">Indian National Congress</p>
                        <img id="symbol"
                            src="./Assets/congresslogo.svg"
                            alt="" />
                        <p><button>VOTE</button></p>
                    </div>

                    <div class="card">
                        <img src="./Assets/bsp.PNG" alt="John" style={{ width: "100%" }} />
                        <h1>Kumari Mayavati</h1>
                        <p class="title">Bahujan Samaj Party</p>
                        <img id="symbol"
                            src="./Assets/bsplogo.jpg"
                            alt="" />
                        <p><button>VOTE</button></p>
                    </div>

                    <div class="card">
                        <img src="https://pbs.twimg.com/media/FtBHx8UaAAA-j0P.jpg" alt="John" style={{ width: "100%" }} />
                        <h1>Narendra Modi</h1>
                        <p class="title">Bhartiya Janta Party</p>
                        <img id="symbol"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png"
                            alt="" />
                        <p><button>VOTE</button></p>
                    </div>

                    <div class="card">
                        <img src="https://pbs.twimg.com/media/FtBHx8UaAAA-j0P.jpg" alt="John" style={{ width: "100%" }} />
                        <h1>Narendra Modi</h1>
                        <p class="title">Bhartiya Janta Party</p>
                        <img id="symbol"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png"
                            alt="" />
                        <p><button>VOTE</button></p>
                    </div>

                    <div class="card">
                        <img src="https://pbs.twimg.com/media/FtBHx8UaAAA-j0P.jpg" alt="John" style={{ width: "100%" }} />
                        <h1>Narendra Modi</h1>
                        <p class="title">Bhartiya Janta Party</p>
                        <img id="symbol"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png"
                            alt="" />
                        <p><button>VOTE</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VotingSys