import React from 'react'
import { Link } from 'react-router-dom'
const WrongRoute = ()=>{
    return(
        <div style={{fontFamily: "inter", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div>
                <h3>TicketWave</h3>
                <h5>Page does not exist</h5>
                <p>Return <Link to={"/"}>Home</Link></p>
            </div>
        </div>
    )
}
export default WrongRoute