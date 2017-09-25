"use strict";

let seating = [];

class App {

  constructor (nombre,apellido,dni, nPasaje) {
    this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
	this.nPasaje = nPasaje;   
  }
  renderTable (event) {
  	$("#1").click(function(event) {
    let id = event.target.id;
    console.log(id);
  	if(id== 1){
	  	$('#scp-Seating').empty();
	  	$( "#form-space" ).removeClass("no-visibility");
	  	$ ("#table-space" ).removeClass("no-visibility");
    	}
  	});
	}  	
}
 
 let classSeating = new App( seating);

classSeating.renderTable();






  