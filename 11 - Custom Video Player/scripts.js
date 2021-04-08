// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
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

const updateButton = (e) => {
  const icon = e.currentTarget.paused ? '►' : '❚ ❚';

  console.log(icon)
  toggle.textContent = icon
}

const skip = (e) => {
  video.currentTime += parseFloat(e.currentTarget.dataset.skip)
  console.log(e.currentTarget.dataset)
}

const handleRangeUpdate = (e) => {
  video[e.currentTarget.name] = e.currentTarget.value
  console.log(e.currentTarget.name)
  console.log(e.currentTarget.value)
}

const handleProgress = (e) => {
  const percent = (video.currentTime / video.duration) * 100;
  //console.log(progressBar);
  progressBar.style.flexBasis = `${percent}%`;

}

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime
  console.log(e);
}
// hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);