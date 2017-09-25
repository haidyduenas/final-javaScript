"use strict";

let seating = [];
console.log(seating)

class Passenger{
	constructor (nombre,apellido,dni, nPasaje) {
    this.name = nombre;
	this.last_name= apellido;
	this.dni = dni;
	this.num = nPasaje;   
  }
}
class App {
	constructor () {
    	this.celda = undefined
  	}

  	showForm(event) {
	  	$(".datos").click(function(event) {
	    let id = event.target.id;
	    console.log(id);
	    /*Reservar pasajero*/
	  	if(id== 1){
		  	$ ("#table-space" ).removeClass("no-visibility");
		  	$('#form-space').removeClass('no-visibility');
	  	}
	  	/* Liberar pasajero*/
	  	else if(id==2){
		  	$('#set-free').removeClass("no-visibility");
	  	}
	  	/*Buscar DNI*/
	  	else if(id==3){
	  		$ ("#table-space" ).addClass("no-visibility");
	  		$('#form-space').addClass('no-visibility');
	  		$ ("#list" ).addClass("no-visibility");
		  	$('#search').removeClass("no-visibility");
	  	}
	  	/*Listar pasajeros*/
	  	else if(id==4){
	  		$ ("#table-space" ).addClass("no-visibility");
	  		$('#form-space').addClass('no-visibility');
		  	$('#search').addClass("no-visibility");
		  	$('#list').removeClass("no-visibility");
	  	}
	  	});
	}
	select(event){
    	$('td').click(function(event){
    	let id = event.target.id;
		$("#show-seating").html("Numero de asiento seleccionado : " + id);
	   	let num = parseInt(id);
	    let obj = seating[num - 1] ;

	    if (obj != undefined ) {
			$("#data-name").val()= obj.name;
			$("#data-lastname").val()=  obj.last_name;
			$("#data-dni").val()=  obj.dni;
	    }
    	});
	}
	booking(event){
	$('td').click(function(event){
    	let id = event.target.id;
    	this.style.backgroundColor =  '#5ccc0c';
		$('#data-save').click(function(event){
		("Numero de asiento seleccionado : " + id);
	    let obj = seating[id - 1] ;
		let name=$("#data-name").val();
		console.log(name);
		let last_name=$("#data-lastname").val();
		let dni=$("#data-dni").val();
	    seating[obj] =  new Passenger (name, last_name, dni, id);
	    $("#show-seating").removeClass('no-visibility'); 
		$("#show-seating").html("<center><div><h3>ASIENTOS RESERVADOS</h3><p>"+id+"</p><p>Nombre: "+name+"</p></div><p>Apellido :"+last_name+"</p><p>Dni :"+dni+"</p></center>");
		$("#data-name").val("");
		$("#data-lastname").val("");
		$("#data-dni").val("");
		
    	});
	});

	}
	search(){
		
		$('#data-search').click(function(e){
			$("#show-seating").remove();
		console.log("hola funciono");
		let dni = $("#dni-search").val();
		for(let i in seating){
			console.log(seating);
		if(dni== seating[i].dni){
				let found= "<div>" + "Persona Buscada: " + "<br>" + "Nombre: " + seating[i].name + "<br>" + "Apellido: " + seating[i].last_name + "<br>" + "DNI: " + seating[i].dni + "<br>" + "<br>" + "</div>";
				$('#space-found').append(found);
		}else{
			 let nofound ="<div>" +"No se han encontrado datos similares"+"</div>";
		 		$('#space-found').append(nofound);
			}
		}
		});
	}
	list(){
		
		let lista = "";
  			for (let i = 1; i <= seating.length; i++) {
    			if (seating[i-1]!= undefined) {
      				let lugar = "<h3>Asiento: </h3>"+i+"<br>";
      				let nombre = "<h3>Nombres: </h3>" + seating[i-1].name + "<br>";
	    			let apellido = "<h3>Apellidos: </h3>" + seating[i-1].last_name + "<br>";
	   	 			let dni = "<h3>DNI: </h3>" + seating[i-1].dni + "<br>";
	    			lista += lugar+ nombre + apellido+ dni;
	    			}
  				}
  		$("#list").html(lista);
	}
}
 let classSeating = new App( seating);

classSeating.showForm();
classSeating.select();
classSeating.booking();
classSeating.list();
classSeating.search();




  