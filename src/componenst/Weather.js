import React, { useState } from 'react'
import styled from 'styled-components'
import { Form } from 'semantic-ui-react'
import CardTemp from './CardTemp'
import SegmentTemp from './SegmentTemp'

const Container = styled.div`
  width:50vw;
  margin-left:20rem;
`
const WrapperContent = styled.div`
 height: auto;
 width: 100vw;
 display: flex;

`
function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: ""
  });

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "" || form.country === "") {
      alert("Add value");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=67a2f61c4d2f058299ed454b400c5b29`
      )
        .then((res) => res.json(res))
        .then((data) => setWeather([data]))
    }

  }
  const handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  console.log(form.city, form.country);
  return (
    <Container>
      <Form onSubmit={weatherData}>
        <Form.Group>
          <Form.Input
            type="text"
            name="city"
            onChange={(e) => handleInputChange(e)}
            placeholder="city"
          />
          <Form.Input
            type="text"
            name="country"
            onChange={(e) => handleInputChange(e)}
            placeholder="country"
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
      <WrapperContent>
        {weather != undefined ? console.log(weather[0]) : console.log('not fetch')}
        {weather != undefined ? (

          <CardTemp data={weather[0]} />
        ) : null}
        <SegmentTemp />
      </WrapperContent>
    </Container>
  )

}
export default Weather