function updateTime() {
  //Los Angeles//
  let losangelesElement = document.querySelector("#los-angeles");
  let losangelesDateElement = losangelesElement.querySelector(".date");
  let losangelesTimeElement = losangelesElement.querySelector(".time");
  losangelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losangelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("H:mm:ss [<small>]A[</small>]");
}
setInterval(updateTime, 1000);
