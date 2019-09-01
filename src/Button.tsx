import React, { FC } from 'react'
import './Button.css'
interface ButtonProps {
    children: string
    href: string

}

const Button: FC<ButtonProps> = (props:ButtonProps) => (
    <a href={props.href} className='button'>{props.children}</a>
)

export default Button

