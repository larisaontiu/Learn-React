import React, { FC } from 'react'
import {css} from 'linaria'
import Button from "./Button"
import logo from './assets/logo.png'


const headerClassName = css`
    background-color: white;
    text-align: right;
    padding: 30px 140px;
    position: relative;
    height: 84px;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    &:after {
        clear: both;
        display: block;
        content: ' ';
    }
`

const logoClassName = css`
    font-family: 'roboto';
    font-weight: bold;
    font-size: 24px;
    float: left;
`

const toolbarClassName = css`
    float: right;
`


const Header:FC = () => (
    <div className={headerClassName}>
        <div className={logoClassName}>l.m.on.</div>
        <div className={toolbarClassName}>
            <Button href="#">Services</Button>
            <Button href="#">Projects</Button>
            <Button href="#">Contact</Button>
        </div>
        
    </div>

    
)



export default Header 