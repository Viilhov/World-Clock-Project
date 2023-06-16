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
  //Sydney//
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("H:mm:ss [<small>]A[</small>]");
  }
  //Tokyo//
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("H:mm:ss [<small>]A[</small>]");
  }
  //Paris//
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Tokyo")
      .format("H:mm:ss [<small>]A[</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
            </div>
            <a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
