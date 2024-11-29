const fs = require('fs');

//funcion para traer los datos de las bicicletas
function obtenerDatosBicicletas() {
    //leo el arcjovp bicicletas
  const data = fs.readFileSync('bicicletas.json', 'utf-8');
  //parse para convertir las cadenas de texto en arrays de objetos
  const bicicletas = JSON.parse(data);
  //devuelvo un array
  return bicicletas;
}

//Exportar la funcion
module.exports = obtenerDatosBicicletas;