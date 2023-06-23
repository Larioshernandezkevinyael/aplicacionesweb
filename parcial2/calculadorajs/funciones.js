var v1, v2, res;

function captura1() {
    v1 = document.getElementById('v1').value;
    v1 = parseFloat(v1);
    res = document.getElementById('res');
}

function captura2() {
    v2 = document.getElementById('v2').value;
    v2 = parseFloat(v2);
    res = document.getElementById('res');
}

function suma() {
    texto = "El resultado de la suma es: " + (v1 + v2);
    res.textContent = texto;
}

function resta() {
    texto = "El resultado de la resta es: " + (v1 - v2);
    res.textContent = texto;
}

function multi() {
    texto = "El resultado de la multiplicación es: " + (v1 * v2);
    res.textContent = texto;
}

function div() {
    if (isNaN(v2)) {
        texto = "No se puede dividir, ingresa un segundo número válido.";
    } else if (isNaN(v1) || isNaN(v2)) {
        texto = "Ingresa números válidos.";
    } else {
        texto = "El resultado de la división es: " + (v1 / v2);
    }
    res.textContent = texto;
}
