$(document).ready(function() {
	var pathname = $(location).attr('href');
	var shareface = pathname;
	var contenedor = '<div id="shareappcont"></div>';
	$('body').append(contenedor);
	var ventana = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close cierrapp" >&times;</button><h4 class="modal-title" id="myModalLabel">Compartir</h4></div><div class="modal-body"><a href=""><img src="http://farm4.staticflickr.com/3683/14088505217_0ce9a4dc50_b.jpg" /></a><a href="https://twitter.com/share"><img src="http://farm4.staticflickr.com/3784/14088432729_ba506f0133_b.jpg" /></a><a href="https://plus.google.com/share?url='+pathname+'"><img src="http://farm6.staticflickr.com/5489/14271773261_0a6b15a2d4_b.jpg" /></a><a href=""><img src="http://farm4.staticflickr.com/3724/14273030992_680731f1b1_b.jpg" /></a><a href=""><img src="http://farm4.staticflickr.com/3806/14088559338_19a66c289b_b.jpg" /></a>'+shareface+'</div></div></div></div>';
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
