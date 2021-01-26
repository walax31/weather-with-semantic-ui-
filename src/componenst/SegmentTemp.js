import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { WiNightPartlyCloudy } from 'react-icons/wi'
import Moment from 'react-moment';
import moment from 'moment';

const Container = styled.div`
  margin-left:2rem;
`
const Content = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;

`
const Date = styled.div`
  display:flex;
  flex-direction:column;
  margin-right:3.5rem;
  p{
    font-size:0.8rem;
    text-align: center;
  }
`
const Temp = styled.div`
 margin-left:3.5rem;
 p{
  font-size:0.8rem;
  text-align: center;
}
`
// const WrapperSegmant = styled.(Segment)`
// `
function SegmentTemp() {
  const start = moment([2021, 1, 25]).add(2, 'days')
  const month = moment().add(1, 'days').format('MMM D')
  return (
    <Container>
      <Segment inverted color='blue'>
        <Content>
          <Date>
            <Moment Date={start} format='dddd' />
            <Moment Date={month} format='MMM D' />
          </Date>
          <Icon size='big'><WiNightPartlyCloudy /></Icon>
          <Temp>22°C</Temp>
        </Content>
      </Segment>

      <Segment inverted color='blue'>
        <Content>
          <Date>
            <p>WED</p>
            <p>June 18</p>
          </Date>
          <Icon size='big'><WiNightPartlyCloudy /></Icon>
          <Temp>22°C</Temp>
        </Content>
      </Segment>

      <Segment inverted color='blue'>
        <Content>
          <Date>
            <p>WED</p>
            <p>June 18</p>
          </Date>
          <Icon size='big'><WiNightPartlyCloudy /></Icon>
          <Temp>22°C</Temp>
        </Content>
      </Segment>

      <Segment inverted color='blue'>
        <Content>
          <Date>
            <p>WED</p>
            <p>June 18</p>
          </Date>
          <Icon size='big'><WiNightPartlyCloudy /></Icon>
          <Temp>22°C</Temp>
        </Content>
      </Segment>


    </Container>
  )
}
export default SegmentTemp