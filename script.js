const apiKey = '7f90da554b9e38ab6f360f884e8542e3'

const city = document.querySelector('.city')
const ctemp = document.querySelector('.ctemp')
const ftemp = document.querySelector('.ftemp')

const getLocation = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      city.innerHTML = data.name;
      ctemp.innerHTML = data.main.temp + ' C';
      ftemp.innerHTML = data.main.temp * 9 / 5 + 32 + ' F';
    });
}

const noLocation = (err) => {
  console.error(err)
}

navigator.geolocation.getCurrentPosition(getLocation, noLocation)
