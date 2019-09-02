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
        <div className='projectSection'></div>
    </div>    
)




export default Project 