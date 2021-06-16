import React, { useState } from 'react'
import TextField, { Input } from '@material/react-text-field'
import { Container, Search } from './styled'

//TO DO COLOCAR UMA IMAGEM PRA LOGO
const Home = () => {
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    return(
        <Container>
            <Search>
                <h1>LOGO</h1>
                <TextField label="pesquisar" outlined> 
                    <Input 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </TextField>
            </Search>
        </Container>
    )
}

export default Home