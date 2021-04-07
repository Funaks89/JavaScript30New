// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

// build functions
const hello = () => {
  "Hello World!";
}

const togglePlay = () => {
  const method = video.paused ? 'play' : 'pause';
  return video[method]();
}


// hook up the event listeners
video.addEventListener('click', togglePlay);
console.log(video);