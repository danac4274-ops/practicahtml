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
