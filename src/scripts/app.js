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
                progressiveLoad:true
            },
            path: 'js/BonequinhoFalando.json'
        };
        this.anim = bodymovin.loadAnimation(animData);

        this.btnPlay  = document.getElementsByClassName('btn-play')[0];
        this.btnRestart  = document.getElementsByClassName('btn-restart')[0];
        this.btnPause  = document.getElementsByClassName('btn-pause')[0];
        this.btnRewind  = document.getElementsByClassName('btn-rewind')[0];

        this.anim.addEventListener('DOMLoaded',() => {
            console.log('DOMLoaded');
           this.anim.removeEventListener('DOMLoaded');
        });

        this.anim.addEventListener('onComplete',() => {
            console.log('complete');
        });

        this.anim.addEventListener('onLoopComplete', () => {
            console.log('loopComplete');
        });

        this.anim.addEventListener('onSegmentStart', () => {
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
        this.anim.play();
    }
    pause() {
        this.anim.pause();
    }
    rewind() {
        this.anim.setDirection(-1);
    }
}

window.onload = () => {
    let app = new App();
    setTimeout(()=>{
        app.setup();
    }, 1000)
}

