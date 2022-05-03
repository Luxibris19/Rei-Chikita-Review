$(document).ready(function(){
    $("#genero").on('submit',function(e){
        e.preventDefault();
        let mensajeMostrar = "";
        let entrar = false ; 

        var nombre= $("#comentario").val();
        if (nombre.length <1 || nombre.length > 10){
            mensajeMostrar += "No hay nada escrito";
            entrar = true;
        }

        if (entrar){
            $("#mensajes").html(mensajeMostrar);
        }
        else{
            $("#mensajes").html("Cambio Añadido");
        }
        $("#mensajes").css({color: 'black'});
    });
        
});
