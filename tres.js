/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/
	function mostrar() {
		let nombre;
		let cantidad;
		let marca;
		let seguir;
		let precio;
		let totalsindescuento = 0;
		let importe;
		let acumlamparas = 0;
		let acumargentina = 0;
		let contargentina = 0;
		let acumilluminatis = 0;
		let contilluminatis = 0;
		let acumfelipe = 0;
		let contfelipe = 0;
		let promedioargentina = 0;
		let promedioilluminatis = 0;
		let promediofelipe = 0;
	  
		let marcaMasVentas;
	  
		do {
		  nombre = prompt("ingrese nombre:");
		  while (!isNaN(nombre)) {
			nombre = prompt("ingrese nombre valido:");
		  }
		  cantidad = parseInt(prompt("ingrese cantidad:"));
	  
		  marca = prompt("ingrese marca felipelamparas/argentinaluz/illuminatis:");
		  while (
			marca != "felipelamparas" &&
			marca != "argentinaluz" &&
			marca != "illuminatis"
		  ) {
			marca = prompt(
			  "error, ingrese marca felipelamparas/argentinaluz/illuminatis:"
			);
		  }
		  precio = parseInt(prompt("ingrese precio:"));
		  while (isNaN(precio) || precio <= 0) {
			precio = parseInt(prompt("error, ingrese precio"));
		  }
	  
		  importe = precio * cantidad;
		  totalsindescuento += importe;
	     
		  acumlamparas += cantidad;
	      

		  switch (marca){

		  case "felipelamparas":
			  acumfelipe += cantidad;
			  contfelipe++;
			  break;
		  case "argentinaluz":
			  acumargentina +=cantidad;
			  contargentina++;
			  break;
		  case "illuminatis":
			  acumilluminatis += cantidad;
			  contilluminatis++;
		  }
		  
		 
	  
		  seguir = prompt("quiere ingresar otro cliente? s/n ");
		} while (seguir == "s");
	  
		
	  
		
		console.log("la empresa recaudó $" + totalsindescuento); //a
	  

		if (contargentina != 0) {
		  promedioargentina = acumargentina / contargentina;
		  console.log(
			"el promedio de cantidad de lamparas vendidas de argentinaluz es " + promedioargentina 
		  );
		}else{
			console.log("no se realizaron ventas de la marca ArgentinaLuz")
		}
		
		
		if (contilluminatis != 0) {
		  promedioilluminatis = acumilluminatis / contilluminatis;
		  console.log(
			"el promedio de cantidad de lamparas vendidas de illuminatis  es " + promedioilluminatis
		  );
		}else {
			console.log("no se realizaron ventas de la marca illuminatis")
		}
		
		
		if (contfelipe != 0) {
		  promediofelipe = acumfelipe / contfelipe;
		  console.log(
			"el promedio de cantidad de lamparas vendidas de FelipeLamparas es " +
			  promediofelipe
		  );
		}else {
			console.log("no se realizaron ventas de la marca FelipeLamparas")
		}
	  
	
		if (contargentina > contfelipe && contargentina > contilluminatis) {
		  marcaMasVentas = "argentinaluz";
		} else if (contfelipe >= contargentina && contfelipe > contilluminatis) {
		  marcaMasVentas = "felipelamparas";
		} else {
		  marcaMasVentas = "illuminatis";
		}
		console.log("La marca que mas ventas relizó fue " + marcaMasVentas);
	  
	  }

