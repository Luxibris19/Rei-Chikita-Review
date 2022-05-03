$(document).ready(function(){
    $("#perfil").on('submit',function(e){
        e.preventDefault();
        let mensajeMostrar = "";
        let entrar = false ; 

        var nombre= $("#comentario").val();
        if (nombre.length ==0){
            mensajeMostrar += "No hay nada escrito, cuentanos sobre ti (opcional)";
            entrar = true;
        } 
        if (entrar == true){
            $("#mensajes").html(mensajeMostrar);
        }
        else{
            $("#mensajes").html("Perfil Actualizado");
            $("#mensaje").html(mensajeMostrar)
        }       
            
   
});

});