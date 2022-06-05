$(document).ready(function(){
    $("#registrarcuenta").on('submit',function(e){
        let mensajeMostrar = "";
        let entrar = false ; 
        e.preventDefault();

        var nombre= $("#nombre").val();
        var clave= $("#Contraseña").val();     
        var clave2= $("#Confirm-Contraseña").val();

        if (nombre.length <4 || nombre.length > 7){
            mensajeMostrar += "La longitud debe ser entre 4 a 7";
            entrar = true;
        }
        var letraInicial = nombre.charAt(0);
        if (!esMayucula(letraInicial)){
            mensajeMostrar += "la primera es minuscula<br>";
            entrar= true;
        }    
        if (clave.length <5 || clave.length > 10){
            mensajeMostrar += "La longitud de la contraseña debe ser entre 5 a 10";
            entrar = true;
        }
        if (clave2.length <5 || clave2.length > 10){
            mensajeMostrar += "La longitud de la contraseña debe ser entre 5 a 10";
            entrar = true;
        }

        if (clave2 != clave ){
            mensajeMostrar += "Las contraseñas no son iguales <br>";
            entrar = true;
        }
        

        if (entrar){
            $("#mensajes").html(mensajeMostrar);
            e.preventDefault();
        }
        else{
            $("#mensajes").html("Registro enviado.");
        }
        
    });
        
   
});

function esMayucula (letra){
    return letra == letra.toUpperCase();
}