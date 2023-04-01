// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// const data = function (data) {
//     localStorage.setItem('videoplayer-current-time', data.seconds);
// };

// player.on('timeupdate', throttle(data, 1000));

// const timeBeforeFailure = Number(
//     localStorage.getItem('videoplayer-current-time')
// );


// player.setCurrentTime(timeBeforeFailure).catch(function (error) {
//     switch (error.name) {
//         case 'RangeError':
//         console.log('range error!');
//         break;

//         default:
//         console.log('error!');
//         break;
//     }
// });

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl=document.querySelector("#vimeo-player")
// let throttle = require('lodash.throttle')

const player = new Player(iframeEl,
    {
    id: 19231868,
    width: 640
    }
);

player.on('timeupdate', throttle(function(data) {
    let timeOnPlayer = data.seconds;
    try {
        localStorage.setItem("videoplayer-current-time", timeOnPlayer);
    } catch (error) {
        console.log("Sorry, we have some problem with player:", error.name);
    }
}, 1000));


if (localStorage.getItem("videoplayer-current-time")) { 
    player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
}