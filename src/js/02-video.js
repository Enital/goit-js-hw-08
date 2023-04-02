const iframeEl=document.querySelector("#vimeo-player")
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player(iframeEl);

player.on('timeupdate', throttle(function(data) {
    let timeOnPlayer = data.seconds;
    try {
        localStorage.setItem("videoplayer-current-time", timeOnPlayer);
    } catch (error) {
        console.log("Sorry, but some problem with player:", error.name);
    }
}, 1000));


if (localStorage.getItem("videoplayer-current-time")) { 
    player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
}