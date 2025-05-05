document.addEventListener('DOMContentLoaded', function() {
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
  });
  
  // Add resize event listener to ensure particles canvas is responsive
  window.addEventListener('resize', function() {
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
      window.pJSDom[0].pJS.fn.vendors.densityAutoParticles();
    }
  });
}); 