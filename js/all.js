$(document).ready(function(){
	/*Rating component*/
	$('.rating-component').each(function(){ //если несколько рейтингов на странице
		showRating(this);
	});
	$('.rating-component__stars li').on({
		mouseover: function(){
			$(this).prevAll().andSelf().addClass('hover');
		},
		mouseout: function(){
			$(this).prevAll().andSelf().removeClass('hover');
		},
		click: function(){
			$(this).parent().parent().data('rating', $($(this).parent().find('li')).index(this) + 1);
			showRating($(this).parent().parent());
		}
	});
	
	/*Progressbar component*/
	$('.progress-component').each(function(){
		$(this).find('.progress-component__value').html($(this).find('progress').val() + '%');
	});
});

function showRating(el){
	stars = $(el).find('.rating-component__stars li');
	stars.removeClass('current');
	for(i = 0; i < $(el).data('rating'); i ++){
		stars.eq(i).addClass('current');
	}
}