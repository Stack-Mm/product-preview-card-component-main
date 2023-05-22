var botones = document.getElementsByClassName("botonC");
var mensaje = document.getElementById("msg");

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function() {
    for (var j = 0; j < botones.length; j++) {
      if (botones[j] !== this) {
        botones[j].classList.remove('active');
      }
    }
    this.classList.toggle('active');
    
   // Obtener el número del botón seleccionado
   var numeroBoton = this.innerText;
    
   // Mostrar el mensaje con el número del botón seleccionado
   mensaje.innerText = "You selected " + numeroBoton + " out of 5";

  });
}

document.getElementById("submit").addEventListener("click", function() {
    // Ocultar la primera card
    document.getElementById("card-p").style.display = "none";
    
    // Mostrar la segunda card
    document.getElementById("submit-c").style.display = "block";
  });