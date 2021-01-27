export async function fetchData(){
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=bangkok,th&APPID=3e6863d6a54c5326a9b91c3f2be8244e`
  )
    .then((res) => res.json(res))
}
