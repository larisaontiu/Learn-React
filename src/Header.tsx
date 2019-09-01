import React, { FC } from 'react'
import './Header.css'
import Button from "./Button"

const Header:FC = () => (
    <div className="header">
        <div className='logo'>WEBSITE</div>
        <div className='toolbar'>
            <Button href="#">About</Button>
            <Button href="#">Projects</Button>
            <Button href="#">Contact</Button>
        </div>
        
    </div>
)

export default Header 

