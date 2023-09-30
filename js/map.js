let flag = 0;

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  let mapOffset = document.querySelector('#map').offsetTop;

  if ((scrollY >= mapOffset - 550) && (flag == 0)) {
    var map = L.map('map').setView([50.48337, 30.39276], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var myIcon = L.icon({
      iconUrl: 'https://iili.io/HbCmIv2.png',
      iconSize: [37, 51],
      iconAnchor: [20, 53],
      shadowUrl: 'https://iili.io/HbCmzYl.png',
      shadowSize: [42, 54],
      shadowAnchor: [11, 45]
    });

    L.marker([50.48337, 30.39276], {
      icon: myIcon
    }).addTo(map);

    flag = 1;
  }
});
