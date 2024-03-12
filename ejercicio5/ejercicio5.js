// Solución ejercicio 5.
console.log("Ejercicio 5");

const nombre = [];

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
people.forEach((element) => console.log(element) );
console.log("Eliminar a Dani" + nombre.splice( 2 ));
console.log( nombre);
console.log("Eliminar a Juan" + nombre.splice( 4 ));
console.log( nombre);

nombre.unshift("Luis")
console.log( nombre );

nombre.push("Josafat");
console.log( nombre );

for (let i = 0; i < nombre.length; i++) {
    const element = nombre[i];
    console.log("Maria: " + element);    
}

console.log(nombre.indexOf("Maria") );
