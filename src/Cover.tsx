import React, { FC } from 'react'
import './Cover.css'
import coverImage from './assets/cover.jpg'
import Button from './Button'

const Cover: FC = () => (
    <div className="cover" style={{ backgroundImage: 'url(' + coverImage + ')' }}>
        <h1 className="title">A DESIGNER'S PORTFOLIO</h1>
        <p className="subtitle">creative, dedicated, perfectionist</p>
        
        <Button banner={true} href="#">Check Projects</Button>
    </div>
)
export default Cover 