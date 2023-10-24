/* start header */
$(document).ready(function() {
	$('.header__burger').click(function () {
		$('.header__popup').addClass('js-active')
	})
	$('.header__popup-close').click(function () {
		$('.header__popup').removeClass('js-active')
	})
})
/* end header */

/* start galary */
$(document).ready(function() {
	$('.item-gallary__like').click(function () {
		$(this).children('.item-gallary__like-icon').toggleClass('js-active')
	})
})

var initial_items = 3;
var next_items = 3;
var $gallary__grid = $('#gallary__grid').isotope({
	itemSelector: '.gallary__item',
	layoutMode: 'fitRows',
	fitRows: {
		gutter: 0
	}
});
function showNextItems(pagination) {
	var itemsMax = $('.visible_item').length;
	var itemsCount = 0;
	$('.visible_item').each(function () {
		if (itemsCount < pagination) {
			$(this).removeClass('visible_item');
			itemsCount++;
		}
	});
	if (itemsCount >= itemsMax) {
		$('#gallary__show-more').hide();
	}
	$gallary__grid.isotope('layout');
}

function hideItems(pagination) {
	var itemsMax = $('.gallary__item').length;
	var itemsCount = 0;
	$('.gallary__item').each(function () {
		if (itemsCount >= pagination) {
			$(this).addClass('visible_item');
		}
		itemsCount++;
	});
	if (itemsCount < itemsMax || initial_items >= itemsMax) {
		$('#gallary__show-more').hide();
	}
	$gallary__grid.isotope('layout');
}
$('#gallary__show-more').on('click', function (e) {
	e.preventDefault();
	showNextItems(next_items);
});
hideItems(initial_items);



Fancybox.bind("[data-fancybox]", {
	tpl: {
		main: 
		`<div class="fancybox__container has-sidebar" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__cols">
				<div class="fancybox__col">
					<div class="fancybox__carousel"></div>
					<div class="fancybox__footer"></div>
				</div>
				<div class="fancybox__col">
					<div class="fancybox__data">
						<div class="fancybox-mybody">
							<div class="fancybox-mybody__row">
								<div class="fancybox-mybody__title"> <span class="fancybox-mybody__title-1">МАРИО КАРУЗЗО</span><span class="fancybox-mybody__title-2">STUDIO MONBLANC</span></div>
								<div class="fancybox-mybody__text">Цель проекта — создать универсальную площадку, где профессионалы из разных уголков нашей страны смогут представить свои проекты. Выбрать лучшие работы и собрать лучших дизайнеров и архитекторов, которые войдут в золотой фонд российской интерьерной индустрии.</div>
							</div>
							<div class="fancybox-mybody__share">
								<div class="fancybox-mybody__share-title">поделиться</div>
								<div class="fancybox-mybody__share-icons">
										<a href="" class="fancybox-mybody__share-icon"><img src="images/gallary/icon1.png" alt="alt" /></a>
										<a href="" class="fancybox-mybody__share-icon"><img src="images/gallary/icon2.png" alt="alt" /></a>
										<a href="" class="fancybox-mybody__share-icon"><img src="images/gallary/icon3.png" alt="alt" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`
	},
});
var fancyboxMyBody = $('.fancybox-mybody-hidden').html()
var fancybox__content = $('.fancybox__caption')
$.each(fancybox__content,function(index,value){
	$(this).append(fancyboxMyBody);
});
/* end galary */
$( '[data-fancybox="gallery"]' ).fancybox({
	caption : function( instance, item ) {
		return $(this).find('.fancybox-mybody-hidden').html();
	}
});