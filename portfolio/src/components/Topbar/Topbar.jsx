
import React from 'react'
import './Topbar.css'
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className='topbar' id='topbar'>
      <div className='wrapper'>
       <div className='left'>
       <a href="#intro"  className='logo'>developer.</a>
       <div className='containerItem'>
         <span>0743235319</span>
       </div>
       <div className='containerItem'>
         <span>moishadrack@gmail.com</span>
       </div>
       
       </div>
       
       <div className='right'>
       <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        
         </div>
      </div>
    </div>
  )
}
