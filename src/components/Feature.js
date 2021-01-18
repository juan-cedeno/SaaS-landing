import React from 'react'
import f1 from '../assets/f1.png'
import f2 from '../assets/f2.png'
import f3 from '../assets/f3.png'
import f4 from '../assets/f4.png'
import f5 from '../assets/f5.png'
import f6 from '../assets/f6.png'

import '../css/feature.css' 

export const Feature = () => {
    return (
    <>
        <div className = 'cont-feature' id = 'feature'>

            <div className = 'title'>
                <p>FEATURES</p>
                <h3>Why you choose Our Plugin</h3>
            </div>

            <div className = 'feature'>
                  <div className = 'items'>
                      <div className = 'img-feature'>
                        <img src = {f1} alt = 'f2'/>
                      </div>
                      <div className = 'letter-feature'>
                          <h4>App Development</h4>
                          <p>Get your proof tests delivered home collect a sample from the news get design.</p>
                      </div>
                  </div>

                  <div className = 'items'>
                      <div className = 'img-feature'>
                        <img src = {f2} alt = 'f2'/>
                      </div>
                      <div className = 'letter-feature'>
                          <h4>10 Times Award</h4>
                          <p>Get your proof tests delivered home collect a sample from the news get design.</p>
                      </div>
                  </div>

                  <div className = 'items'>
                      <div className = 'img-feature'>
                        <img src = {f3} alt = 'f3'/>
                      </div>
                      <div className = 'letter-feature'>
                          <h4>Cloud Storage</h4>
                          <p>Get your proof tests delivered home collect a sample from the news get design.</p>
                      </div>
                  </div>
            </div>

            <div className = 'feature'>
            <div className = 'items'>
                      <div className = 'img-feature'>
                        <img src = {f4} alt = 'f4'/>
                      </div>
                      <div className = 'letter-feature'>
                          <h4>Customization</h4>
                          <p>Get your proof tests delivered home collect a sample from the news get design.</p>
                      </div>
                  </div>

                  <div className = 'items'>
                      <div className = 'img-feature'>
                        <img src = {f5} alt = 'f5'/>
                      </div>
                      <div className = 'letter-feature'>
                          <h4>UX Planning</h4>
                          <p>Get your proof tests delivered home collect a sample from the news get design.</p>
                      </div>
                  </div>

                  <div className = 'items'>
                      <div className = 'img-feature'>
                        <img src = {f6} alt = 'f6'/>
                      </div>
                      <div className = 'letter-feature'>
                          <h4>Customer Support</h4>
                          <p>Get your proof tests delivered home collect a sample from the news get design.</p>
                      </div>
                  </div>
            </div>

        </div>
    </>
    )
}
