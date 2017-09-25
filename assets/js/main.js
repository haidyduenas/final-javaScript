"use strict";

let seating = new Array(10);

class Passenger{
	constructor (nombre,apellido,dni, nPasaje) {
    this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
	this.nPasaje = nPasaje;   
  }
}
class App {
	constructor () {
    	this.asientos = new Array(10);
    	this.celda = undefined
  	}

  	showForm(event) {
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
	seleccionar(event){
    	$('td').click(function(event){
    	let id = event.target.id;
		$("#show-seating").html("Numero de asiento seleccionado : " + id);
	   	let num = parseInt(id);
	    let obj = seating[num - 1] ;

	    if (obj != undefined ) {
			$("#data-name").val= obj.nombre;
			$("#data-lastname").val=  obj.apellido;
			$("#data-dni").val=  obj.dni;
	    }

    	});
	}
	reservar(event){
	$('td').click(function(event){
    	let id = event.target.id;
    	this.style.backgroundColor =  '#5ccc0c';
		$('#data-save').click(function(event){
		("Numero de asiento seleccionado : " + id);
	   	let num = parseInt(id);
	    let obj = seating[num - 1] ;
		let name=$("#data-name").val();
		let last_name=$("#data-lastname").val();
		let dni=$("#data-dni").val();
	    seating[id - 1] =  new Passenger (name, last_name, dni, num); 

		$("#show-seating").html("<center><div><h3>ASIENTOS RESERVADOS</h3><p>"+num+"</p><p>Nombre: "+name+"</p></div><p>Apellido :"+last_name+"</p><p>Dni :"+dni+"</p></center>");
		$("#data-name").val("");
		$("#data-lastname").val("");
		$("#data-dni").val("");
    	});
    	$('#table-space').addClass('no-visibility');
	});

	}
 	

}

 let classSeating = new App( seating);

classSeating.showForm();
classSeating.seleccionar();
classSeating.reservar();





  