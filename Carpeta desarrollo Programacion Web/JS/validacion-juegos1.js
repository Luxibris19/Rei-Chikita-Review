$(document).ready(function(){
    $("#caja").on('submit',function(e){
        e.preventDefault();
        let mensajeMostrar = "";
        let entrar = false ; 

        var nombre= $("#comentario").val();
        if (nombre.length ==0){
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