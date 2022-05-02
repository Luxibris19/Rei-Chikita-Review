$(document).ready(function(){
    $("#form1").submit(function(e){
        e.preventDefault();
        let mensajeMostrar = "";
        let entrar = false ; 

        var nombre= $("#nom").val();
        if (nombre.length <4 || nombre.trim().lenght > 7){
            mensajeMostrar += "La longitud no es correcta";
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
            $("#mensajes").html("Formulario enviado");
        }
        
    });
        function esMayucula (letra){
            return letra == letra.toUpperCase();
        
        }
   
});