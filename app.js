//numeros del 1 al 100 
for (let i = 1; i <= 100; i++); {
    console.log(i)
}

//numeros de 500 al 1000 de 2 en 2
for (let i = 500; i <= 1000; i += 2) {
    console.log(i)
}

//promedio usando reduce

let numeros = [6, 8, 9, 2, 5, 10]

let suma = numeros.reduce((a, n) => (a += n, a), 0); // a es el acumulador y n el numero actual, dentro de una funcion de callback, con funcion de flecha, a la variable a le sumo el valor actual de n y retorno a, al inicio el valor de a será 0

console.log(suma)

let promedio = suma / numeros.length
console.log(promedio)