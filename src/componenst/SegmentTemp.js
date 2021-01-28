import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { WiDayHail,WiDayCloudy,WiDaySunny,WiDayWindy,WiHot,WiFog } from 'react-icons/wi'
import dayjs from 'dayjs'
const Container = styled.div`
  margin-left:2rem;
  width:25vw;
`
const Content = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;

`
const Date = styled.div`
  width:5vw;
  display:flex;
  flex-direction:column;
  margin-right:3rem;
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
  // const start = moment([2021, 1, 25]).add(2, 'days')
  // const month = moment().add(1, 'days').format('MMM D')
  const dayjs = require('dayjs');
  const date1 =dayjs().add(1,'day').format('dddd')
  const date2=dayjs().add(2,'day').format('dddd')
  const date3 =dayjs().add(3,'day').format('dddd')
  const date4 =dayjs().add(4,'day').format('dddd')
  const date5 =dayjs().add(5,'day').format('dddd')
  const date6 =dayjs().add(6,'day').format('dddd')
  
  const month1 =dayjs().add(1,'day').format('MMM D')
  const month2 =dayjs().add(2,'day').format('MMM D')
  const month3 =dayjs().add(3,'day').format('MMM D')
  const month4 =dayjs().add(4,'day').format('MMM D')
  const month5 =dayjs().add(5,'day').format('MMM D')
  const month6 =dayjs().add(6,'day').format('MMM D')
 
  
  return (
    <Container>
      <Segment inverted color='blue'>
        <Content>
          <Date>
           <p>{date1}</p>
           <p>{month1}</p>
          </Date>
          <Icon size='big'><WiDayHail /></Icon>
          <Temp>35°C</Temp>
        </Content>
      </Segment>
      <Segment inverted color='blue'>
        <Content>
          <Date>
           <p>{date2}</p>
           <p>{month2}</p>
          </Date>
          <Icon size='big'><WiDayCloudy /></Icon>
          <Temp>31°C</Temp>
        </Content>
      </Segment>
      <Segment inverted color='blue'>
        <Content>
          <Date>
           <p>{date3}</p>
           <p>{month3}</p>
          </Date>
          <Icon size='big'><WiDaySunny /></Icon>
          <Temp>36°C</Temp>
        </Content>
      </Segment>
      <Segment inverted color='blue'>
        <Content>
          <Date>
           <p>{date4}</p>
           <p>{month4}</p>
          </Date>
          <Icon size='big'><WiDayWindy /></Icon>
          <Temp>32°C</Temp>
        </Content>
      </Segment>
      <Segment inverted color='blue'>
        <Content>
          <Date>
           <p>{date5}</p>
           <p>{month5}</p>
          </Date>
          <Icon size='big'><WiHot /></Icon>
          <Temp>30°C</Temp>
        </Content>
      </Segment>
      <Segment inverted color='blue'>
        <Content>
          <Date>
           <p>{date6}</p>
           <p>{month6}</p>
          </Date>
          <Icon size='big'><WiFog /></Icon>
          <Temp>32°C</Temp>
        </Content>
      </Segment>
    </Container>
  )
}
export default SegmentTemp