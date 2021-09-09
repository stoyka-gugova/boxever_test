<script>
const BookFlightURL = "https://www.flysas.com/en/";
async function getBookFlightURL(url){
const response = await fetch('url', {mode: 'cors'});
var data = await response.text();
/*var data = await response.json();*/
var FlightDetails = document.getElementById('cep-search');
console.log(FlightDetails);
var FlightForm = document.querySelector(".sas-form-flex");
console.log(FlightForm);
var from = document.getElementById("cep-origin").value;
console.log(from);
var to = document.getElementById("cep-destination").value;
console.log(to);
var departureDate = document.getElementById("cep-datepicker").getAttribute("outdate");
console.log(departureDate);
var returnDate = document.getElementById("cep-datepicker").getAttribute("indate");
console.log(returnDate);
let flight = {};
flight.from = from;
flight.to = to;
flight.departureDate = departureDate;
flight.returnDate = returnDate;
console.log(flight);
}
getBookFlightURL (BookFlightURL);
/*post data at api.capturedata.com */
fetch('https://api.capturedata.com/', {
  mode: 'no-cors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(flight)
});
let result = await response.json();
alert(result.message);
</script>