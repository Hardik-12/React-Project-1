// eslint-disable-next-line no-unused-vars
import React from "react"
import IMAGES from "../images/all-images"

export default function Navbar(){
    return (
        <nav className='header-bar'>
            <div className="react-logo">
                <img src={IMAGES.image1} alt='React Image' className='header-img' />
                <h1>ReactFacts</h1>
            </div>
            <p>React Course - Project 1</p>
        </nav>
    )
}