// creando variables

// variables con var

/*
var nombre= 'Antonio';
console.log(nombre);

let musica = 'Merengue';
console.log('Variable musica antes del bloque', musica);
{
    let musica ='Pop';
    console.log('Variable musica dentro del bloque', musica);

};
console.log('Variable musica despues  del bloque', musica);
// variables con const
const colores = ['blanco', 'amarillo,','rojo'];

const objeto = {
    nombre:'Antonio',
    apellido:'Rodriguez'

}


objeto.edad=26;
objeto.email = 'ajrodriguez1196@gmail.com';

colores.push = 'Verder';


console.log(objeto);
console.log(colores);


// funciones declaradas

function estoEsUnaFuncion(){
    console.log('uno');
    console.log('dos');
    console.log('tres');
    
}

function unaFuntionQueDevuelveValor(){
    //console.log('uno');
    return 'La funcion a retornado una cadena de texto'
}

//let valorDeLaFuncion=unaFuntionQueDevuelveValor();
//console.log(valorDeLaFuncion);

function saludar(nombre,edad){
    //console.log(`Mi nombre es ${nombre} y mi edad es ${edad} a;os`);
}

//saludar('Antonio Rodriguez',26);

//funciones declaradas vs funciones expresadas

functionDeclarada();
function functionDeclarada()
{
    //console.log('esta es una funcion declarada , puede invocarse en cualquier parte de nuestro codigo , incluso antes de que nuestra funcion sea declarada');
}

 functionDeclarada();


 const functionExpresada = function(){
    //console.log('esta es una funcion expresada ,no puede invocarse en cualquier parte de nuestro codigo , incluso antes de que nuestra funcion sea declarada');
 }

 functionExpresada();


// invocacion de una function
//estoEsUnaFuncion();

// clase de objetos en js

/*
const antonio = {
    nombre: 'Antonio',
    apellido:'Rodriguez',
    edad:26,
    pasatiempo:['leer la biblia','jugar con mi bebe','estudiar '],
    soltero:false,
    contacto:{ 
        email:'ajrodriguez1196@gmail.com',
        telefono:'04127335291',

    },
    saludar:function(){
        console.log('hola mundo')
    },
    decirMiNombre:function(){
        console.log(`hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} a;os`)
    }
}
console.log(antonio)
console.log(antonio.nombre)
console.log(antonio.apellido)
antonio.saludar()
antonio.decirMiNombre()*/

//operadores 
//operadores  Aritmeticos + % * -

//let a = 5+5%(10-4)*2;
//console.log(a);

// aoperadores relacionales < >  <= >= == === != !==
/*  
console.log(7 >= 7)
console.log(7 <= 7)


= 1 igual es  asignacion de vaeriables
== 2 iguales es comparacion de valores 
=== 3 iguales es comparacion de valores y tipo de datos 


console.log(7 == 7)
console.log('7'== 7)
console.log(7 === 7)
console.log('7' === 7);


*/

/* operadores de incremento ++ , --

let i = 1;
console.log(i++)
console.log(i--)

*/


/* operadores logicos

! - not : niega lo que es verdadero , es decir lo verdadero lo vuelve falso y viseversa
|| - or :  cuando tengo dos o mas condiciones  , con que una se cumpla, es decir sea verdadera  el or sera verdadero 
&& - and cuando tenga dos o mas condiciones , todas tienen que complirse para que se  valide el AND

console.log(!true);
console.log(!false);
console.log((9===9) || ('9'===9));
console.log((9===9) &&(9===9));

*/

/* condicionales if o else  */
/*
let edad = 26;

if(edad >= 18){
    console.log('Eres mayor de edad')
}else{
    console.log('no eres mayor de edad')
}
 */

/* condicionales if elseif  y else 

let hora = 19;

if(hora >=0 && hora<=5){
    console.log('dejame Dormir');
}else if(hora >=6 && hora<=11){
    console.log('buenos dias ');
}else if(hora>=12 && hora <=18){
    console.log('buenas tardes');
}else{
    console.log('buenas noches ')
}
*/

