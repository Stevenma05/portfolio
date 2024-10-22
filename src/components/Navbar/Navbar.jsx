/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar () {

  const[sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  });


  return (
    <nav id='section' className={`container ${sticky ? 'dark-nav' : ''}`}>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a className="contact" href='#contact'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
