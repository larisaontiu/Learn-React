import React, { FC } from 'react'
import classnames from 'classnames'
import './Button.css'
interface ButtonProps {
    children: string
    href: string
    banner?: boolean;
}

const Button: FC<ButtonProps> = (props:ButtonProps) => (
    <a href={props.href} className={classnames(
        'button',
        props.banner ? 'bannerButton' : false
    )}>{props.children}</a>
)

export default Button

