(function(){
  var d=document.documentElement;d.classList.add('js');
  var still=matchMedia('(prefers-reduced-motion: reduce)');
  var els=document.querySelectorAll('.reveal');
  if(still.matches||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -10% 0px'});
  els.forEach(function(e){io.observe(e)});
  var layers=document.querySelectorAll('[data-depth]'),t=0;
  addEventListener('scroll',function(){if(t)return;t=requestAnimationFrame(function(){var y=scrollY;if(y<innerHeight*1.2)layers.forEach(function(l){l.style.transform='translate3d(0,'+(y*l.dataset.depth)+'px,0)'});t=0})},{passive:true});
})();
