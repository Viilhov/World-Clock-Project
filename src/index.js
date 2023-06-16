function updateTime() {
  //Los Angeles//
  let losangelesElement = document.querySelector("#los-angeles");
  if (losangelesElement) {
    let losangelesDateElement = losangelesElement.querySelector(".date");
    let losangelesTimeElement = losangelesElement.querySelector(".time");
    losangelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    losangelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("H:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let allCitiesElement = document.querySelector("#all-cities");
  allCitiesElement.innerHTML = ` <div class="cities">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}
                    </div>
                </div>
                <div class="time">${cityTime.format("H:mm:ss")}
                    <small>${cityTime.format("A")}</small>
                </div>
            </div>`;
}

setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
