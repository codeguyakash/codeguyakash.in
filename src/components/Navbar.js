import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <nav>
                    <div id='logo'>
                        CODEGUYAKASH
                    </div>
                    <div id='nav-items'>
                        <ul>
                            <li>Portfolio</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div >
                        <a id='resume-btn' href='../utils/Akash-Resume.pdf' download="Akash-Resume.pdf">RESUME</a>

                    </div>

                </nav>
            </div>
        </>
    )
}

export default Navbar