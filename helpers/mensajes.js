import('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear();
        console.log('==========================='.magenta);
        console.log('  Seleccione una opcion  ');
        console.log('===========================\n'.magenta);


        console.log(`${'1.'.magenta} Crear tarea`);
        console.log(`${'2.'.magenta} Listar tareas`);
        console.log(`${'3.'.magenta} Tareas completadas`);
        console.log(`${'4.'.magenta} Tareas pendientes`);
        console.log(`${'5.'.magenta} Completar tarea(s)`);
        console.log(`${'6.'.magenta} Borrar tarea`);
        console.log(`${'0.'.magenta} Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout

        });

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        })


    })
};



const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout

        });

        readline.question(`\npresione ${'ENTER'.magenta} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    });
}


module.exports = {
    mostrarMenu,
    pausa
}