/* operadores ternarios (condicion) ? verdadero : falso 

let edad = 6;
let eresMayorDeEdad=(edad >=18)
?'eres mayor de edad'
:'eres menor de edad';
console.log(eresMayorDeEdad);

*/

/* operador switch case 

let dia = 5;

switch (dia) {
    case 0:
        console.log('Es Domingo')
        break;
    case 1:
            console.log('Es lunes')
        break;
        case 2:
            console.log('Es martes')
        break;
        case 3:
            console.log('Es Miercoles')
        break;
        case 4:
            console.log('Es jueves')
        break;
        case 5:
            console.log('Es viernes')
        break;
        case 6:
            console.log('Es sabado')
        break;
       

    default:
        console.log('el dia no existe ')
        break;
}
*/

/* **********   Ciclos (Loops)     ********** */

    /*  let contador = 0;
     while (contador < 10) {
       console.log("while " + contador);
       contador++;
     }
     do {
       console.log("do while " + contador);
       contador++;
     } while (contador < 10); */

    /* for (inicialización de variable; condición; decremento o incremento) {
      sentencias que ejecuta el for
      sentencias que ejecuta el for
      sentencias que ejecuta el for
    } */

    /* for (let i = 0; i < 10; i++) {
      console.log("for " + i);
    }
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    for (let i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }
    const jon = {
      nombre: "Jon",
      apellido: "MirCha",
      edad: 35
    }
    for (const propiedad in jon) {
      console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
    }
    for (const elemento of numeros) {
      console.log(elemento);
    }
    let cadena = "Hola Mundo";
    for (const caracter of cadena) {
      console.log(caracter);
    } */


     /* **********      Manejo de Errores    ********** */
    /*  try {
       console.log("En el Try se agrega el código a evaluar");
       noExiste;
       console.log("Segundo mensaje en el try");
     } catch (error) {
       console.log("Catch, captura cualquier error surgido o lanzado en el try");
       console.log(error);
     } finally {
       console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");
     }
     try {
       let numero = "y";
       if (isNaN(numero)) {
         throw new Error("El caractér introducido no es un Número");
       }
       console.log(numero * numero);
     } catch (error) {
       console.log(`Se produjo el siguiente error: ${error}`);
     } */


       /* **********      break y continue    ********** */
/*
     const numeros = [1,2,3,4,5,6,7,8,9,0];

     for(let i =0; i < numeros.length; i++){

        if(i === 5){
            break
        }
        console.log(numeros[i]);
     }
     for(let i =0; i < numeros.length; i++){

        if(i === 5){
            continue
        }
        console.log(numeros[i]);
     }

     */


     /* **********    Destructuración -     ********** */
    /* const numeros = [1, 2, 3];
    //Sin destructuración
    let uno = numeros[0],
      dos = numeros[1],
      tres = numeros[2];
    console.log(uno, dos, tres);
    //Con destructuración
    const [one, two, three] = numeros;
    console.log(one, two, three);
    const persona = {
      nombre: "Antonio",
      apellido: "Rodriguez",
      edad: 26
    };
    let { nombre, edad, apellido } = persona;
    console.log(nombre, apellido, edad); */

     /* **********    Objetos literales     ********** */


    /** 
     let nombre = "kEnAi",
      edad = 7;
    const perro = {
      nombre: nombre,
      edad: edad,
      ladrar: function () {
        console.log("guauu guauu!!!")
      }
    }
    console.log(perro);
    perro.ladrar()
    const dog = {
      nombre,
      edad,
      raza: "Callejero",
      ladrar() {
        console.log("guauu guauu guauu!!!")
      }
    }
    console.log(dog);
    dog.ladrar(); 

    */


    /* **********      Parámetros REST & Operador Spread   

    function sumar (a,b,...c){
      let resultado = a+b
      c.forEach(function(n){
        resultado += n
      });
      return resultado;
    }
    console.log(sumar(1,2));
    console.log(sumar(1,2,3,4));
    console.log(sumar(1,2,3,4));
    console.log(sumar(1,2,3,4,5));


    const arr1 =[1,2,3,4,5],
          arr2 =[6,7,8,9,0];
    console.log(arr1,arr2)

    const arr3 = [...arr1,...arr2];
    console.log(arr3) 
     

    ********** */


      /* **********     Arrow Functions      ********** */

    /*const saludar = () =>console.log('hola');
    saludar();*/

    //const saludar = nombre => console.log(`Hola mi nombre es ${nombre}`);
    //saludar('Antonio');


    /** 
    const sumar = function(a,b){
      return a + b;
    }

    console.log(sumar(1,4));
*/
  /** 
const sumar = (a,b) => a+b;
console.log(sumar(8,11));

    const numeros=[1,2,3,4,5];

    numeros.forEach((el,index)=>console.log(`${el} esta en la posicion ${index}`))


const hija= {
  nombre: 'Anmarie',
  jugar(){
    console.log(this)
  }
}

hija.jugar();

*/

