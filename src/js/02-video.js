import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time"

const showSeconds = throttle(({ seconds }) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds))
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}, 1000);

player.on('timeupdate', showSeconds);


player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY))||0);

  

      





