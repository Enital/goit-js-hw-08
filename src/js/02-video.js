const iframeEl=document.querySelector("#vimeo-player")
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player(iframeEl);

function saveTime() {
    let playTime = data.seconds;
    try {
        localStorage.setItem("videoplayer-current-time", playTime);
    } catch (error) {
        console.log("Sorry, but some problem with player:", error.name);
    }
}
player.on('timeupdate', throttle(saveTime, 1000));


if (localStorage.getItem("videoplayer-current-time")) { 
    player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
}
