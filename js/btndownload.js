var rID = null;

var load = function(el, s, t) {
	var perc, k = 2;
	
	if(t%k === 0) {
		perc = t/k;
		el.dataset.perc = perc + '%';
		el.style.backgroundSize = 
			s.replace(/0px/g, el.dataset.perc);
		
		if(perc === 100) {
			cancelAnimationFrame(rID);
			rID = null;
			return;
		}
	}
	
	rID = requestAnimationFrame(
		load.bind(this, el, s, ++t)
	);
};

document.querySelector('button')
	.addEventListener('click', function() {
	var s;
	
	if(!rID) {
		this.classList.toggle('loading');
		s = getComputedStyle(this).backgroundSize;
		if(this.classList.contains('loading'))
			load(this, s, 0);
		else {
			this.dataset.perc = 
			this.style.backgroundSize = ''
		}
	}
}, false);