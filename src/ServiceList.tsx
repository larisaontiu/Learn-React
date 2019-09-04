import React, { FC, ReactNode } from 'react'
import './ServiceList.css'
import Button from './Button'

interface ServiceListProps {
    imageUrl: string
    imageAlt: string
    title: string
    description: ReactNode
    children: ReactNode
}

const ServiceList: FC<ServiceListProps> = (props: ServiceListProps) => (
    <div className="serviceList">
        <div className="serviceListIcon" >
            <img src={props.imageUrl} alt={props.imageAlt} />
        </div>
        <h2>{props.title}</h2>
        <p className='text1'>{props.description}</p>
        <div className="serviceItems">
            <ul className="serviceContainer">
                {React.Children.map(props.children, (child, index) => (
                    <li key={index} className="serviceItem">
                        {child}
                    </li>
                ))}
            </ul>
        </div>
        
        
        
    </div>    
)

export default ServiceList