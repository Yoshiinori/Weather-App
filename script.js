const apiKey = '7f90da554b9e38ab6f360f884e8542e3'

const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const tempBtn = document.querySelector('.temp-btn')

const getLocation = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      city.innerHTML = data.name;
      let celcius = data.main.temp + ' C';
      let farenheight = data.main.temp * 9 / 5 + 32 + ' F';
      temp.innerHTML = celcius;
    });
}

let displayTemp = 'c';

tempBtn.addEventListener('click', () => {
  if (displayTemp = 'c') {
    temp.innerHTML = farenheight;
    tempBtn.innerHTML = 'Switch to Farenheight'
    let displayTemp = 'f';
  } else if (displayTemp = 'f') {
    temp.innerHTML = celcius;
    tempBtn.innerHTML = 'Switch to Celcius';
    let displayTemp = 'c';
  }
});

const noLocation = (err) => {
  console.error(err)
}

navigator.geolocation.getCurrentPosition(getLocation, noLocation)
