import colors from "colors";
import inquirer from 'inquirer';






const preguntas = [

    {
  
      type: "list",
  
      name: "opcion",
  
      message: "Que desea hacer?",
  
      choices: [
  
        {
  
          value: "1",
  
          name: `${colors.magenta("1.")} Crear tarea`,
  
        },
  
        {
  
          value: "2",
  
          name: `${colors.magenta("2.")} Listar tareas`,
  
        },
  
        {
  
          value: "3",
  
          name: `${colors.magenta("3.")} Tareas completadas`,
  
        },
  
        {
  
          value: "4",
  
          name: `${colors.magenta("4.")} Tareas pendientes`,
  
        },
  
        {
  
          value: "5",
  
          name: `${colors.magenta("5.")} Completar tarea(s)`,
  
        },
  
        {
  
          value: "6",
  
          name: `${colors.magenta("6.")} Borrar tarea`,
  
        },
  
        {
  
          value: "0",
  
          name: `${colors.magenta("0.")} Salir\n`,
  
        },
  
      ],
  
    },
  
  ];
  


const inquirerMenu = async () => {




    console.clear();

    console.log(colors.magenta("=========================="));

    console.log(("Seleccione una opción"));
  
    console.log(colors.magenta("==========================\n"));


    const { opcion } = await inquirer.prompt(preguntas);




    return opcion;




}




const pausa = async () => {

  const question = [

    {

      type: "input",

      name: "enter",

      message: `Presione ${"enter".green} para continuar`,

    },

  ];

  console.log("\n");

  await inquirer.prompt(question);

};




export {

  inquirerMenu,

  pausa,

};