import React from 'react'
import { Collapse } from 'antd';
import '../css/faq.css'

const { Panel } = Collapse;


export const Faq = () => {
    return (
        <div className = 'cont-faq' id = 'faq'>
            <div className = 'title'>
                <p>FREQUENTLY ASK QUESTION</p>
                <h3>Want to ask something from us?</h3>
            </div>
            <div className = 'collapse'> 
            <Collapse defaultActiveKey={['1']}>
                <Panel header="How to contact with Customer Service?" key="1">
                    <p className = 'p-collapse'>Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.</p>
                </Panel>
                <Panel header="App installation failed, how to update system information?" key="2">
                    <p className = 'p-collapse'>Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .</p>
                </Panel>
                <Panel header="Website reponse taking time, how to improve?" key="3">
                     <p className = 'p-collapse'>At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .</p>
                </Panel>
                <Panel header="New update fixed all bug and issues?" key="4">
                     <p className = 'p-collapse'>We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .</p>
                </Panel>
            </Collapse>
            </div>
            <div>
                <button className = 'btn'>EXPLORE FORUM</button>
            </div>
        </div>
    )
}
