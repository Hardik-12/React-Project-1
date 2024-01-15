/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"
import IMAGES from "../images/all-images"

export default function Navbar(props){
    return (
        <div className={props.mode == 'dark' ? '' : 'lightN'}>
            <nav className="header-bar">
                <div className="react-logo">
                    <img src={IMAGES.image1} alt='React Image' className='header-img' />
                    <h1>ReactFacts</h1>
                </div>
                <section className="mode">
                    <p className="mode-light">Light</p>
                    <span className="mode-outer-circle" onClick={props.modeChange}>
                        <span className="mode-inner-circle"></span>
                    </span>
                    <p className="mode-dark">Dark</p>
                </section>
            </nav>
        </div>
    )
}