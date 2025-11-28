console.log("hola mundo")

let nombre = "dana";// let es una constante global
console.log("mi nombre es", nombre)

let apellido = "castañeda"

let suma= 20;
suma += 50
console.log(suma)

let a=10;
let b=20;
let c=10;
let d=5;
let suma1= a + b + c + d;
console.log("el resultado de la suma es", suma1)

let arreglo1 = ["aceite","papel","fabuloso","carne"]


let aceite = arreglo1[2]
//console.log(aceite)
console.log(aceite)
let nuevoproducto = arreglo1.push("shampoo")
console.log(arreglo1)
//let eliminarproducto = arreglo1.pop("papel")
let eliminarproducto2 = arreglo1.splice(0,2)
console.log(arreglo1)

let carro = {
    marca: "nissan",
    modelo: "versa",
    año: 2020,
    color: "azul",
    motor: {
        tipo: "gasolina",
        cilindros: 4,
        aceite: "5w30",
    }
}

console.log(carro);

let moto = {
    marca: "honda",
    modelo: "navi",
    año: "2025",
    color: "naranja",
    motor: {
        tipo: "gasolina",
        aceite: "10w40",
    }
}

console.log(moto);

console.log(moto.marca)
console.log(moto.motor.tipo)


for(let i =1; i <= 10; i++){
    console.log(i)
}

for(let i =100; i >=1; i--){
    console.log(i)
}
function sumar(a, b){
    return a+b;
}

console.log(sumar(7,9))

function multiplicar(c, d){
    return c*d
}

console.log(multiplicar(5,6))

let numeros =[5, 10, 15, 20, 25];
let suma3 =0;

for(let i = 0; i<numeros.length; i++){
    suma3 += numeros [i];

}

console.log("la suma es:", suma3);

let libros =[10, 15, 20, 50, 80, 10];
let suma4 =0;

for(let i = 0; i<libros.length; i++){
    suma4 += libros [i];
}

console.log("la suma es:", suma4)

function sumararreglo(arr){
    let sumaarr = 0;

    for(let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}

console.log(sumararreglo([10,20,30]));


function restararreglo(arr){
    let resta = 0;

    for(let i = 0; i < arr.length; i++){
       resta -= arr[i];
    }
     return resta;
}

console.log(restararreglo([100,50,20]));



