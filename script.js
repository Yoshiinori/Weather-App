const apiKey = '7f90da554b9e38ab6f360f884e8542e3'
const endPoint = 'https://api.openweathermap.org/data/2.5/weather'

const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const tempBtn = document.querySelector('.temp-btn')

const getWeather = async ({ coords }) => {
  let lat = coords.latitude;
  let long = coords.longitude;
  let data = await fetch(endPoint + `?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .catch(console.error)
  window.weather = {
    city: data.name,
    selected: 'C',
    units: [
      { type: 'F', value: Math.floor(data.main.temp) },
      { type: 'C', value: Math.floor(data.main.temp * 9 / 5 + 32) }
    ]
  }
  city.innerHTML = data.name;
  temp.innerHTML = `${Math.floor(data.main.temp)} C`;
}

const toggle = () => {
  let { units, selected } = weather;
  if (selected === 'F') {
    temp.innerHTML = `${units.find(u => u.type === 'C').value} C`;
    tempBtn.innerHTML = 'Switch to Farenheight';
    weather.selected = 'C';
  } else if (selected === 'C') {
    temp.innerHTML = `${units.find(u => u.type === 'F').value} F`;
    tempBtn.innerHTML = 'Switch to Celsius';
    weather.selected = 'F';
  }
}

navigator.geolocation.getCurrentPosition(getWeather, console.error)
