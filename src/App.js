import React from 'react'
import Globalstyle from './componenst/GlobalStyle'
import styled from 'styled-components'
import Weather from './componenst/Weather'


const Container = styled.div`
  height:100vh;
  width: 100vw;
  margin:0;
  display: flex;
  flex-direction: column;
  justify-content:center;
  aling-item:center;
  background-color:#ccf1f5;
`;
function App() {
  return (

    <Container>
      <Weather />
      <Globalstyle />
    </Container>

  )
}

export default App
