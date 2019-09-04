import React, { FC, ReactNode } from 'react'
import './Service.css'
import Button from './Button'

interface ServiceProps {
    imageUrl: string
    title: string
    actionUrl: string
    children: ReactNode
}

const Service: FC<ServiceProps> = (props: ServiceProps) => (
    <div className="service">
        <div className={'serviceImage'} style={{ backgroundImage: 'url(' + props.imageUrl + ')' }} />
        <h3>{props.title}</h3>
        <p>{props.children}</p>

        
    </div>
)

export default Service 