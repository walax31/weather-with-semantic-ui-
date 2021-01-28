export async function fetchData(){
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=bangkok,th&APPID=7c01b5c083bdfc68185bb5aebfa81d1f`
  )
    .then((res) => res.json(res))
}
