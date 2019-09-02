import React, { FC } from 'react'
import './Project.css'

interface ProjectProps {
    imageUrl: string
    imageAlt: string
    title: string
    children: string
}

const Project: FC<ProjectProps> = (props: ProjectProps) => (
    <div className="project">
        <div className="projectIcon" >
            <img src={props.imageUrl} alt={props.imageAlt} />
        </div>
        <h1>{props.title}</h1>
        <p className='text'>{props.children}</p>
        
            <ul className="flex-container">
                <li className="flex-item"></li>
                <li className="flex-item"></li>
                <li className="flex-item"></li>
                <li className="flex-item"></li>
            </ul>

        
    </div>    
)




export default Project 