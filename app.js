const obtenerDatosBicicletas = require('./datosBici');

const dhBici = {
  // traigo el listado de bicicletas desde el archivo bicicletas.json
  bicicletas: obtenerDatosBicicletas(),

  // funcion para buscar por ID
  buscarBici: function(id) {
    // filtro y busco por ID
    const bici = this.bicicletas.filter(bici => bici.id === id);
    //devuelve la bici o null
    return bici.length > 0 ? bici[0] : null;
  },

  // funcion vender bicicleta por ID
  venderBici: function(id) {
    // llamo a la funcion buscarBici(id)
    const bici = this.buscarBici(id);
    if (bici) {
        //si la encuentro cambio el estado a true
      bici.vendida = true;
      return bici;
    } else {
      // Si no se encuentra la bicicleta, devolver un mensaje de error
      return "Bicicleta no encontrada";
    }
  },

  //funcion para obtener todas las bicicletas que NO estan vendidas
  biciParaLaVenta: function() {
    //filtrar las que NO estan vendidas negando con el !
    return this.bicicletas.filter(bici => !bici.vendida);
  },

  // funcion para calcular el total de ventas realizadas
  totalDeVentas: function() {
    // filtro las bicis vendidas  y sumos los precios
    return this.bicicletas
      .filter(bici => bici.vendida)
      .reduce((total, bici) => total + bici.precio, 0);
  }
};

// Probar las funcionalidades
//console.log(dhBici.buscarBici(1)); // Debería devolver la bicicleta con id 1
//console.log(dhBici.venderBici(2)); // cambia el estado de vendida a true y lo devuelve
//console.log(dhBici.biciParaLaVenta()); // bicis no vendidas (false)
//console.log(dhBici.totalDeVentas()); // suma de todas la bicis vendidas