//#include("./_nextParticleLib.js");

document.addEventListener('DOMContentLoaded', function() { //DOM-ready callback
    let proton;
    let canvas;
    let context;
    let renderer;
    let logoZone;
    let emitter;
    let imageDatas;
    let rect, rect2;
    let randomBehaviour, gravityWellBehaviour;
    let rootIndex = 1;
    main()
    function main() {

        canvas = document.getElementById("testCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context = canvas.getContext('2d');

        imageDatas = [];
        rect = new Proton.Rectangle((canvas.width - canvas.width / 2) / 2, (canvas.height - canvas.height / 2) / 2, canvas.width, canvas.height);
        rect2 = new Proton.Rectangle(rect.x - 100, rect.y - 100, rect.width + 200, rect.height + 200);
        randomBehaviour = new Proton.RandomDrift(0, 0, 0.05);
        var rectZone = new Proton.RectZone(rect2.x, rect2.y, rect2.width, rect2.height);
        crossBehaviour = new Proton.CrossZone(rectZone, 'bound');
        gravityWellBehaviour = new Proton.GravityWell({
            x: canvas.width ,
            y: canvas.height
        }, 0, 0);

        canvas.addEventListener('mousedown', mouseDownHandler, false);
        loadImage();
    }

    function loadImage() {
        logoZone = [];
        var logo = [];
        var loader = new PxLoader();
        logo[0] = loader.addImage('assets/image/nextParticle/particle.png');
        logo[1] = loader.addImage('assets/image/nextParticle/particle.png');

        loader.addCompletionListener(function() {

            for (var i = 0; i < 2; i++) {
                var imagedata = Proton.Util.getImageData(context, logo[i], rect);
                logoZone.push(new Proton.ImageZone(imagedata, rect.x, rect.y));
                imageDatas.push(imagedata);
            }
            createProton(rect);
            tick();
        });
        loader.start();
    }

    function createProton() {
        proton = new Proton;
        emitter = new Proton.Emitter();
        emitter.rate = new Proton.Rate(new Proton.Span(3000), new Proton.Span(0.1));
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.P(new Proton.RectZone(rect2.x, rect2.y, rect2.width, rect2.height)));

        emitter.addBehaviour(randomBehaviour);
        emitter.addBehaviour(customToZoneBehaviour(logoZone[0], logoZone[1]));
        emitter.addBehaviour(crossBehaviour);
        emitter.addBehaviour(gravityWellBehaviour);

        emitter.emit('once');
        proton.addEmitter(emitter);

        renderer = new Proton.PixelRenderer(canvas);
        renderer.createImageData(rect2);
        proton.addRenderer(renderer);
    }

    function customToZoneBehaviour(zone1, zone2) {
        return {
            initialize: function(particle) {
                particle.R = Math.random() * 10;
                particle.Angle = Math.random() * Math.PI * 2;
                particle.speed = Math.random() * (-2) + 1;
                particle.zones = [zone1.getPosition().clone(), zone2.getPosition().clone()];
                particle.colors = getColor(particle.zones);
            },

            applyBehaviour: function(particle) {
                if (rootIndex % 2 != 0) {
                    particle.v.clear();
                    particle.Angle += particle.speed;
                    var index = (rootIndex % 4 + 1) / 2 - 1;
                    var x = particle.zones[index].x + particle.R * Math.cos(particle.Angle);
                    var y = particle.zones[index].y + particle.R * Math.sin(particle.Angle);

                    particle.p.x += (x - particle.p.x) * 0.05;
                    particle.p.y += (y - particle.p.y) * 0.05;
                    particle.rgb.r = particle.colors[index].r;
                    particle.rgb.g = particle.colors[index].g;
                    particle.rgb.b = particle.colors[index].b;
                }
            }
        }

    }

    function getColor(posArr) {
        var arr = [];
        for (var i = 0; i < posArr.length; i++) {
            arr.push(logoZone[i].getColor(posArr[i].x, posArr[i].y));
        }
        return arr;
    }

    function mouseDownHandler(e) {
        rootIndex++;
        if (rootIndex % 2 == 0) {
            if (rootIndex % 4 == 2)
                randomBehaviour.reset(30, 30, 0.001);
            else
                gravityWellBehaviour.reset({
                    x: canvas.width / 2,
                    y: canvas.height / 2
                }, 3000, 500);
        } else {
            randomBehaviour.reset(0, 0, 0.001);
            gravityWellBehaviour.reset({
                x: canvas.width / 2,
                y: canvas.height / 2
            }, 0, 0);
        }
    }

    function tick() {
        requestAnimationFrame(tick);

        proton.update();
    }
});



