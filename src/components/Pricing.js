import React from 'react'
import i18nj from 'i18n-js'
import '../css/pricing.css'
import Bounce from 'react-reveal/Bounce';

export const Pricing = () => {
    return (
        <>
            <div className = 'cont-pricing' id = 'pricing'>
                <div className = 'title'>
                    <p>PRICING PLAN</p>
                    <h3>What’s our monthly pricing subscription</h3>
                </div>
                <Bounce>
                <div className = 'pricing'>

                    <div className = 'card-pricing'>
                        <p className ='title-card'>Basic Account</p>
                        <p className = 'desc-card'>For small team or group who need to build webside</p>

                        <p className = 'price-card'>{i18nj.toCurrency(0)}</p>
                        <p className = 'mont-card'>Only for first month</p>

                        <button className = 'btn-card'>CREATE FREE ACCOUNT</button>

                        <div className = 'benefits-card'>

                            <p><i className="fas fa-check"></i> Drag & Drop Builder</p>
                            <p><i className="fas fa-check"></i> 1,000s of Templates Ready</p>
                            <p><i className="fas fa-check"></i> Blog Tools</p>
                            <p><i className="fas fa-check"></i> eCommerce Store </p>
                            <p><i className="fas fa-check"></i> 30+ Webmaster Tools</p>

                        </div>
                    </div>

                    <div className = 'card-pricing'>
                        <p className ='title-card'>Business Account</p>
                        <p className = 'desc-card'>For Mediums teams or group who need to build website </p>

                        <p className = 'price-card'>{i18nj.toCurrency(9.87)}</p>
                        <p className = 'mont-card'>Only for first month</p>

                        <button className = 'btn-card'>CREATE FREE ACCOUNT</button>

                        <div className = 'benefits-card'>

                            <p><i className="fas fa-check"></i> Drag & Drop Builder</p>
                            <p><i className="fas fa-check"></i> 1,000s of Templates Ready</p>
                            <p><i className="fas fa-check"></i> Blog Tools</p>
                            <p><i className="fas fa-check"></i> eCommerce Store </p>
                            <p><i className="fas fa-check"></i> 30+ Webmaster Tools</p>

                        </div>
                    </div>

                    <div className = 'card-pricing'>
                        <p className ='title-card'>Premium Account</p>
                        <p className = 'desc-card'>For Large teams or group who need to build website </p>

                        <p className = 'price-card'>{i18nj.toCurrency(12.98)}</p>
                        <p className = 'mont-card'>Only for first month</p>

                        <button className = 'btn-card'>CREATE FREE ACCOUNT</button>

                        <div className = 'benefits-card'>

                            <p><i className="fas fa-check"></i> Drag & Drop Builder</p>
                            <p><i className="fas fa-check"></i> 1,000s of Templates Ready</p>
                            <p><i className="fas fa-check"></i> Blog Tools</p>
                            <p><i className="fas fa-check"></i> eCommerce Store </p>
                            <p><i className="fas fa-check"></i> 30+ Webmaster Tools</p>

                        </div>
                    </div>

                </div>
                </Bounce>
            </div>
        </>
    )
}
