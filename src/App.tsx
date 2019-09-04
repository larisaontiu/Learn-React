import React from 'react'
import Button from './Button'
import Header from './Header'
import Cover from './Cover'
import Service from './Service'
import ServiceList from './ServiceList'
import ProjectList from './ProjectList'
import Project from './Project'
import activityImage from './assets/activity.svg'
import projectImage from './assets/1.jpg'
import project2Image from './assets/2.jpg'
import project3Image from './assets/3.jpg'
import project4Image from './assets/4.jpg'
import archiveImage from './assets/archive.svg'
import webDesignImage from './assets/webDevelopment.svg'
import graphicDesignImage from './assets/graphicDesign.svg'
import logoDesignImage from './assets/logoDesign.svg'
import uxImage from './assets/ux.svg'
import CssInJs from './CssInJs'
import Footer from './Footer'


export default () => (
    <div>
        <Header/>
        <Cover/>
        <ServiceList imageUrl={archiveImage} imageAlt={'ArchiveImage'} title={'Services'} description={
            <>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </>
        }>
            <Service imageUrl={webDesignImage} title={'Web Design/Development'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Service>
            
            <Service imageUrl={graphicDesignImage} title={'Graphic Design'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Service>

            <Service imageUrl={logoDesignImage} title={'Logo Design'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Service>

            <Service imageUrl={uxImage} title={'UI/UX'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Service>
        </ServiceList>

        <ProjectList imageUrl={activityImage} imageAlt={'ActivityImage'} title={'Projects'} description={
            <>
               
            </>
        }>
            <Project imageUrl={projectImage} title={'Lorem Project'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Project>
            
            <Project imageUrl={project2Image} title={'Ipsum Project'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Project>

            <Project imageUrl={project3Image} title={'Consectetur Project'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Project>

            <Project imageUrl={project4Image} title={'Tempor Project'} actionUrl={'#'}>
                Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            </Project>
        </ProjectList>

        <Footer></Footer>

        {/* <CssInJs /> */}
    </div> 
)