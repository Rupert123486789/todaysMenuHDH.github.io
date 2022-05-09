
//함수 본문
function readJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

const API_KEY = "69f25d86500442da959584a8d854b4a5"
const foodImg = document.querySelector('#food-image')


function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name
      const weather = data.weather[0].id
      readJSON("./WeatherAndFood.json", function(text){
        const Data = JSON.parse(text);
        console.log(Data.clear)        
        const clearFood = _.sample(Data.clear)       
        if (String(weather)[0] == '8') {
          console.log(clearFood.url)
          foodImg.src = clearFood.url
        }
        
      });
      // console.log(String(weather)[0])
    })
  }
function onGeoError() {
  alert("날씨 정보를 줄 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)





