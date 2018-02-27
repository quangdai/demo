$( document ).ready(function() {

	// menu
	var btn_mobile = $('.btn-nav-mobile');
	btn_mobile.click(function(){
		$(this).parent('.header').toggleClass('active');
		$(this).parent('.header').siblings('#nav').toggleClass('active');
		$(this).parent('.header').siblings('.main-content').toggleClass('hidden');
	});
	$('.current-item').parents('.nav-parent__item').addClass('current-parent');

	// code style
	$('.code-content').each(function(i, block) {
	  	hljs.highlightBlock(block);
	});
	hljs.configure({useBR: true});

	// tab
	var tab_control = $('.tab-control .control-item');
	$(tab_control).on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		var data_tab = $(this).attr('data-tab');
		$('#'+data_tab+'').addClass('active').siblings().removeClass('active');
	});

 	$.fn.myfunction = function() {
 		var width_drive = $(window).width();
		if( width_drive < 992){
			$('[data-oder]').each(function( index ) {
			  	var x = $(this).attr("data-oder");
			  	var get_tem = $('.tab-content.active [data-swap="'+ x +'"]').html();
				$(this).children().remove();
			  	$(this).append(get_tem);
			});
		}
      	return this;
   	}; 
   	$(document).myfunction();
   	$(tab_control).on('click', function(){
		$(document).myfunction();
	});
});