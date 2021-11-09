//#include("./_nextParticleLib.js");
document.addEventListener('DOMContentLoaded', function() { //DOM-ready callback
    var img = document.querySelector('.nextParticle__image');
    var particle = document.querySelector('.nextParticle');
    var nextParticle = new NextParticle({
        image: img,
        addTimestamp: true,
        mouseForce: 200,
        gravity: 0.07,
        particleGap: window.innerWidth > 1200 ? 2 : 1,
        particleSize: 2,
        width: window.innerWidth,
        height: window.innerHeight
    });
    particleStart();

    function particleSize() {
        nextParticle.size = Math.max(window.innerWidth, window.innerHeight);

        nextParticle.colorize = false;
        nextParticle.tint = '#1c1c1c';
        // nextParticle.tint = 'rgba(44,116,186,0.25)';

        nextParticle.minWidth = nextParticle.size;
        nextParticle.minHeight = nextParticle.size;
        nextParticle.maxWidth = nextParticle.size;
        nextParticle.maxHeight = nextParticle.size;
        nextParticle.width = window.innerWidth;
        nextParticle.height = window.innerHeight;

        nextParticle.particleGap = window.innerWidth > 1200 ? 2 : 1;

    }
    function redraw() {
        nextParticle.initPosition = "random";
        nextParticle.initDirection = "random";
        nextParticle.fadePostion = "random";
        nextParticle.fadeDirection = "random";

        nextParticle.color = nextParticle.colorize ? nextParticle.tint : '';

        particleSize();

        nextParticle.start();

        particle.classList.remove('active');
        particle.classList.add('active');


    }

    window.addEventListener('resize', redraw);

    function particleStart() {
        try {
            particleSize();
            redraw();
            // console.log('success');
        } catch (e) {
            // console.log('error', e);
            setTimeout(()=>{
                particleStart();
            }, 50);
        }
    }

});

