import React from 'react'
import './Navbar.css'

const Navbar=()=> {
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
                        <button id='resume-btn'>RESUME</button>

                    </div>

                </nav>
            </div>
        </>
    )
}

export default Navbar