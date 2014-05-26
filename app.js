$(document).ready(function() {
	var pathname = $(location).attr('href');
	var shareface = 'facebook'+pathname;
	var contenedor = '<div id="shareappcont"></div>';
	$('body').append(contenedor);
	var ventana = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close cierrapp" >&times;</button><h4 class="modal-title" id="myModalLabel">Compartir</h4></div><div class="modal-body">'+shareface+'</div></div></div></div>';
	//alert("hola");
	$('#shareappcont').html(ventana);
	var lamodal = $('#myModal');

    lamodal.modal('show');

      $('.cierrapp').click(function(){
      		//lamodal.modal('hide');
      		lamodal.animate({
			    left: "+=80%",
			    top:"+=50%",
			    height: "50%",
			    width: "50%"
			  }, 1000, function() {
			    // Animation complete.
			    lamodal.modal('hide');

      		})

      });
});
