function cambiaSize(){
  if(document.body.style.fontSize =="20px"){
    document.body.style.fontSize ="30px";
  }
  else{
    document.body.style.fontSize ="20px";
  }

}

function cambiaColor(){

  if(document.body.style.backgroundColor == "white"){
      document.body.style.backgroundColor = "red";
  }

  else{
    document.body.style.backgroundColor = "white";
  }

}

function muestraImg(){
  var x = document.createElement("img");
  x.setAttribute("src","https://i.makeagif.com/media/11-17-2015/TU0qiv.gif");

  document.body.appendChild(x);
}

function escondeTexto(){
  if(document.getElementById('texto').style.visibility=="visible"){
    document.getElementById('texto').style.visibility="hidden";
  }
  else{
    document.getElementById('texto').style.visibility="visible";
  }

}

function agregaContent(){
  if(document.getElementById('texto').textContent == 'Hello World!'){
    document.getElementById('texto').textContent = '100% real no fake';
  }
  else{
    document.getElementById('texto').textContent = 'Hello World!';
  }

}
