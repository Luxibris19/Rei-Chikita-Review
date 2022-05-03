$(document).ready(function(){
    $("#iniciarcuenta").on('submit',function(e){
        e.preventDefault();
        let mensajeMostrar = "";
        let entrar = false ; 

        var nombre= $("#usuario").val();
        if (nombre.length <4 || nombre.length > 7){
            mensajeMostrar += "La longitud debe ser entre 4 a 7";
            entrar = true;
        }
        var letraInicial = nombre.charAt(0);
        if (!esMayucula(letraInicial)){
            mensajeMostrar += "la primera es minuscula<br>";
            entrar= true
        }
        if (entrar){
            $("#mensajes").html(mensajeMostrar);
        }
        else{
            $("#mensajes").html("Sesión Iniciada!!!");
        }
        
    });
        
   
});

function esMayucula (letra){
    return letra == letra.toUpperCase();
}