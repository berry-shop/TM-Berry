var map = L.map('map').setView([50.48337, 30.39276], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myIcon = L.icon({
  iconUrl: '/img/location.svg',
  iconSize: [50, 50],
  iconAnchor: [29, 53],
  shadowUrl: '/img/shadow.svg',
  shadowSize: [44, 92],
  shadowAnchor: [13, 61]
});

L.marker([50.48337, 30.39276], {
  icon: myIcon
}).addTo(map);