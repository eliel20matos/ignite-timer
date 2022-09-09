import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    //sempre que uso essa sintaxe, o styled
    // components vai enviar todas as props, como se fosse uma função
    ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
        `
    }}
`