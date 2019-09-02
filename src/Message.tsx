import React, { FC } from 'react'
import classnames from 'classnames'
import './Message.css'

interface MessageProps {
    children: string
    invert?: boolean
    size?: 'small' | 'large'
    bold?: boolean
    paddinglarge?: boolean
}

const Message: FC<MessageProps> = (props:MessageProps) => (
    <div className={classnames(
        "Message", 
        props.invert ? "invert" : false, 
        props.size === 'large' ? 'large' : false, 
        props.bold ? "bold" : false,
        props.paddinglarge ? "largepadding" : false
    )}>
        {props.children}
    </div>
)

Message.defaultProps = {
    invert: false,
    size: 'small'
}

export default Message