/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   return num = Math.pow(num,2)
   
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   return num = Math.pow(num,3)


}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   return num = Math.pow(num,exponent)

}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   return num = Math.round(num)
   
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   return num = Math.ceil(num)

}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   var aleatorio = Math.random();
   return aleatorio
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
