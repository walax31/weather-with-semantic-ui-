import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { IoWaterOutline } from 'react-icons/io5'
import { WiStrongWind, WiRainWind } from 'react-icons/wi'
import Moment from 'react-moment';
import moment from 'moment';


const Text = styled.div`
 display:flex;
 justify-content:space-between;
`
const TextLeft = styled.div`
`
const TextRight = styled.div`
`
const DisplayContent = styled.div`
 display:flex;
 flex-direction: column;

 p{
   font-size:1rem;
 }

`

const AllTemp = styled.div`
 display:flex;
 justify-content:space-between;
`
const MinMax = styled.div`
`
const Temp = styled.div`
`
const TempNow = styled.div`
 display:flex;
 flex-direction: column;
 p{
   font-size:1rem;
   magin-right:5rem;
 }
`
const IconTemp = styled.div`
  margin-left: 1rem;
  height: 10rem;
  width: 10rem;
  display: flex;
  justify-content:center;
  aling-item:center;
  margin-botton:1rem;
  margin-top:-0.5rem;
  
`
const Info = styled.div`
 display:flex;
 jutify-content:center;
 aling-item:center;
 flex-direction: row;
 margin-top:1rem;
 margin-left: 0.8rem;
 margin-bottom:-20px;
 p{
   font-size:0.8rem;
 }
`
// const WrapperContainer = styled(Card)`
//   padding: 2rem;
//   display: flex !important;
//   justify-content: center;
//   background-color:#66FF66;
//   reen;
//   }
// `
function CardTemp(props) {
  
  const {data} = props
  const iconURL= 'http://openweathermap.org/img/wn/'+ `${data?.weather[0].icon}`+ '.png'
  const day = moment().format("dddd");
  const month =moment().format("MMM D"); 
  return(
  <Card color='red'>
    <Card.Content inverted color='blue' >
      <Text>
        <TextLeft><Icon name='location arrow' size='small' /> {data?.name}</TextLeft>
        <TextRight> {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</TextRight>
      </Text>
    </Card.Content>

    <Card.Content>
      <DisplayContent>
        <AllTemp>
          <MinMax>{data !== undefined ? Math.floor(data?.main.temp_min-273.15) : null} °C /
          {data !== undefined ? Math.floor(data?.main.temp_max-273.15) : null} °C</MinMax>
          <TempNow>
            <Temp>{data !== undefined ? Math.floor(data?.main.temp-273.15) : null}  °C</Temp>
            <p>{data?.weather[0].main}</p>
          </TempNow>
        </AllTemp>

        <Icon size='massive'>
          <IconTemp>
            <img src={iconURL}/>
          </IconTemp>
        </Icon>
        <Info>
          <p><IoWaterOutline />{data?.main.humidity}% |</p>
          <p><WiStrongWind />{data?.wind.speed} km/h |</p>
          <p><WiRainWind />2.05mm</p>
        </Info>
      </DisplayContent>
    </Card.Content>

    <Card.Content>
      <Text>
        <TextLeft><Moment Date={day} format='dddd'/></TextLeft>
        <TextRight><Moment Date={month} format='MMM D'/></TextRight>
      </Text>
    </Card.Content>
  </Card>
  )
}

export default CardTemp