import React from 'react'
import bannerImage from '../assets/banner-image.png'

import '../css/banner.css'
import Slide from 'react-reveal/Slide';
import { Menu } from './Menu'

export const Banner = () => {
    return (
    <>

        <div className = 'cont-banner' id = 'home'>
            <Menu/>
            <div className = 'letter-banner'>
                <div className = 'desc'>
                    <p><span>25% Save </span>for first month trail version</p>
                </div>

                <div className = 'description'>
                    <h3>Ultimate Platform to monitor your best workflow.</h3>
                    <p>For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!</p>
                    <div className = 'btn-video'>
                        <button>free trial</button>
                        <p><i className="fas fa-play"></i> watch video</p>
                    </div>
                </div>
            </div>
            <Slide top>
            <div className = 'img-banner'>
                <img src = {bannerImage} alt = 'bannerImage'/>
            </div>
            </Slide>
        </div>
    </>
    )
}
