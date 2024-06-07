
$(document).ready(function(){
  cargarContenido();
  function cargarContenido() {
    $('.inclusion').each(function(){
    var url=$(this).attr("data-file"); 
    var idelement=$(this).attr("id"); 
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        success: function (data) {
          $("#" + idelement).html(data);
        },
        error: function () {
          $("#" + idelement).html('<p>Error al cargar el contenido..</p>');
        }
    });
  });    
}
});
