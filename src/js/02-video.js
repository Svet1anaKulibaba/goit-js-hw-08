import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// console.log('player', player);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// player.on('play', function ({ duration, percent, seconds }) {

// });
const showSeconds = throttle(({ seconds }) => {
    console.log('seconds', seconds);
}, 3000)
player.on('timeupdate', showSeconds);


player.setCurrentTime(30.456)

  

      





// player
//   .requestFullscreen()
//   .then(function () {
//     // the player entered fullscreen
//   })
//   .catch(function (error) {
//     // an error occurred
//   });