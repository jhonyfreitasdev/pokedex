import styled from "styled-components";

export const Container = styled.div`
    background: url(${props => props.theme.backgroundImage}) center bottom no-repeat ;
    background-size: cover;
    transition: .6s ease-in-out;
    height: 100vh;
`