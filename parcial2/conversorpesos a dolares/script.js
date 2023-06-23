function convertir() {
    var cantidad = document.getElementById("cantidad").value;
    var monedaOrigen = document.getElementById("monedaOrigen").value;
    var monedaDestino = document.getElementById("monedaDestino").value;
    var resultado;
  
    if (monedaOrigen === "dolares" && monedaDestino === "pesos") {
      resultado = cantidad * 17.15; 
    } else if (monedaOrigen === "pesos" && monedaDestino === "dolares") {
      resultado = cantidad / 17.15; 
    }
  
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado.toFixed(2);
    document.getElementById("cantidad").value = ""; 
  }
  