//Librerías
const fs = require('fs');
const readline = require("readline");
const textFile = 'READMETestLinks.md'

//LEER ARCHIVO MD LÍNEA POR LÍNEA
const readLinks = () => {
  return new Promise ((resolve, reject) => {  //Promesa para tarea asíncrona
    let reader = readline.createInterface({     //Crear lector para leer archivo por líneas
      input: fs.createReadStream(textFile)
    });
    const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig  //Expresion regular, patrón para encontrar/separar secuencias de caracteres
    let linePosition = 0; 
    reader.on("line", textLine => {  //Al encontrar una línea, damos insctrucciones
      if (textLine !== "") {
      // console.log("Esta línea dice:", textLine);
      const linksOnLines = [];  //Declaramos un array para trabajar con él
      linePosition++;
      const separateURL = textLine.matchAll(regex);
        for (const match of separateURL) {
          const objectLink = {
            line: linePosition,
            file: textFile,
            link: match[0]
          }
          // console.log(objectLink.file);
        linksOnLines.push(objectLink);
        console.log(linksOnLines) 
      }
      }
  })
  });  
}

readLinks();

const linksStatus = () => {
  return new Promise ((resolve, reject) => {
    //ASDFASDAF

  })
}

// module.exports = () => {
//   // ...
// };

