class App {
    constructor() {
        console.log('app', window);
    }
    setup() {
        let animData = {
            container: document.getElementById('bodymovin'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                autoloadSegments: true,
                rendererSettings: {
                progressiveLoad:false
            },
            path: 'js/BonequinhoFalando.json'
        };
        this.anim = bodymovin.loadAnimation(animData);

        this.btnPlay  = document.getElementsByClassName('btn-play');
        this.btnStop  = document.getElementsByClassName('btn-stop');
        this.btnRewind  = document.getElementsByClassName('btn-rewind');

        bodymovin.onComplete = () => {
            console.log('complete');
        }
        bodymovin.onLoopComplete = () => {
            console.log('loopComplete');
        }
        bodymovin.segmentStart = () => {
            console.log('segmentStart');
        }
    }
    play() {
        this.anim.play();
    }
    stop() {
        this.anim.stop();
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

