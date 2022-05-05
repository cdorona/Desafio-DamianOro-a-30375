                                            //PROGRAMA FORECASTEANDO PROMEDIOS MOVILES SIMPLES


//Explico que hace el problema
alert ("FORECASTEANDO es un programa que te permite calcular las ventas de tu proximo periodo en funcion de calcular un promedio movil."
+"\n"+"Para eso vamos a solicitarte que ingreses los datos de ventas historicas"+"\n"+ "y la cantidad de periodos que vamos a promediar para que la estimacion sea la optima"
+"\n"+ "Empecemos!!!")

//Hago un bucle para reiniciar el programa
let comienzo
while (comienzo != "e") {

// Declaro Variables de numero de buckets historicos y periodos significativos para el analisis
let historia= parseInt(prompt("Ingrese el # de periodos historicos de ventas de tu empresa." +"\n"+"Hasta 12 periodos"));
let periodos = parseInt(prompt("Ingrese el # total de periodos SIGNIFICATIVOS"+"\n"+"Hasta 12 periodos."))
 
//Hago un checkeo de que los periodos a considerar sean menor que los periodos de historia
let checkPeriodo = historia - periodos

while (checkPeriodo < 0 ){
alert ("El periodo Significtivo es mayor los periodos de venta, por favor volver a ingresarlos.");
 
historia= parseInt(prompt("Ingrese el # de periodos historicos de ventas de tu empresa." +"\n"+"Hasta 12 periodos"));
periodos = parseInt(prompt("Ingrese el # total de periodos SIGNIFICATIVOS"+"\n"+"Hasta 12 periodos."));
checkPeriodo = historia - periodos
}

// Mensaje de explicacion de que se hace en los proximos pasos
alert("Ahora ingresá el valor de la ventas historica (>=0) del periodo mas reciente al mas antiguo" +"\n"+"Total de "+ historia + " periodos y cuando termines presioná cualquier letra.")

//Declaro las variables para ingresar los valores de ventas historicas

let venta1 
let venta2
let venta3
let venta4
let venta5
let venta6
let venta7
let venta8
let venta9
let venta10
let venta11
let venta12

//Hago un ciclo para el ingreso de las ventas y confiracion que los datos sean correcto

let statusDatos 
while (statusDatos != "f") {
venta1 =  parseFloat(prompt("Ingrese la Venta del Periodo n-1"))
if (venta1<1000000) {venta2 = parseFloat(prompt("Ingrese la Venta del Periodo n-2")); 
if (venta2<1000000) {venta3 = parseFloat(prompt("Ingrese la Venta del Periodo n-3"));
if (venta3<1000000) {venta4 = parseFloat(prompt("Ingrese la Venta del Periodo n-4"));
if (venta4<1000000) {venta5 = parseFloat(prompt("Ingrese la Venta del Periodo n-5"));
if (venta5<1000000) {venta6 = parseFloat(prompt("Ingrese la Venta del Periodo n-6"));
if (venta6<1000000) {venta7 = parseFloat(prompt("Ingrese la Venta del Periodo n-7"));
if (venta7<1000000) {venta8 = parseFloat(prompt("Ingrese la Venta del Periodo n-8"));
if (venta8<1000000) {venta9 = parseFloat(prompt("Ingrese la Venta del Periodo n-9"));
if (venta9<1000000) {venta10 = parseFloat(prompt("Ingrese la Venta del Periodo n-10"));
if (venta10<1000000) {venta11 = parseFloat(prompt("Ingrese la Venta del Periodo n-11"));
if (venta11<1000000) {venta12 = parseFloat(prompt("Ingrese la Venta del Periodo n-12"))}}}}}}}}}}} 

switch (historia)
{   case 1: alert("Las ventas ingresadan son "+ "\n" +"Periodo 1 - "+ venta1);break;
    case 2: alert("Las ventas ingresadan son " + "\n" + "Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 );break;
    case 3: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3);break;
    case 4: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4);break;
    case 5: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4 + "\n" +
    "Periodo 5 - " + venta5);break;
    case 6: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4 + "\n" +
    "Periodo 5 - " + venta5 + "\n" +"Periodo 6 - " + venta6);break;
    case 7: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4 + "\n" +
    "Periodo 5 - " + venta5 + "\n" +"Periodo 6 - " + venta6 + "\n" +"Periodo 7 - " + venta7);break;
    case 8: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4 + "\n" +
    "Periodo 5 - " + venta5 + "\n" +"Periodo 6 - " + venta6 + "\n" +"Periodo 7 - " + venta7 + "\n" +"Periodo 8 - " + venta8);break;
    case 9: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4 + "\n" +
    "Periodo 5 - " + venta5 + "\n" +"Periodo 6 - " + venta6 + "\n" +"Periodo 7 - " + venta7 + "\n" +"Periodo 8 - " + venta8 + "\n" +
    "Periodo 9 - " + venta9);break;
    case 10: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4 + "\n" +
    "Periodo 5 - " + venta5 + "\n" +"Periodo 6 - " + venta6 + "\n" +"Periodo 7 - " + venta7 + "\n" +"Periodo 8 - " + venta8 + "\n" +
    "Periodo 9 - " + venta9 + "\n" +"Periodo 10 - " + venta10);break;
    case 11: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4 + "\n" +
    "Periodo 5 - " + venta5 + "\n" +"Periodo 6 - " + venta6 + "\n" +"Periodo 7 - " + venta7 + "\n" +"Periodo 8 - " + venta8 + "\n" +
    "Periodo 9 - " + venta9 + "\n" +"Periodo 10 - " + venta10 + "\n" +"Periodo 11 - " + venta11);break;
    case 12: alert("Las ventas ingresadan son " + "\n"+"Periodo 1 - " + venta1 + "\n" + "Periodo 2 - " + venta2 + "\n" +"Periodo 3 - " + venta3 + "\n" +"Periodo 4 - " + venta4 + "\n" +
    "Periodo 5 - " + venta5 + "\n" +"Periodo 6 - " + venta6 + "\n" +"Periodo 7 - " + venta7 + "\n" +"Periodo 8 - " + venta8 + "\n" +
    "Periodo 9 - " + venta9 + "\n" +"Periodo 10 - " + venta10 + "\n" +"Periodo 11 - " + venta11 + "\n" +"Periodo 12 - " + venta12);break;

    default:  alert("Calculando Forecast");break;
}
statusDatos = prompt("Si los datos son correctos presione F de lo contrario cualquier tecla para reingresar")

}

