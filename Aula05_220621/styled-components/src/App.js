import React from 'react';
import { Titulo, SubTitulo, DivPai } from "./styles"
import { Button, ButtonUm, ButtonDois } from "./styles/buttons-styles";


function App() {
  return (
    <div className="App">

      <center>
        <Button primary={true}>Meu botão</Button>
        <Button primary={false}>Meu botão</Button>
        <br />

        <DivPai>
          <div>
            <div></div>
          </div>
        </DivPai>

        <Titulo fontSize={30} cor={"green"}>Hello World!!!
          <span>Tudo bem?</span>
        </Titulo>
        <br />

        <SubTitulo cor={"rgb(55,178,239)"}>
          Sub-titulo
        </SubTitulo>

        <ButtonUm >Try for free</ButtonUm>
        <br />
        <br />

        <ButtonDois>Know more</ButtonDois>
      </center>
      
    </div>
  );
}

export default App;
