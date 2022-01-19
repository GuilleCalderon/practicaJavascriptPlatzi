

function perimetroCuadrado (lado){
    return lado * 4
} 


function areaCuadrado (lado){
   return lado * lado
    
}


function perimetroTriangulo (lado1, lado2, base){
    
    return perimetro = (lado1 + lado2 + base)
} 


function areaTriangulo (base, altura){
    return (base * altura)/2
    
}

const PI = Math.PI

function diametroCirculo (radio){
    return radio * 2
}

function perimetroCirculo (radio) {
    return diametroCirculo(radio) * PI
}

function areaCirculo (radio) {
    return (radio*radio) * PI
}

//aca se interactua con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const perimetro= perimetroCuadrado (value)

    alert(perimetro + " cm")
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const area= areaCuadrado (value)

    alert(area + " cm2")

}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("inputTriangulo1")
    const value1 = parseInt(lado1.value)
    const lado2 = document.getElementById("inputTriangulo2")
    const value2 = parseInt(lado2.value)
    const base = document.getElementById("inputTriangulo3")
    const value3 = parseInt(base.value)
    
    const perimetro= perimetroTriangulo (value1, value2, value3)

    alert(perimetro + " cm")
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTriangulo3")
    const value1 = parseInt(base.value)
    const altura = document.getElementById("inputTriangulo4")
    const value2 = parseInt(altura.value)
    
    const area = areaTriangulo(value1 , value2)

    alert(area +" cm2")

}

function calcularCircunferencia() {

    const radio = document.getElementById("inputCirculo")
    const value1 = radio.value

    const circunferencia = perimetroCirculo(value1)
    alert(circunferencia + " cm")
}

function calcularAreaCirculo() {
    const radio = document.getElementById("inputCirculo")
    const value1 = radio.value

    const area = areaCirculo(value1)
    alert(area + " cm2")

}