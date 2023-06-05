const inquirer = import('inquirer');
import('colors');




const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Tareas completadas'
            },
            {
                value: '4',
                name: '4. Tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea'
            },
            {
                value: '0',
                name: '. Salir'
            }
        ]}
];

const inquirerMenu = async () => {

    console.clear();
    console.log('==========================='.magenta);
    console.log('  Seleccione una opcion  ');
    console.log('===========================\n'.magenta);

    const { opcion } = await inquirer(preguntas);

    return opcion;

}

const pausa = async() => {
 const question = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${ 'enter'.green } para continuar`
    }
 ];
 console.log('\n')
 await inquirer.prompt(question);
}


module.exports = {
    inquirerMenu,
    pausa
}