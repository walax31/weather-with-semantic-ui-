import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardTemp from './CardTemp'
import SegmentTemp from './SegmentTemp'
// import {fetchData} from '../service/FetchData'

const Container = styled.div`
  width:50vw;
  margin-left:20rem;
`
const WrapperContent = styled.div`
 height: 70vh;
 width: 100vw;
 display: flex;

`
function Weather() {
  // const [weather, setWeather] = useState([]);

  // useEffect(() => {
  //   fetchData().then((data) => setWeather([data]))
  // })

  return (
    <Container>

      {/* <WrapperContent>
        {weather != undefined ? console.log(weather[0]) : console.log('not fetch')}
        {weather != undefined ? (

          <CardTemp data={weather[0]} />
        ) : null}
        <SegmentTemp />
      </WrapperContent> */}

      <WrapperContent>
        <CardTemp />
        <SegmentTemp />
      </WrapperContent>
    </Container>

  )

}
export default Weather