
// ici j'initialise ma carte 
var mymap = L.map('worldmap',
     {
      center: [48.866667, 2.333333],
      zoom: 4
     }
     );
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}',{foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/%22%3EOpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/%22%3ECC-BY-SA</a>'}).addTo(mymap);
    
     var coordonnees= document.getElementsByClassName('coordonnees');
     console.log("COORDONNEES",coordonnees);
     for (let i=0;i<coordonnees.length;i++) {
        var lon= coordonnees[i].dataset.lon;
        var lat= coordonnees[i].dataset.lat;
        var name = coordonnees[i].dataset.name;
        L.marker([lat,lon]).addTo(mymap).bindPopup(name);
     }

 