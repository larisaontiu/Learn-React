import React, { FC, ReactNode } from 'react'
import './ProjectList.css'

interface ProjectListProps {
    imageUrl: string
    imageAlt: string
    title: string
    description: ReactNode
    children: ReactNode
}

const ProjectList: FC<ProjectListProps> = (props: ProjectListProps) => (
    <div className="projectList">
        <div className="projectListIcon" >
            <img src={props.imageUrl} alt={props.imageAlt} />
        </div>
        <h2>{props.title}</h2>
        <p className='text'>{props.description}</p>
        <div className="projectItems">
            <ul className="projectContainer">
                {React.Children.map(props.children, (child, index) => (
                    <li key={index} className="projectItem">
                        {child}
                    </li>
                ))}
            </ul>
        </div>
        
    </div>    
)

export default ProjectList