import motionData from './tutorial.json';
import motionData2 from './Carinhas.json';

class App {
    constructor() {
        console.log('app', window);
    }
    setup() {
        let animData = {
            container: document.getElementById('bodymovin'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            autoloadSegments: true,
            rendererSettings: {
                progressiveLoad: false
            },
            animationData: motionData
        };

        let animData2 = {
            container: document.getElementById('bodymovin2'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            autoloadSegments: true,
            rendererSettings: {
                progressiveLoad: false
            },
            animationData: motionData2
        };

        this.anim2 = bodymovin.loadAnimation(animData2);

        this.index = 0;
        this.index2 = 0;
        this.anim = bodymovin.loadAnimation(animData);

        this.btnPrev = document.getElementsByClassName('btn-prev')[0];
        this.btnNext = document.getElementsByClassName('btn-next')[0];
        this.segments = [];
        this.segments[0] = [0, 26];
        this.segments[1] = [26, 79];
        this.segments[2] = [79, 110];
        this.segments[3] = [110, 155];

        this.btnPrev2 = document.getElementsByClassName('btn-prev2')[0];
        this.btnNext2 = document.getElementsByClassName('btn-next2')[0];
        this.segments2 = [];
        this.segments2[0] = [0, 80];
        this.segments2[1] = [80, 200];

        this.anim.addEventListener('DOMLoaded', () => {
            console.log('DOMLoaded');
            this.anim.removeEventListener('DOMLoaded');
        });

        this.anim.addEventListener('complete', () => {
            console.log('complete');
            this.btnNext.removeAttribute('disabled');
            this.btnPrev.removeAttribute('disabled');
            this.btnNext2.removeAttribute('disabled');
            this.btnPrev2.removeAttribute('disabled');
        });

        this.anim.addEventListener('loopComplete', () => {
            console.log('loopComplete');
        });

        this.anim.addEventListener('segmentStart', () => {
            console.log('segmentStart');
            this.btnNext.setAttribute('disabled', true);
            this.btnPrev.setAttribute('disabled', true);
            this.btnNext2.setAttribute('disabled', true);
            this.btnPrev2.setAttribute('disabled', true);
        });


        this.btnNext.onclick = () => {
            var s = this.segments[this.index];
            var [a, b] = s;
            this.index++;
            this.anim.playSegments([a, b], this.index < 3);
        };

        this.btnPrev.onclick = () => {
            this.index--;
            var s = this.segments[this.index];
            var [a, b] = s;
            this.anim.playSegments([b, a], true);
        };

        this.btnNext2.onclick = () => {
            var s = this.segments2[this.index2];
            var [a, b] = s;
            this.index2++;
            this.anim2.playSegments([a, b], this.index2 < 2);
        };

        this.btnPrev2.onclick = () => {
            this.index2--;
            var s = this.segments2[this.index2];
            var [a, b] = s;
            this.anim2.playSegments([b, a], true);
        };
    }
}

window.onload = () => {
    let app = new App();
    setTimeout(() => {
        app.setup();
    }, 1000)
}

