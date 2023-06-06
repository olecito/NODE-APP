// import uuidv4 { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
// uudiv4();


class Tarea {
    constructor( desc ) {
this.desc = desc,
this.id = uuidv4(),
this.completadoEn = null;


    }
}


export {
    Tarea
}