import React from 'react'

import service1 from '../assets/service1.svg'
import service2 from '../assets/service2.svg'
import service3 from '../assets/service3.svg'

import '../css/service.css'

export const Services = () => {
    return (
        <>
            <div className = 'cont-service'>

                <div className = 'title-service'>
                    <p>WORKING PROCESS</p>
                    <label>Our Featured Service that We Provide</label>
                </div>

                <div className = 'services'>
                    <div className = 'service-item'>
                        <img src = {service1} alt = 'service1'/>
                        <p>Download our app</p>
                        <label>Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.</label>
                    </div>
                    <div className = 'service-item'>
                        <img src = {service2} alt = 'service2'/>
                        <p>Create a free account</p>
                        <label>Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.</label>
                    </div>
                    <div className = 'service-item'>
                        <img src = {service3} alt ='service'/>
                        <p>Now Start your journey</p> 
                        <label>Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.</label>
                    </div>
                </div>
            </div>
        </>
    )
}
