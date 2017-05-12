import bodyMovin from './bodymovin.js';

class App {
    constructor() {
        console.log('app');
        console.log('bodyMovin', bodyMovin);
    }

    setup() {
        let animData = {
            container: document.getElementsByClassName('bodymovin'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                autoloadSegments: true,
                rendererSettings: {
                progressiveLoad:false
            },
            path: 'js/BonequinhoFalando.json'
        };
        bodyMovin.loadAnimation(animData);
    }
}

let app = new App();
app.setup();