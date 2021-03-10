/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/

function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let seguir;
	let acumqa = 0;
	let contqa = 0;
	let acumprogramador = 0;
	let contprogramador = 0;
	let acumanalista = 0;
	let contanalista = 0;
	let promediop = 0;
	let promedioq = 0;
	let promedioa = 0;
	let flagmayorsueldo = 1;
	let mayorsueldo;
	let sexomayorsueldo;
	let contprogramadornobinario = 0;
	let flagempleadamayorsueldo = 1;
	let mayorsueldof;
	let nombremayorsueldo;
	
	
	do {
		nombre=prompt("ingrese nombre: ");
		edad = parseInt(prompt("ingrese edad (entre 18 y 125): "))
		while (isNaN(edad) || edad < 18 || edad >125){
			edad = parseInt(prompt("edad incorrecta, ingrese edad (entre 18 y 125): "));
		}
		sexo = prompt("ingrese sexo (m para masculino, f para femenino y n para no binario): ").toLowerCase();
		while (sexo != "f" && sexo != "m" && sexo !="n"){
			sexo = prompt("sexo incorrecto, ingrese sexo (m para masculino, f para femenino y n para no binario): ").toLowerCase();
		}
		puesto= prompt("ingrese puesto de trabajo (programador, analista, Qa): ").toLowerCase();
		while (!(puesto == "programador" || puesto == "analista" || puesto == "qa")) {
			puesto= prompt("puesto incorrecto, ingrese puesto de trabajo (programador, analista, Qa): ").toLowerCase();
		}
		sueldo = parseInt(prompt("ingrese el sueldo (entre 15000 y 70000): "));
		while (isNaN(sueldo) || sueldo < 15000 || sueldo > 70000){
			sueldo = parseInt(prompt("sueldo incorrecto, ingrese el sueldo (entre 15000 y 70000): "));	
		}
	
		switch (puesto){
	
			case "analista":
				acumanalista += sueldo;
				contanalista++;
				break;
			case "programador":
				acumprogramador += sueldo;
				contprogramador++;
				break;
			case "qa":
				acumqa+= sueldo;
				contqa++;
				break;
	
		}// fin del swtich
	
		
		
		if(flagmayorsueldo || sueldo > mayorsueldo){
			mayorsueldo = sueldo;
			sexomayorsueldo = sexo;
			flagmayorsueldo = 0;
		}
		
	
		if (sexo == "n" && sueldo >= 20000 && sueldo <= 55000){
			contprogramadornobinario++;
		}
	
		if (sexo == "f" && (flagempleadamayorsueldo || mayorsueldo < sueldo)){
			mayorsueldof = sueldo;
			nombremayorsueldo = nombre;
			flagempleadamayorsueldo = 0;
	
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		seguir= prompt("quiere continuar ? s/n : ")
	} while (seguir == "s");
	
	
	if(contqa != 0){
		promedioq = acumqa / contqa;
	
	}
	if (contprogramador != 0){
		promediop = acumprogramador / contprogramador;
	
	}
	if (contanalista !=0 ){
		promedioa = acumanalista / contanalista;
	}
	/*a) promedio de sueldos para cada puesto
	b) el sexo del que percibe el mayor sueldo
	c) el nombre del empleado femenino con mas sueldo
	d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/
	
	console.log("el promedio de sueldo de programadores es: " + promediop + ", el promedio de sueldo de analistas es: " + promedioa + ", el promedio de sueldo de Qa es: " + promedioq);
	
	
	
	
	console.log("el sexo que percibe mayor sueldo es: " + sexomayorsueldo );
	
	
	
	
	if (flagempleadamayorsueldo == 0){
		console.log("el nombre del empleado femenino con mayor sueldo es: " + nombremayorsueldo);
	
	}else {
		console.log(" no se ingresaron empleados femeninos");
	}
	
	
	
	if (contprogramadornobinario != 0){
	
		console.log(" la cantidad de programadores no binarios que cobran entre 20000 y 55000 es: " + contprogramadornobinario );
	}else{
		console.log(" no se ingresaron programadores no binarios con sueldos entre 20000 y 55000");
	}
}