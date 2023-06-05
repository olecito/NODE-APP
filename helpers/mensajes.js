import colors from "colors";

const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear();
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