import React from 'react'
import Message from './Message'
import Button from './Button'
import Header from './Header'
import Cover from './Cover'
import Project from './Project'
import activityImage from './assets/activity.svg'


export default () => (
    <div>
        <Header/>
        <Cover/>
        <Project imageUrl={activityImage} imageAlt={'ActivityImage'} title={'Projects'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit.
        </Project>
    </div> 
)