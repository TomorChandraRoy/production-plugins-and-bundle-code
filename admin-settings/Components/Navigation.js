import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {


  return (

    <div>
        <ul> 
            <li ><Link to="/about">About</Link></li>
            <li ><Link to="/settings">Settings</Link></li>
        </ul>
    </div>
  )
}
export default Navigation