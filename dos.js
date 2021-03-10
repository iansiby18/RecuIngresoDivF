/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

function mostrar () {
    let nombre;
    let carrera;
    let sexo;
    let cantidadmaterias;
    let notapromedio;
    let edad;
    let contquimica = 0;
    let contfisica = 0;
    let contsistema = 0;
    let flagmejorpromediofisica = 1;
    let mejorpromfisica;
    let nombremejorpromfisica;
    let flagalumnamasjoven = 1;
    let nombrealumnamasjoven;
    let edadalumnamasjoven;
    let flagmasmaterias = 1;
    let alumnomasmaterias;
    let nombremasmaterias;
    let edadmasmaterias;
    let contalumnostotales = 0;
    let promedioq =0;
    let promedios =0;
    let promediof =0;
    let contmujeres =0;
    
    for (let i = 0; i < 6; i++) {
        nombre = prompt("ingrese nombre del alumno: ")
        carrera= prompt("ingrese carrera del alumno (quimica, fisica, sistemas): ").toLowerCase();
        while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas" ){
            carrera= prompt("carrera incorrecta, ingrese carrera del alumno (quimica, fisica, sistemas): ").toLowerCase();
        }
        sexo = prompt("ingrese sexo (m para masculino, f para femenino y n para no binario): ").toLowerCase();
        while (sexo != "f" && sexo != "m" && sexo !="n"){
            sexo = prompt("sexo incorrecto, ingrese sexo (m para masculino, f para femenino y n para no binario): ").toLowerCase();
        }
        cantidadmaterias= parseInt(prompt("ingrese cantidad de materias (entre 1 y 5): "));
        while (isNaN(cantidadmaterias) || cantidadmaterias < 1 || cantidadmaterias > 5){
            cantidadmaterias= parseInt(prompt("cantidad incorrecta, ingrese cantidad de materias (entre 1 y 5): "));
        }
        notapromedio = parseInt(prompt("ingrese nota promedio (entre 0 y 10): "));
        while (isNaN(notapromedio) || notapromedio < 0 || notapromedio > 10){
            notapromedio= parseInt(prompt("nota promedio incorrecta, ingrese nota promedio (entre 0 y 10): "));
        }
        edad = parseInt(prompt("ingrese edad (entre 18 y 125): "));
        while (isNaN(edad) || edad < 18 || edad >125){
            edad = parseInt(prompt("edad incorrecta, ingrese edad (entre 18 y 125): "));
        }
    
    
    
        switch (carrera){
            case "fisica":
                contfisica++;
                if (flagmejorpromediofisica || mejorpromfisica < notapromedio){
                    mejorpromfisica = notapromedio;
                    nombremejorpromfisica = nombre;
                    flagmejorpromediofisica = 0;
    
                }
    
                break;
            case "quimica":
                contquimica++;
    
                break;
            case "sistemas":
                contsistema++;
    
                break;
    
    
    
        }
    
    if (sexo == "f" && (flagalumnamasjoven || edadalumnamasjoven > edad)){
        edadalumnamasjoven = edad;
        nombrealumnamasjoven = nombre;
        flagalumnamasjoven = 0;
    }
    if (carrera != "quimica" && (flagmasmaterias || alumnomasmaterias < cantidadmaterias)){
        alumnomasmaterias = cantidadmaterias;
        nombremasmaterias = nombre;
        edadmasmaterias = edad;
        flagmasmaterias = 0 ;
    
        
    
    }
    contalumnostotales++;
    if (sexo == "f"){

        contmujeres++;
    }
    
    
    
    
    
        
    }// fin del for
    
    promedioq = contquimica*100 / contalumnostotales;
    promediof = contfisica*100 / contalumnostotales;
    promedios = contsistema*100 / contalumnostotales;
    
    
    
    if(contfisica != 0){
    
        console.log ("a) El nombre del mejor promedio de los alumnos que estudian Fisica es: " + nombremejorpromfisica);
    }else {
        console.log("no se ingresaron alumnos de fisica");
    }
    
    if (contmujeres  != 0) {
        console.log ("b) El nombre de la alumna mas joven " + nombrealumnamasjoven );
        
    }else{
        console.log ("no se ingresaron alumnas");
     }
     
    console.log("c) Porcentaje de estudiantes que estudian quimica " + promedioq + "% , promedio de estudiantes que estudian fisica " + promediof + "% , promedio de estudiantes que estudian sistemas " + promedios + "%" );
     
    console.log("d) el nombre del alumno que cursa mas materias exceptuenado la carrera de quimica es " + nombremasmaterias + " y la edad es: " + edadmasmaterias);
    
 }