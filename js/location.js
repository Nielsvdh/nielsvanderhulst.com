/*deze button unhides de map wanneer er op geklikt wordt*/
const button = document.getElementById('button');
const div = document.getElementById('myDiv');

button.addEventListener('click', () => {
  if (div.style.display === 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});
console.log("TEST: location.js");

/* -------------------- map --------------------  */

/*hier maak ik de map aan in de "map" div*/
var map = L.map('map').setView([51.505, -0.09], 13);;


/*hier worden de tiles toegevoegd*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.locate({
  setView: true,
  maxZoom: 20
});

function onLocationFound(e) {
  var radius = e.accuracy;

/*hier maak ik een marker op de map aan op jou device locatie die aangeeft hoever je van dit punt verwijdert bent*/
  L.marker(e.latlng).addTo(map)
  .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
  alert(e.message);
}

/*hier zet ik een marker op de locatie van Someren en voeg ik een cirkel toe daar omheen*/
var marker = L.marker([51.3850, 5.7124]).addTo(map);

var circle = L.circle([51.3850, 5.7124], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3,
  radius: 1500
}).addTo(map);

map.on('locationerror', onLocationError);
