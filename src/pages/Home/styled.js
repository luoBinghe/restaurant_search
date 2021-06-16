import styled from 'styled-components'

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 350px;
    height: 100vh;
    overflow-y: auto;
`

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 16px;
`