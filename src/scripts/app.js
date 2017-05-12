import motionData from './BonequinhoFalando.json';

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
            autoloadSegments: false,
            rendererSettings: {
                progressiveLoad:true
            },
            animationData: motionData
        };
        this.anim = bodymovin.loadAnimation(animData);
        this.btnPlay  = document.getElementsByClassName('btn-play')[0];
        this.btnRestart  = document.getElementsByClassName('btn-restart')[0];
        this.btnPause  = document.getElementsByClassName('btn-pause')[0];
        this.btnRewind  = document.getElementsByClassName('btn-rewind')[0];
        this.body = document.getElementById('bodymovin');

        this.anim.addEventListener('DOMLoaded',() => {
            console.log('DOMLoaded');
           this.anim.removeEventListener('DOMLoaded');

        //    window.addEventListener('mousemove', (ev) => {
        //     var ax = (window.innerWidth /2 - ev.pageX)/20;
        //     var ay = (window.innerHeight /2 - ev.pageY)/10;
        //     this.body.setAttribute('style', 'transform = rotateY('+ax+'deg) rotateX('+ay+'deg);-webkit-transform: rotateY('+ax+'deg) rotateX('+ay+'deg);');
        //    });

        });

        this.anim.addEventListener('complete',() => {
            console.log('complete');
        });

        this.anim.addEventListener('loopComplete', () => {
            console.log('loopComplete');
        });

        this.anim.addEventListener('segmentStart', () => {
            console.log('segmentStart');
        });

        this.btnRestart.onclick = ()=> {
            this.restart();
        };

        this.btnPlay.onclick = ()=> {
            this.play();
        };

        this.btnPause.onclick = ()=> {
            this.pause();
        };
        this.btnRewind.onclick = ()=> {
            this.rewind();
        };
    }
    restart() {
        this.anim.goToAndStop(0);
        this.anim.setDirection(1);
        this.anim.play();
    }
    play() {
        this.anim.setDirection(1);
        this.anim.play();
    }
    pause() {
        this.anim.pause();
    }
    rewind() {
        this.anim.setDirection(-1);
        this.anim.play();
    }
}

window.onload = () => {
    let app = new App();
    setTimeout(()=>{
        app.setup();
    }, 1000)
}