//Detallo que vamos a estar analizando
alert("Vamos a considerar los ultimos " + periodos + " periodos para el analisis con " + historia + " periodos historicos")

let hist_per = (historia+""+periodos)

//Funcion que calcula el promedio movil

function promedioMovil (hp,hist,per,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12){
switch (hp)
                {   case "11": return v1;break;
                    case "12": return v1;break;
                    case "13": return v1;break;
                    case "21": return v1;break;
                    case "22": return ((v1+v2)/per);break;
                    case "23": return ((v1+v2)/hist);break;
                    case "31": return v1;break;
                    case "32": return ((v1+v2)/per);break;
                    case "33": return ((v1+v2+v3)/per);break;
                    case "34": return ((v1+v2+v3)/hist);break;
                    case "41": return v1;break;
                    case "42": return ((v1+v2)/per);break;
                    case "43": return ((v1+v2+v3)/per);break;
                    case "44": return ((v1+v2+v3+v4)/per);break;
                    case "45": return ((v1+v2+v3+v4)/hist);break;
                    case "51": return v1;break;
                    case "52": return ((v1+v2)/per);break;
                    case "53": return ((v1+v2+v3)/per);break;
                    case "54": return ((v1+v2+v3+v4)/per);break;
                    case "55": return ((v1+v2+v3+v4+v5)/per);break;
                    case "56": return ((v1+v2+v3+v4+v5)/hist);break;
                    case "61": return v1;break;
                    case "62": return ((v1+v2)/per);break;
                    case "63": return ((v1+v2+v3)/per);break;
                    case "64": return ((v1+v2+v3+v4)/per);break;
                    case "65": return ((v1+v2+v3+v4+v5)/per);break;
                    case "66": return ((v1+v2+v3+v4+v5+v6)/per);break;
                    case "67": return ((v1+v2+v3+v4+v5+v6)/hist);break;
                    case "71": return v1;break;
                    case "72": return ((v1+v2)/per);break;
                    case "73": return ((v1+v2+v3)/per);break;
                    case "74": return ((v1+v2+v3+v4)/per);break;
                    case "75": return ((v1+v2+v3+v4+v5)/per);break;
                    case "76": return ((v1+v2+v3+v4+v5+v6)/per);break;
                    case "77": return ((v1+v2+v3+v4+v5+v6+v7)/per);break;    
                    case "78": return ((v1+v2+v3+v4+v5+v6+v7)/hist);break;
                    case "81": return v1;break;
                    case "82": return ((v1+v2)/per);break;
                    case "83": return ((v1+v2+v3)/per);break;
                    case "84": return ((v1+v2+v3+v4)/per);break;
                    case "85": return ((v1+v2+v3+v4+v5)/per);break;
                    case "86": return ((v1+v2+v3+v4+v5+v6)/per);break;
                    case "87": return ((v1+v2+v3+v4+v5+v6+v7)/per);break;    
                    case "88": return ((v1+v2+v3+v4+v5+v6+v7+v8)/per);break;
                    case "89": return ((v1+v2+v3+v4+v5+v6+v7+v8)/hist);break;
                    case "91": return v1;break;
                    case "92": return ((v1+v2)/per);break;
                    case "93": return ((v1+v2+v3)/per);break;
                    case "94": return ((v1+v2+v3+v4)/per);break;
                    case "95": return ((v1+v2+v3+v4+v5)/per);break;
                    case "96": return ((v1+v2+v3+v4+v5+v6)/per);break;
                    case "97": return ((v1+v2+v3+v4+v5+v6+v7)/per);break;    
                    case "98": return ((v1+v2+v3+v4+v5+v6+v7+v8)/per);break;
                    case "99": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9)/per);break;
                    case "910": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9)/hist);break;
                    case "101": return v1;break;
                    case "102": return ((v1+v2)/per);break;
                    case "103": return ((v1+v2+v3)/per);break;
                    case "104": return ((v1+v2+v3+v4)/per);break;
                    case "105": return ((v1+v2+v3+v4+v5)/per);break;
                    case "106": return ((v1+v2+v3+v4+v5+v6)/per);break;
                    case "107": return ((v1+v2+v3+v4+v5+v6+v7)/per);break;    
                    case "108": return ((v1+v2+v3+v4+v5+v6+v7+v8)/per);break;
                    case "109": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9)/per);break;
                    case "1010": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9+v10)/per);break;
                    case "1011": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9+v10)/hist);break;
                    case "111": return v1;break;
                    case "112": return ((v1+v2)/per);break;
                    case "113": return ((v1+v2+v3)/per);break;
                    case "114": return ((v1+v2+v3+v4)/per);break;
                    case "115": return ((v1+v2+v3+v4+v5)/per);break;
                    case "116": return ((v1+v2+v3+v4+v5+v6)/per);break;
                    case "117": return ((v1+v2+v3+v4+v5+v6+v7)/per);break;    
                    case "118": return ((v1+v2+v3+v4+v5+v6+v7+v8)/per);break;
                    case "119": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9)/per);break;
                    case "1110": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9+v10)/per);break;
                    case "1111": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9+v10+v11)/per);break;
                    case "1112": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9+v10+v11)/hist);break;
                    case "121": return v1;break;
                    case "122": return ((v1+v2)/per);break;
                    case "123": return ((v1+v2+v3)/per);break;
                    case "124": return ((v1+v2+v3+v4)/per);break;
                    case "125": return ((v1+v2+v3+v4+v5)/per);break;
                    case "126": return ((v1+v2+v3+v4+v5+v6)/per);break;
                    case "127": return ((v1+v2+v3+v4+v5+v6+v7)/per);break;    
                    case "128": return ((v1+v2+v3+v4+v5+v6+v7+v8)/per);break;
                    case "129": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9)/per);break;
                    case "1210": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9+v10)/per);break;
                    case "1211": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9+v10+v11)/per);break;
                    case "1212": return ((v1+v2+v3+v4+v5+v6+v7+v8+v9+v10+v11+v12)/hist);break;


                    default: return  99999;break;}
}


let promedio = promedioMovil(hist_per,historia,periodos,venta1,venta2,venta3,venta4,venta5,venta6,venta7,venta8,venta9,venta10,venta11,venta12)

//Muestro el resultado
alert( "El promedio movil es " + promedio)

//Consulto si quiere reutilizar el nuevamente el programa

comienzo = prompt("Si quiere volver a utilizar el programa presiona cualquier tecla - para salir presione E ")


}
