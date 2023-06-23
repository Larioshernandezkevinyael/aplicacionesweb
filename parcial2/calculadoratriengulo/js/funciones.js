import { area, semiper, triangulo, validawe } from"./objetos.js"

var lado1 = document.getElementById("LA");
var lado2 = document.getElementById("LB");
var lado3 = document.getElementById("LC");
var caja = document.getElementById('caja');

var resultado = document.createElement('p');
caja.appendChild(resultado);

calcula.addEventListener('click',()=>{
    triangulo.l1 = lado1.value;
    triangulo.l2 = lado2.value;
    triangulo.l3 = lado3.value;

    if (validawe(triangulo) == true) {
        resultado.textContent = "El área es: " + area(triangulo);
    } else {
        resultado.textContent = "No se puede calcular.";
    }
});

tipo.addEventListener('click',() => {
    if(lado1 == lado2 && lado2 == lado3){
        resultado.textContent = "El triángulo es equilátero.";
    }else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3 ){
        resultado.textContent = "El triángulo es isósceles.";
    }else{
        resultado.textContent = "El triángulo es escaleno.";
    }
});

semi.addEventListener('click', () => {
    triangulo.l1 = lado1.value;
    triangulo.l2 = lado2.value;
    triangulo.l3 = lado3.value;

    if (validawe(triangulo) == true) {
        resultado.textContent = "El semiperímetro es: " + semiper(triangulo);
    } else {
        resultado.textContent = "No se puede calcular.";
    }
});
