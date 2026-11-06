
/*
=========================================================
ACTIVIDAD DE INICIACIÓN A JAVASCRIPT
Proyecto: Mi pequeña tienda
=========================================================

OBJETIVO:
Practicar los conceptos básicos de JavaScript utilizando
exclusivamente console.log() para mostrar los resultados.

CONTENIDOS:
- Variables y tipos de datos
- Arrays
- Operadores
- Condicionales
- Booleanos
- Bucles
- Funciones
- Métodos básicos

INSTRUCCIONES:
1. Lee cada apartado.
2. Completa las tareas indicadas.
3. Ejecuta el archivo con Node.js.
4. Comprueba los resultados en la terminal.

Para ejecutar el archivo:
node actividad_iniciacion_javascript.js
*/


// =======================================================
// APARTADO 1. VARIABLES Y TIPOS DE DATOS
// =======================================================

console.log("===== BIENVENIDO A MI TIENDA =====");

// TAREA 1.
// Crea una variable llamada nombreTienda y guarda
// el nombre de tu tienda.

let nombreTienda = "Tienda Sonatina";

console.log("Bienvenido a " + nombreTienda + "!");


// TAREA 2.
// Crea una variable llamada nombreProducto y guarda
// el nombre de un producto.
let nombreProducto = "Diapasón";
// Crea otra variable llamada precio y guarda su precio.
let precio = 15;
// Crea otra variable llamada stock y guarda cuántas
// unidades hay disponibles.
let stock = 10;

// TAREA 3.
// Muestra por consola el nombre del producto,
// su precio y las unidades disponibles.
//
// Ejemplo:
// Producto: Diapasón
// Precio: 15
// Stock: 10

console.log("Producto: " + nombreProducto);
console.log("Precio: " + precio + "€");
console.log("Stock: " + stock + " unidades");

// =======================================================
// APARTADO 2. ARRAYS Y MÉTODOS
// =======================================================

console.log("\n===== NUESTROS PRODUCTOS =====");

// TAREA 4.
// Crea un array llamado productos que contenga
// cinco nombres de productos diferentes.

let productos = ["Diapasón", "Teclado", "Trompeta", "Flauta", "Batería"];


// TAREA 5.
// Muestra por consola el array completo.

// Muestra también cuántos productos contiene
// utilizando la propiedad length.

console.log("Lista de intrumentos:");
console.log(productos);

console.log("Total de instrumentos: " + productos.length);


// TAREA 6.
// Añade un nuevo producto al array utilizando push().
productos.push("Guitarra");
// Muestra de nuevo el array para comprobar
// que el producto se ha añadido.

console.log("Nueva Lista de instrumentos (con nuevos añadidos):");
console.log(productos);

// TAREA 7.
// Comprueba si el array contiene un producto
// concreto utilizando includes().
console.log("¿Contiene el producto Trompeta?")
console.log(productos.includes("Trompeta"));

// Muestra el resultado por consola.
// El resultado será true o false. LO HACE DIRECTAMENTE NO HACE FALTA PONER NADA MÁS.

// TAREA 8.
// Muestra el nombre de un producto en mayúsculas
// utilizando el método toUpperCase().

console.log("Instrumento en mayúsculas:");
// Consejo: puedes acceder a un elemento del array
// mediante su posición. La primera posición es 0.

console.log(productos[0].toUpperCase());


// =======================================================
// APARTADO 3. OPERADORES
// =======================================================

console.log("\n===== CALCULAR UNA COMPRA =====");

// TAREA 9.
// Crea una variable llamada unidadesCompradas
// y guarda cuántas unidades quiere comprar
// un cliente.

let unidadesCompradas = 2;

// Crea otra variable llamada totalCompra
// y calcula el precio total multiplicando
// el precio del producto por las unidades.

let totalCompra = precio * unidadesCompradas;
// Operadores:
// + suma
// - resta
// * multiplicación
// / división


// TAREA 10.
// Muestra por consola el número de unidades
// y el importe total de la compra.

console.log("Unidades compradas: " + unidadesCompradas);
console.log("Importe total: " + totalCompra + "€");

// TAREA 11.
// Calcula el precio de una unidad si el cliente
// compra dos unidades y recibe un descuento total
// de 4 euros.

let descuento = 4;
let totalConDescuento = totalCompra - descuento;

console.log("Descuento aplicado: " + descuento + "€");
console.log("Precio total con descuento: " + totalConDescuento + "€");


// =======================================================
// APARTADO 4. CONDICIONALES
// =======================================================

console.log("\n===== COMPROBAR LA COMPRA =====");

// TAREA 12.
// Comprueba si el precio del producto es mayor
// que 20 euros.

if (precio > 20) {
  console.log("Es un producto caro");
} else {
    console.log("Es un producto económico");
}

