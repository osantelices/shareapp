$(document).ready(function() {
	var pathname = $(location).attr('href');
	var shareface = pathname;
	var contenedor = '<div id="shareappcont"></div>';
	$('body').append(contenedor);
	var ventana = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close cierrapp" >&times;</button><h4 class="modal-title" id="myModalLabel">Compartir</h4></div><div class="modal-body"><a href="http://www.facebook.com/share.php?u='+pathname+'"><img src="http://farm4.staticflickr.com/3683/14088505217_0ce9a4dc50_b.jpg" /></a><a href="https://twitter.com/share"><img src="http://farm4.staticflickr.com/3784/14088432729_ba506f0133_b.jpg" /></a><a href="https://plus.google.com/share?url='+pathname+'"><img src="http://farm6.staticflickr.com/5489/14271773261_0a6b15a2d4_b.jpg" /></a><a href="https://www.linkedin.com/cws/share?url='+pathname+'"><img src="http://farm4.staticflickr.com/3724/14273030992_680731f1b1_b.jpg" /></a><a href="http://www.pinterest.com/pin/create/bookmarklet/?media='+pathname+'"><img src="http://farm3.staticflickr.com/2918/14089205378_5eb5a07f1f_b.jpg" /></a><div class="row"><label style="margin-left:16px;margin-top:15px;">Enlace</label><input style="width:80%;margin-top:0px;margin-left:18px;" class="form-control" type="text" value="'+pathname+'" /></div><div class="row powered" style="margin-top:10px;margin-bottom:-20px;"><small style="color:#ccc;float:right;">powered by <a style="color:#999" href="http://www.antgle.com">antgle.com</a></small></div></div></div></div></div>';
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
