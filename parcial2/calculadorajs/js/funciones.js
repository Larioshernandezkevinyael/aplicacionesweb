import { area, semiper, triangulo, validawe } from"./objetos.js"

var lado1 = document.getElementById("LA");
var lado2 = document.getElementById("LB");
var lado3 = document.getElementById("LC");
var caja = document.getElementById('caja');

calcula.addEventListener('click',()=>{
    triangulo.l1 = lado1.value;
    triangulo.l2 = lado2.value;
    triangulo.l3 = lado3.value;

    if (validawe(triangulo) == true) {
        caja.innerHTML += '<p>El área es: ' + area(triangulo) + '</p>';
    } else {
        caja.innerHTML += '<p>No se puede calcular.</p>';
    }
});

tipo.addEventListener('click',() => {
    if(lado1 == lado2 && lado2 == lado3){
        caja.innerHTML += '<p>El triángulo es equilátero.</p>';
    }else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3 ){
        caja.innerHTML += '<p>El triángulo es isósceles.</p>';
    }else{
        caja.innerHTML += '<p>El triángulo es escaleno.</p>';
    }
});

semi.addEventListener('click', () => {
    triangulo.l1 = lado1.value;
    triangulo.l2 = lado2.value;
    triangulo.l3 = lado3.value;

    if (validawe(triangulo) == true) {
        caja.innerHTML += '<p>El semiperímetro es: ' + semiper(triangulo) + '</p>';
    } else {
        caja.innerHTML += '<p>No se puede calcular.</p>';
    }
});
