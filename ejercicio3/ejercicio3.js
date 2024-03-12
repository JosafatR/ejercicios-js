// Solución ejercicio 3.
console.log("Ejercicio 3");

array=[2,4,6,8];
const inicioAcumulativo=0;
const sumaArray= array.reduce( (acumulativo, currentValue) => acumulativo + currentValue, inicioAcumulativo );
console.log(" La suma de los numeros del arreglo es: " + sumaArray);

const inicioAcum=1;
const multArray= array.reduce( ( acumulativo, currentValue) => acumulativo * currentValue, inicioAcum );
console.log(" La multiplicación de los elementos del arreglo es: " + multArray);