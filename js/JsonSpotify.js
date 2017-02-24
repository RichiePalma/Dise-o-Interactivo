function search(){
  var img = document.createElement("img");

  $.getJSON( "https://api.spotify.com/v1/search?q=red%20hot%20chili%20peppers&type=artist", function( data ) {
//Tambien preguntar el como insertar las imagenes apropiadamente
    //img.src= data.artists.items[0].images[1].url;
    //document.getElementById('texto').appendChild(img);
    //document.getElementById('foto').src= 'data.artists.items[0].images[1]';
    document.getElementById('texto').innerHTML= data.artists.items[0].name;

  });
//Preguntar como acceder direclamente al id data.artists.items[0].id
$.getJSON("https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5/albums",function(data){
  for(i=0;i<data.items.length;i++){
      console.log(data.items[i].name);

      document.getElementById('album').innerHTML += data.items[i].name + "<br>";
  }

})

}
