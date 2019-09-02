import React, { FC, ReactNode } from 'react'
import './Project.css'
import Button from './Button'

interface ProjectProps {
    imageUrl: string
    title: string
    actionUrl: string
    children: ReactNode
}

const Project: FC<ProjectProps> = (props: ProjectProps) => (
    <div className="project">
        <div className={'projectImage'} style={{ backgroundImage: 'url(' + props.imageUrl + ')' }} />
        <h3>{props.title}</h3>
        <p>{props.children}</p>

        <a href={props.actionUrl}>Read More</a>
    </div>
)

export default Project 