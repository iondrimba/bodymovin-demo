(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        console.log('app', window);
    }

    _createClass(App, [{
        key: 'setup',
        value: function setup() {
            var _this = this;

            var animData = {
                container: document.getElementById('bodymovin'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                autoloadSegments: true,
                rendererSettings: {
                    progressiveLoad: true
                },
                path: 'js/BonequinhoFalando.json'
            };
            this.anim = bodymovin.loadAnimation(animData);

            this.btnPlay = document.getElementsByClassName('btn-play')[0];
            this.btnRestart = document.getElementsByClassName('btn-restart')[0];
            this.btnPause = document.getElementsByClassName('btn-pause')[0];
            this.btnRewind = document.getElementsByClassName('btn-rewind')[0];

            this.anim.addEventListener('DOMLoaded', function () {
                console.log('DOMLoaded');
                _this.anim.removeEventListener('DOMLoaded');
            });

            this.anim.addEventListener('onComplete', function () {
                console.log('complete');
            });

            this.anim.addEventListener('onLoopComplete', function () {
                console.log('loopComplete');
            });

            this.anim.addEventListener('onSegmentStart', function () {
                console.log('segmentStart');
            });

            this.btnRestart.onclick = function () {
                _this.restart();
            };

            this.btnPlay.onclick = function () {
                _this.play();
            };

            this.btnPause.onclick = function () {
                _this.pause();
            };
            this.btnRewind.onclick = function () {
                _this.rewind();
            };
        }
    }, {
        key: 'restart',
        value: function restart() {
            this.anim.goToAndStop(0);
            this.anim.setDirection(1);
            this.anim.play();
        }
    }, {
        key: 'play',
        value: function play() {
            this.anim.play();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.anim.pause();
        }
    }, {
        key: 'rewind',
        value: function rewind() {
            this.anim.setDirection(-1);
        }
    }]);

    return App;
}();

window.onload = function () {
    var app = new App();
    setTimeout(function () {
        app.setup();
    }, 1000);
};

},{}]},{},[1]);
