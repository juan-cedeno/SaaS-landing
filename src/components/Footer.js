import React from 'react'

import logo from '../assets/logo.png'
import '../css/footer.css'

export const Footer = () => {
    return (
    <div className = 'cont-footer'>
            <div className = 'img-footer'>
                <a href = '#home'>
                     <img src = {logo} alt = 'logo'/>
                </a>

                <a href = 'https://github.com/juan-cedeno' target = '_blank' rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href = 'https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/' target = '_blank' rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        <div className = 'footer-items'>

            <div>
                <h3>About Us</h3>
                <p>Support Center</p>
                <p>Customer Support</p>
                <p>About Us</p>
                <p>Copyright</p>
            </div>

            <div>
                <h3>Our Information</h3>
                <p>Return Policy</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Site Map</p>
                <p>Store Hours</p>
            </div>

            
            <div>
                <h3>My Account</h3>
                <p>Press inquiries</p>
                <p>Privacy Policy</p>
                <p>Social media directories</p>
                <p>Images & B-roll</p>
                <p>Permissions</p>
            </div>
            <div>
                <h3>Policy</h3>
                <p>Press inquiries</p>
                <p>Privacy Policy</p>
                <p>Social media directories</p>
                <p>Images & B-roll</p>
                <p>Permissions</p>
            </div>
        </div>
    </div>
    )
}
