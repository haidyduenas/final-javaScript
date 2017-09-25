"use strict";

let seating = [];

class App {

  constructor (input) {
     this.map =  input;    
  }
  renderTable (event) {
  	$("#1").click(function(event) {
    let id = event.target.id;
    console.log(id);
  	if(id== 1){
	  	$('#scp-Seating').empty();
	  	let seating = 
	  	`<table>\
	  	<tr>\
	        <td >1</td><td>2</td><td >3</td><td >4</td><td >5</td>\
	      </tr>\
	     <tr>\
	        <td >6</td><td >7</td><td >8</td><td >9</td><td >10</td>\
	      </tr>\
	  	</table>\ `
	  	$('#formulario').append(seating);
    	}
  	});
	}  	
}
 
 let classSeating = new App( seating);

classSeating.renderTable();






  