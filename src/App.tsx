import React from 'react'
import Message from './Message'
import Button from './Button'
import Header from './Header'
import Cover from './Cover'
import ProjectList from './ProjectList'
import Project from './Project'
import activityImage from './assets/activity.svg'
import projectImage from './assets/1.jpg'
import project2Image from './assets/2.jpg'
import project3Image from './assets/3.jpg'
import project4Image from './assets/4.jpg'
import CssInJs from './CssInJs'


export default () => (
    <div>
        <Header/>
        <Cover/>
        <ProjectList imageUrl={activityImage} imageAlt={'ActivityImage'} title={'Projects'} description={
            <>
               
            </>
        }>
            <Project imageUrl={projectImage} title={'Project'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Project>
            
            <Project imageUrl={project2Image} title={'Project'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Project>

            <Project imageUrl={project3Image} title={'Project'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Project>

            <Project imageUrl={project4Image} title={'Project'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Project>
        </ProjectList>
        <CssInJs />
    </div> 
)