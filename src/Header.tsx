import React, { FC } from 'react'
import './Header.css'
import Button from "./Button"
import logo from './assets/logo.png'


const Header:FC = () => (
    <div className="header">
        <div className='logo'>l.m.on.</div>
        <div className='toolbar'>
            <Button href="#">About</Button>
            <Button href="#">Projects</Button>
            <Button href="#">Contact</Button>
        </div>
        
    </div>

    
)



export default Header 