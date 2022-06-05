$(document).ready(function(){
    $("#caja").on('submit',function(e){
        e.preventDefault();
        let mensajeMostrar = "";
        let entrar = false ; 

        var nombre= $("#nombre").val();
        var comentario= $("#comentario").val();
        if (nombre.length <4 || nombre.length > 7){
            mensajeMostrar += "La longitud del usuario debe ser entre 4 a 7";
            entrar = true;
        }        

        if (comentario.length ==0){
            mensajeMostrar += "No hay ningun comentario";
            entrar = true;
        } 
        if (entrar == true){
            $("#mensajes").html(mensajeMostrar);
        }
        else{
            $("#mensajes").html("Reseña enviada");
            $("#mensaje").html(mensajeMostrar)
        }       
            
   
});

});