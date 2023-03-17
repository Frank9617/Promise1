
const readline = require('readline');

function verificarEdad() {
  return new Promise((resolve, reject) => {
    const interfazCaptura = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    console.log('Bienvenido a la fiesta de la discoteca');
    
    interfazCaptura.question('Por favor ingrese su año de nacimiento: ', function(respuesta){ 
      const yearOfBirth = respuesta;
      const currentYear = new Date().getFullYear();
      const age = currentYear - yearOfBirth;


      if (yearOfBirth < 1923) {
        console.log('Error: año inválido. Por favor ingrese un año posterior a 1923.');     

      }else if (yearOfBirth > currentYear ) {
        reject('Año inválido. Por favor ingrese un año válido.');
    
      } else if (age >= 18 && age < 49) {
        resolve(`Usted tiene ${age} años y puede ingresar a la fiesta.\nEl cover del ingreso a la fiesta es de $20.000 pesos.`);
      } else if (age >= 49) {
        resolve(`Usted tiene ${age} años y puede ingresar a la fiesta.\nNo tiene que pagar cover y se le entregará un obsequio de media botella de aguardiente o media botella de ron.`);
      } else {
        reject(`Lo siento, usted tiene ${age} años y no puede ingresar a la fiesta.`);
      }
      
      interfazCaptura.close();
    });
 
});
}

verificarEdad()
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));
















