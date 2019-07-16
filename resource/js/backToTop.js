(function () {
	function trackScroll() {
		var scrolled = window.pageYOffset;
		var coords = document.documentElement.clientHeight;
		
		if (scrolled > coords) {
			goTopBtn.classList.add('back_to_top-show');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('back_to_top-show');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			var times = setTimeout(backToTop, 10);
			// console.log('oke');
		} else {
			clearTimeout(times)
		}
	}

	var goTopBtn = document.querySelector('.back_to_top');

	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */
