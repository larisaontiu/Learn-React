import React, {FC} from 'react'
import {styled} from 'linaria/react'

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
    <Container>
        <Text>
            Hello world
        </Text>
    </Container>
)

export default CssInJs