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
        bodymovin.loadAnimation(animData);
    }
}

window.onload = () => {
    let app = new App();
    setTimeout(()=>{
        app.setup();
    }, 1000)
}

