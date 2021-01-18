import React from 'react'
import feature from '../assets/feature.png'
import Slide from 'react-reveal/Slide';

import '../css/job.css'


export const Job = () => {
    return (
        <>

            <div className = 'cont-job'>

            <Slide left>
                <div className = 'cont-img-job'>
                    <img src = {feature} alt = 'job'/>
                </div>
            </Slide>    

                <div className = 'letter-job'>
                        <p>Make your website growth with next level visitors</p>
                        <label>For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!.</label>
                        <button>HOW IT WORKS</button>
                </div>
            </div>
            
        </>
    )
}
