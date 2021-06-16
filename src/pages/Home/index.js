import React, { useState } from 'react'
import TextField, { Input } from '@material/react-text-field'
import { Container, Search, Logo, Wrapper } from './styled'
import MaterialIcon from '@material/react-material-icon'

//TO DO COLOCAR UMA IMAGEM PRA LOGO
const Home = () => {
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo>LOGO</Logo>
                    <TextField 
                        label="pesquisar" 
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                        > 
                        <Input 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </TextField>
                </Search>
            </Container>
        </Wrapper>
    )
}

export default Home