import React from 'react';
import "./Navbar.css";
import Voice from '../voice/Voice';



const Navbar = () => {
  return (
    <>
    <div className='navbar'>
         <h3 className="logo">
          Ai.<span>TALK</span>
        </h3>
        <div className="signup">
          {/* <Link to="/Signup"><button>Signup</button></Link> */}
          <button>Signup</button>
        </div>
    </div>
    <Voice />
    </>
  )
}

export default Navbar;