// TAREA 13.
// Comprueba si hay suficientes unidades en stock
// para atender la compra.

if (unidadesCompradas <= stock) {
  console.log("Hay suficiente stock");
} else {
    console.log("No hay suficiente stock");
}

// TAREA 14.
// Comprueba si el cliente puede recibir un descuento.
// Para ello, debe comprar al menos 3 unidades.

if (unidadesCompradas >= 3) {
  console.log("El cliente puede recibir un descuento");
} else {
    console.log("El cliente no puede recibir un descuento");
}   

// =======================================================
// APARTADO 5. BOOLEANOS Y OPERADORES LÓGICOS
// =======================================================

console.log("\n===== COMPROBACIONES =====");

// TAREA 15.
// Crea una variable llamada tiendaAbierta
// y asígnale el valor true.

let tiendaAbierta = true;
// Crea otra variable llamada pagoRealizado
// y asígnale el valor false.

let pagoRealizado = false;


// TAREA 16.
// Muestra por consola los valores de ambas variables.

console.log("¿Esta abierta la tienda? " + tiendaAbierta);
console.log("¿Se ha realizado el pago? " + pagoRealizado);

// TAREA 17.
// Utiliza el operador lógico &&.

if (tiendaAbierta && pagoRealizado) {
  console.log("Pedido confirmado");
} else {
  console.log("Pedido pendiente");
}   

// =======================================================
// APARTADO 6. BUCLES
// =======================================================

console.log("\n===== LISTA DE PRODUCTOS =====");

// TAREA 18.
// Utiliza un bucle for para mostrar todos los productos
// del array.

for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}

// TAREA 19.
// Utiliza un bucle for...of para mostrar los productos
// del array.
// En este caso, la variable del bucle representa
// directamente cada producto.

console.log("Recorridoc con for...of:");

for (let producto of productos) {
  console.log(producto);
}

// TAREA 20.
// Utiliza un bucle for para mostrar los números
// del 1 al 5.

for (let i = 1; i <= 5; i++) {
  console.log("Número: " + i);
}


// =======================================================
// APARTADO 7. FUNCIONES
// =======================================================

console.log("\n===== FUNCIONES DE LA TIENDA =====");

// TAREA 21.
// Crea una función llamada saludarCliente().
// La función debe mostrar por consola:
// "Gracias por visitar nuestra tienda".
// Después, llama a la función para ejecutarla.

function saludarCliente() {
  console.log("Gracias por visitar nuestra tienda");
}
saludarCliente();

// TAREA 22.
// Crea una función llamada calcularTotal().
// Debe recibir dos parámetros:
// - precioProducto
// - cantidad
// Debe devolver el resultado de multiplicar
// ambos valores utilizando return.

function calcularTotal(precioProducto, cantidad) {
  return precioProducto * cantidad;
}   
 // Llamar a la función y mostrar el resultado por consola.
let total = calcularTotal(10, 3);

console.log("Total calculado con la función: " + total + "€");

// TAREA 23.
// Crea una función llamada comprobarStock().

function comprobarStock(stockDisponible, unidadesSolicitadas) {
    if (unidadesSolicitadas <= stockDisponible) {
        return true;
    } else {
        return false;
    }
}

// Probar la función con dos ejemplos.

console.log("¿Hay sotck para 5 unidades?")
console.log (comprobarStock(10, 5));

console.log("Hay sotck para 15 unidades?")
console.log (comprobarStock(10, 15));



// =======================================================
// APARTADO 8. RESUMEN FINAL
// =======================================================

console.log("\n===== RESUMEN DE LA COMPRA =====");

console.log("Tienda: " + nombreTienda);
console.log("Productos disponibles:");
console.log(productos);

console.log("Producto seleccionado: " + nombreProducto);
console.log("Precio: " + precio + "€");
console.log("Unidades compradas: " + unidadesCompradas);
console.log("Total de la compra: " + totalCompra + "€");
console.log("Descuento aplicado: " + descuento + "€");
console.log("Total con descuento: " + totalConDescuento + "€");

// TAREA 25. RETO FINAL OPCIONAL.
//
// Comprueba si el client puede realizar la compra.
//
// Para ello:
// 1. Debe haber suficientes unidades en stock.
// 2. La tienda debe estar abierta.
// 3. El pago debe estar realizado.
//
// Utiliza una condición con && y la función
// comprobarStock().
//
// Si se cumplen todas las condiciones, muestra:
// "Compra realizada correctamente".
//
// Si alguna condición falla, muestra:
// "No se puede completar la compra".
//
// Escribe tu código aquí.



// =======================================================
// FIN DE LA ACTIVIDAD
// =======================================================

console.log("\n===== FIN DE LA ACTIVIDAD =====");
console.log("¡Buen trabajo!");
