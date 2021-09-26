const particleID = document.querySelector('#particles-js');
if (particleID) {
    particlesJS.load('particles-js', './particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
}
