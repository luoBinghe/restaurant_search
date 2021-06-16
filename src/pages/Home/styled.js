import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    
`

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
export const Logo = styled.h1`
    margin-bottom: 15px;
    font-size: 25px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 800;
    font-family: 'Roboto, sans-serif';
`