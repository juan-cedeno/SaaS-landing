import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Fade from 'react-reveal/Fade';

import screen1 from '../assets/screen1.png'
import screen2 from '../assets/screen2.png'

import '../css/screnn.css'

export const Screen = () => {
    return (
        <>
        <div className = 'cont-scren'>

            <div className = 'title title-screen'>
                <p>UPDATE</p>
                <h4>Meet our new updated screen</h4>
            </div>

            <div>
                <Tabs>
                    <TabList>
                        <Tab><i className="fas fa-dollar-sign"></i> Budget Overview</Tab>
                        <Tab><i className="fas fa-tools"></i> Create & Adjust</Tab>
                        <Tab><i className="fas fa-chart-pie"></i> View Report</Tab>
                        <Tab><i className="fas fa-briefcase"></i> Integration</Tab>
                    </TabList>

                    <TabPanel>
                    <Fade>
                        <img className = 'img-screen' src = {screen1} alt = 'screen1'/>
                    </Fade>
                    </TabPanel>

                    <TabPanel>
                        <Fade>
                            <img className = 'img-screen' src = {screen2} alt = 'screen2'/>
                        </Fade>
                    </TabPanel>

                    <TabPanel>
                        <Fade>
                            <img className = 'img-screen' src = {screen1} alt = 'screen1'/>
                        </Fade>
                    </TabPanel>

                    <TabPanel>
                        <Fade>
                            <img className = 'img-screen' src = {screen2} alt = 'screen2'/>
                        </Fade>
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
        </>
    )
}
