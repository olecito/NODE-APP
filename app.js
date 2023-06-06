import colors from "colors";
import { inquirerMenu, pausa } from './helpers/inquirer.js';
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');


console.clear();

const main = async() => {

let opt = '';
const tareas = new Tareas();

    do{
 opt = await inquirerMenu();
// console.log({ opt });

switch (opt) {
    case '1':

    break;
}



// const tareas = new Tareas();
// const tarea = new Tarea('Comprar comida');


// tareas._listado[tarea.id] = tarea;


      await pausa();
    } while( opt !== '0' );



}

main();



