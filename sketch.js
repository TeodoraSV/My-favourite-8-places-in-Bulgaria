function setup() { 
  noCanvas();
  var map = L.map('mapid').setView([42.7339, 25.4858],8.5);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


  L.marker([42.56, 27.6]).addTo(map)
    .bindPopup('Поморие<br> <a href="https://www.youtube.com/watch?v=zLkM__Bx8Ew">Video</a>')
    .openPopup();

  L.marker([43.3718, 26.6080]).addTo(map)
     .bindPopup('Лозница<br> <a href="https://loznitsa.bg/">Site</a>')
     .openPopup();
  
  L.marker([42.6977, 23.3219]).addTo(map)
     .bindPopup('София<br> <a href="https://www.youtube.com/watch?v=aLJAmYC89JU">Video</a>')
     .openPopup();

  L.marker([43.727119, 22.578709]).addTo(map)
     .bindPopup('Магурата<br> <a href="https://www.youtube.com/watch?v=ayJFt3GZSh8">Video</a>')
     .openPopup();
  
  L.marker([43.2141, 27.9147]).addTo(map)
     .bindPopup('Варна<br> <a href="https://www.youtube.com/watch?v=swFt0Fh_Yz4">Video</a>')
     .openPopup();
  
  L.marker([43.2712, 26.9361]).addTo(map)
     .bindPopup('Шумен<br> <a href="https://www.youtube.com/watch?v=6lrntdmAN78">Video</a>')
     .openPopup();
  
  L.marker([42.803653254656254, 25.34915168251477]).addTo(map)
     .bindPopup('Етъра<br> <a href="https://www.youtube.com/watch?v=BZoPoWwAbqk">Video</a>')
     .openPopup();
   
  L.marker([41.76, 25]).addTo(map)
     .bindPopup('Планинско<br> <a href="https://www.youtube.com/watch?v=BZoPoWwAbqk">Video</a>')
     .openPopup();


} 

function draw() { 

}
