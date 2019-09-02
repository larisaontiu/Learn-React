import React, {FC} from 'react'
import {css} from 'linaria'

const styles = {
    default: css`
        height: 100vh;
        background-color: red;

        &:hover {
            background-color: green;
        }
    `,

    text: css`
        color: black;
    `
    
}

const CssInJs: FC = () => (
    <div className={styles.default}>
        <p className={styles.text}>
            Hello world
        </p>
    </div>
)

export default CssInJs