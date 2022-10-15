
var btnLimpiar = document.getElementById("btnLimpiar");
var texto = document.getElementById("txtComentario");
var resultado = document.getElementById("total");
var palabrasUnicas = document.getElementById("unicas");
var palabrasRepetidas = document.getElementById("repetidas");


function limpiar(){
    texto.value = "";
    resultado.textContent = "Total palabras: 0";
    palabrasUnicas.textContent = "Total palabras unicas: 0";
    palabrasRepetidas.textContent = "Total palabras repetidas: 0";
}

function calcular(){
    var palabras, repetidas, unicas = [];
    
    var contenido = texto.value;
    //toma las palabras y las introduce en un array, sin contar los espacios
    palabras = repetidas = unicas = contenido.split(/\W+/); //Se pone esto dentro del split para usar todo tipo de caracteres
                                                // que no sean letras como separador
   
                                                
    //Loop en reversa que revisa si se incluyeron espacios en el array
    for(i = palabras.length - 1; i >= 0; i--){
            
        if(palabras[i] == ""){
            //Si fue asi, se eliminan estos espacios
            palabras.splice(i,1);
        }
    }     
    resultado.textContent = "Total palabras: " + palabras.length;
    unicas = [...new Set(palabras)]; //Usado para obtener valores unicos
    palabrasUnicas.textContent = "Total palabras unicas: " +  unicas.length;
    repetidas = obtenerPalabrasRepetidas(palabras);
    var cantidadRepetidas = repetidas.length; //Por alguna razon,
    //siempre se guarda un espacio en la segunda posicion. Por eso se modifica la longitud
    if(repetidas.length > 1){
        cantidadRepetidas = repetidas.length - 1;
    }
    palabrasRepetidas.textContent = "Total palabras repetidas: " + cantidadRepetidas; 

}
function obtenerPalabrasRepetidas(palabras){
    var palabrasRepetidas = [];
    for(i = 0; i < palabras.length;i++){
        for(j = i+1; j < palabras.length; j++){
            if(palabras[i] == palabras[j]){     
                palabrasRepetidas[i] = palabras[j];         
                break;        
            }
        }
        
    }
    palabrasRepetidas = [...new Set(palabrasRepetidas)];
    return palabrasRepetidas;
}
texto.addEventListener("keyup",calcular,false);
btnLimpiar.addEventListener("click",limpiar,false);