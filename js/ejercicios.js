

/* 1) Programa una función que cuente el 
número de caracteres de una cadena de texto, 
pe. miFunción("Hola Mundo") devolverá 10 

*/

//hare dos opciones de como resolver cada ejercicio que se me presente 

//Como hacer este ejercicio, ejemplo #1

function contarCaracteres(cadena=''){
    if(!cadena){
        console.warn('no ingresaste ninguna cadena ')
    } else{
        console.info(`La cadena  "${cadena}" tiene ${cadena.length} carracteres`)
    }
}


contarCaracteres();
contarCaracteres('hola mundo');
//fin ejemplo #1
// como hacer este ejercicio, ejemplo #2

const contarCaracteresDos=(cadena='') => (!cadena)?console.warn('no ingresaste ninguna cadena ')
:console.info(`La cadena  "${cadena}" tiene ${cadena.length} carracteres`);

contarCaracteresDos();
contarCaracteresDos('hola mundo');

console.clear();

//fin ejemplo #2


/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

//Como hacer este ejercicio, ejemplo #1

const recortarTexto=(cadena='', longitud=undefined) => 
    (!cadena)
        ?console.warn('no ingresaste una cadena de texto')
        :console.info(cadena.slice(0,longitud))

recortarTexto('hola mundo',4);
recortarTexto();

// fin ejemplo #1
// como hacer este ejercicio, ejemplo #2

const recortarTexto2=(cadena='', longitud=undefined) => 
    (!cadena)
        ?console.warn('no ingresaste una cadena de texto')
        :(longitud === undefined)
            ?console.warn('no ingresaste una longitud que pueda valorar')
            :console.info(cadena.slice(0,longitud))

recortarTexto2('hola mundo',7);
recortarTexto2('hola mundo');
recortarTexto2();

console.clear();

//fin ejemplo #


/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */


const cadenaAArreglo=(cadena='',separador=undefined)=>
    (!cadena)
        ?console.warn('no ingresaste una cadena de texto')
        :(separador === undefined)
            ?console.warn('no ingresaste un separador para este ejercicio')
            :console.info(cadena.split(separador));
cadenaAArreglo('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ' ')

cadenaAArreglo();
cadenaAArreglo('hola mundo');
console.clear();



 /* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

 const repetirTexto =(texto='',veces=undefined)=>{
    if(!texto){
        return console.warn('no ingresaste una cadena de texto');
    }
    if(veces=== undefined){
        return console.warn('no ingresaste un numero de veces a repetir');
    }
    if(veces=== 0){
        return console.error('No puede ingresar el nmero 0 , tiene que ser un numero mayor , para poder ejecutar la funcion');
    }
    if(Math.sign(veces)=== -1){
        return console.error('debes de ingresar un numero positivo para poder ejecutar la funcion ');
       
    }

    for(let i=1;i<= veces;i++){
        console.info(`${texto},${i}`);
    }
    
 }
 repetirTexto('hola mundo',3);
 repetirTexto('hola mundo',-3);
 repetirTexto('hola mundo');
 repetirTexto('',5);

 console.clear();




 /* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

 const invertirCadena =(cadena=undefined)=>
    (!cadena)
    ?console.warn('no ingresaste una cadena de texto')
    :console.info(cadena.split('').reverse().join(''));

invertirCadena()
invertirCadena('hola mundo');

console.clear();












