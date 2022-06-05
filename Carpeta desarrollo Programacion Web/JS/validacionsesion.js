$(document).ready(function(){
    $("#iniciarcuenta").on('submit',function(e){
        e.preventDefault();
        let mensajeMostrar = "";
        let entrar = false ; 

        var nombre= $("#usuario").val();
        var clave= $("#Contraseña").val();  
        var letraInicial = nombre.charAt(0);
        if (!esMayucula(letraInicial)){
            mensajeMostrar += "la primera es minuscula<br>";
            entrar= true
        }
        if (clave.length <5 || clave.length > 10){
            mensajeMostrar += "La longitud de la contraseña debe ser entre 5 a 10";
            entrar = true;
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