/* **********      Prototipos y . Herencia -    ********** */
    // POO
    /*
    Clases - Modelo a seguir.
    Objetos - Es una instancia de una clase
      Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
      Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
     */
/** 
  const animal = {
    nombre: 'apolo',
    sonar(){
      console.log('hago sonidos porque soy un perro alegre')
    }
  }
  const animal2 = {
    nombre: 'scobby',
    sonar(){
      console.log('hago sonidos porque soy un perro alegre y grande')
    }
  }
  console.log(animal);
  console.log(animal2);

/** 
  // funcion constructora

  function Animal3(genero,nombre){
    //atributos
    this.genero=genero;
    this.nombre=nombre;
    //metodos
    this.sonar=function(){
      console.log('hago sonidos porque me gusta')
    }
    this.saludar=function(){
      console.log(`hoola mi nombre es ${nombre} y mi genero es ${genero}`)
    }
    
  }

  const scobby= new Animal3('macho','scobby'),
        apollo= new Animal3('macho', 'apollo');
  console.log(scobby,apollo);

  scobby.sonar();
  scobby.saludar();
  apollo.sonar();
  apollo.saludar();

  */
/** */

  //Función constructora donde asignamos los métodos al Prototipo, no a la función como tal

/** 
  function Animal3(genero,nombre){
    //atributos
    this.genero=genero;
    this.nombre=nombre;
    
    
  }
  //metodos
  Animal3.prototype.sonar=function(){
    console.log('hago sonidos porque me gusta')
  }
  Animal3.prototype.saludar=function(){
    console.log(`hoola mi nombre es ${this.nombre} y mi genero es ${this.genero}`)
  }

  const scobby= new Animal3('macho','scobby'),
        apollo= new Animal3('macho', 'apollo');
  console.log(scobby,apollo);

  scobby.sonar();
  scobby.saludar();
  apollo.sonar();
  apollo.saludar();




  /** herencia prototipoca */
  /** 
  function Perro(nombre,genero,tamanio){
    this.super=Animal3;
    this.super=(nombre,genero);
    this.tamanio=tamanio;
  }  

  // Perro esta heredando de Animal3
  Perro.prototype = Animal3;
  Perro.prototype.constructor= Perro;

  // Sobre escritura de metodos del prototipo del padre en el hijo
  
  Perro.prototype.sonar=function(){
    console.log('soy un perro y mi sonido es el ladrido ')
  }
  Perro.prototype.ladrar=function(){
    console.log('mi ladrido es  Guaaaauuuu Guaauuuuu ')
  }
  const brandon= new Perro('macho','brandon','grande');
  console.log(brandon);


  brandon.sonar();
  brandon.ladrar();
*/

  class Animal{
    // el constructor es un metodo especial ue se ejecuta en el momento de instanciar la clase 
    constructor(nombre,genero){
      this.nombre=nombre;
      this.genero=genero;
    }
     // metodos
 
    sonar(){
      console.log('hago sonidos porque me gusta')
    }
    saludar(){
      console.log(`hoola mi nombre es ${this.nombre} y mi genero es ${this.genero}`)
    }
    
  }

  class Perro extends Animal {
    constructor(nombre,genero,tamanio){
      // el metodo super manda a llamar  el constructor  de la clase padre 
      super(nombre,genero)
      this.tamanio=tamanio;
      this.raza=null;
    }
    sonar(){
      console.log('hago sonidos porque me gusta divertirme ')
    }
    ladrar(){
      console.log('Guaaauuu Guaaaauuu')
    }

    // un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase 

    static queEres(){
      console.log('los perros somos animales mamiferos que pertenecen a la familia de los caninos')
    }

    // los setters y los getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase

    get getRaza(){
      return this.raza;
    }
    set setRaza(raza){
      this.raza = raza;
    }

  }

  const firulais= new Perro('firulais','macho','grande');
  console.log(firulais);

  const mimi= new Animal('mimi','hembra');
  console.log(mimi);

  mimi.sonar()
  mimi.saludar()
  firulais.sonar()
  firulais.saludar()
  firulais.ladrar()
  Perro.queEres();
  console.log(firulais.getRaza);
  firulais.setRaza = "Gran danes";
  console.log(firulais.getRaza);
  console.clear();   
  
  /* **********     Curso JavaScript: 26. Objeto console - #jonmircha     ********** */
    /* console.log(console);
    console.error("Esto es un error");
    console.warn("Esto es un aviso");
    console.info("Esto es un mensje informativo");
    console.log("Un registro de lo que ha pasado en nuestra aplicación");
    let nombre = "Jon",
      apellido = "MirCha",
      edad = 35;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(nombre, apellido, edad);
    console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
    console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
    console.clear();
    console.log(window);
    console.log(document);
    console.dir(window);
    console.dir(document);
    console.clear();
    console.group("Cursos de @jonmircha en YouTube");
    console.log("Curso de JavaScript");
    console.log("Curso de Node.js");
    console.log("Curso de PWAs");
    console.log("Curso de Flexbox");
    console.log("Curso de Diseño y Programación Web");
    console.groupEnd();
    console.groupCollapsed("Cursos de @jonmircha en YouTube");
    console.log("Curso de JavaScript");
    console.log("Curso de Node.js");
    console.log("Curso de PWAs");
    console.log("Curso de Flexbox");
    console.log("Curso de Diseño y Programación Web");
    console.groupEnd();
    console.clear();
    console.log(console);
    console.table(Object.entries(console).sort());
    const numeros = [1, 2, 3, 4, 5],
      vocales = ["a", "e", "i", "o", "u"];
    console.table(numeros);
    console.table(vocales);
    const perro = {
      nombre: "Boni",
      raza: "Boxer",
      color: "cafe"
    }
    console.table(perro);
    console.clear();
    console.time('Cuanto tiempo tarda mi código');
    const arreglo = Array(1000000);
    for (let i = 0; i < arreglo.length; i++) {
      arreglo[i] = i;
    }
    console.timeEnd('Cuanto tiempo tarda mi código');
    //console.log(arreglo);
    console.clear();
    for (let i = 0; i <= 100; i++) {
      console.count("código for");
      console.log(i);
    }
    console.clear();
    let x = 3,
      y = 2,
      pruebaXY = "Se espera que X siempre sea menor que Y";
    console.assert(x < y, { x, y, pruebaXY }); */

    
    /* **********     Curso JavaScript: 27. Objeto Date - #jonmircha     ********** */
    /* console.log(Date());
    let fecha = new Date();
    console.log(fecha);
    //día del mes
    console.log(fecha.getDate());
    //día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
    console.log(fecha.getDay());
    //mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
    console.log(fecha.getMonth());
    console.log(fecha.getFullYear());
    console.log(fecha.getHours());
    console.log(fecha.getMinutes());
    console.log(fecha.getSeconds());
    console.log(fecha.getMilliseconds());
    console.log(fecha.toString());
    console.log(fecha.toDateString());
    console.log(fecha.toLocaleString());
    console.log(fecha.toLocaleDateString());
    console.log(fecha.toLocaleTimeString());
    console.log(fecha.getTimezoneOffset());
    console.log(fecha.getUTCDate());
    console.log(fecha.getUTCHours());
    console.log(Date.now());
    let cumpleJon = new Date(1984, 4, 23);
    console.log(cumpleJon); */


    /* **********     Curso JavaScript: 28. Objeto Math - #jonmircha     ********** */
    /* console.log(Math);
    console.log(Math.PI);
    console.log(Math.abs(-7.8));
    console.log(Math.ceil(7.2));
    console.log(Math.floor(7.8));
    console.log(Math.round(7.49));
    console.log(Math.sqrt(81));
    console.log(Math.pow(2, 5));
    console.log(Math.sign(-0.3)); // -1 0 1
    console.log(Math.random());
    console.log(Math.round(Math.random() * 1000)); */

    /* **********     Curso JavaScript: 29. Operador de Cortocircuito - #jonmircha     ********** */
    /*
    Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto
    Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
     */
    /*  function saludar(nombre) {
       nombre = nombre || "Desconocido";
       console.log(`Hola ${nombre}`);
     }
     saludar("Jon");
     saludar();
     console.log("cadena" || "Valor de la derecha");
     console.log(19 || "Valor de la derecha");
     console.log(true || "Valor de la derecha");
     console.log([] || "Valor de la derecha");
     console.log({} || "Valor de la derecha");
     console.log(false || "Valor de la derecha");
     console.log(null || "Valor de la derecha");
     console.log(undefined || "Valor de la derecha");
     console.log("" || "Valor de la derecha");
     console.log(-2 || "Valor de la derecha");
     console.log(0 || "Valor de la derecha");
     console.log(false && "Valor de la derecha");
     console.log(null && "Valor de la derecha");
     console.log(undefined && "Valor de la derecha");
     console.log("" && "Valor de la derecha");
     console.log(-2 && "Valor de la derecha");
     console.log(0 && "Valor de la derecha");
     console.log("cadena" && "Valor de la derecha");
     console.log(19 && "Valor de la derecha");
     console.log(true && "Valor de la derecha");
     console.log([] && "Valor de la derecha");
     console.log({} && "Valor de la derecha"); */

      /* **********     Curso JavaScript: 30. alert, confirm y prompt - #jonmircha     ********** */
    //console.log(window);
    //alert("Hola esto es una alerta");
    //confirm("Hola esto es una confirmación");
    //prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

    /* let alerta = alert("Hola esto es una alerta"),
      confirmacion = confirm("Hola esto es una confirmación"),
      aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");
    console.log(alerta);
    console.log(confirmacion);
    console.log(aviso);
 */

/* **********     Curso JavaScript: 31. Expresiones Regulares - #jonmircha     ********** */
    /*
     Expresiones Regulares
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.
        https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    */

    /*  let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";
     let expReg = new RegExp("lorem", "ig");
     console.log(expReg.test(cadena));
     console.log(expReg.exec(cadena));
     let expReg2 = /lorem{1,}/ig;
     console.log(expReg2.test(cadena));
     console.log(expReg2.exec(cadena)); */

      /* **********     Curso JavaScript: 32. Funciones Anónimas Autoejecutables - #jonmircha     ********** */
    /*    //Función Anónima Autoejecutables
       (function () {
         console.log("Mi primer IIFE");
       })();
       (function (d, w, c) {
         console.log("Mi segunda IIFE");
         console.log(d);
         console.log(w);
         c.log("Este es un console.log")
       })(document, window, console);
       //Formas de escribir las funciones Anónimas Autoejecutables
       //Clásica
       (function () {
         console.log('versión Clásica')
       })();
       //La Crockford (JavaScript The Good Parts)
       ((function () {
         console.log('versión Crockford')
       })());
       //Unaria
       +function () {
         console.log('versión Unaria')
       }();
       //Facebook
       !function () {
         console.log('versión Facebook')
       }(); */


 