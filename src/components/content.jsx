// eslint-disable-next-line no-unused-vars
import React from "react"
import IMAGES from "../images/all-images"

export default function Content(){
    return (
        <article className='react-facts'>
            <h1 className='react-facts-heading'>Fun facts about React</h1>
            <div className='react-facts-content'>
                <ul className='react-facts-list'>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img src={IMAGES.image2} className='react-facts-img' alt='react-facts-img' />
            </div>
        </article>
    )
}