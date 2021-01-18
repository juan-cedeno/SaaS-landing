import React, { useState } from 'react'
import logo from '../assets/logo.png'

import '../css/menu.css'

export const Menu = () => {

    const [navbar, setNavbar] = useState(false)

    const showNavbar = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    }
    
    window.addEventListener('scroll' , showNavbar)

    return (
        <>
            <div className = {`${navbar ? 'cont-menu active' : 'cont-menu'}`}>

                <div className = 'cont-img'>
                    <img src = {logo} alt = 'Logo'/>
                </div>

                <div className = {`${navbar ? 'links active-link' : 'links' }`}>
                    <a href = '#home'>Home</a>
                    <a href = '#feature'>Feature</a>
                    <a href = '#pricing'>Pricing</a>
                    <a href ='#faq'>FAQ</a>
                    <button className = 'getstarted'>GET STARTED</button>
                </div>
            </div>
        </>
    )
}
