import React, {FC} from 'react'
import {css} from 'linaria'
import {styled} from 'linaria/react'

const myCssClass = css`
    color: red;
`

const Text = styled.p`
    color: black;
`

const Container = styled.div`
    height: 100vh;
    background-color: red;

    &:hover {
        background-color: green;
    }
`


const CssInJs: FC = () => (
    <div className={myCssClass}>
        <Text>
            Hello world
        </Text>
    </div>
)

export default CssInJs