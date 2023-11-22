import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='social-list'>
                        <div className='social-items social'>
                            <a href='https://github.com/codeguyakash' target='_blank' >GITHUB</a>
                        </div>
                        <div className='social-items social'>
                            <a href='https://www.linkedin.com/in/codeguyakash/' target='_blank' >LINKEDIN</a>
                        </div>
                        <div className='social-items social'>
                            <a href='https://twitter.com/codeguyakash' target='_blank' >TWITTER</a>
                        </div>
                        <div className='social-items social'>
                            <a href="mailto:codeguyakash@gmail.com" target='_blank' >GMAIL</a>
                        </div>
                    </div>
                    <div id='copyright'>copyright@2023-24 | Made with ❤️ by codeguyakash</div>
                </div>
                <a href='#home' >TOP</a>
            </footer>
        </>
    )
}

export default Footer