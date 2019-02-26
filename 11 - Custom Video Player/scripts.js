/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const screenSize = player.querySelector('.player_size');

/* Build out functions */

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();

  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
}

function toggleIcon() {
  
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  // player.requestFullscreen();
}

function skipVideo() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.log(this.value);
  video[this.name] = this.value;
  
}

function handleProgress() {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / video.offsetWidth) * video.duration;
  video.currentTime = scrubTime; 
}

function toggleSize() {
  // console.log('yo');
  
  // player.classList.add('fullscreen');
  // var elem = document.getElementById("myvideo");
  if (player.requestFullscreen) {
    player.requestFullscreen();
  }
  // console.log(player.offsetWidth + " window " + window.outerWidth );

  // if (player.offsetWidth === window.outerWidth) {

  // }
  
  
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);


skipButtons.forEach(skip => skip.addEventListener('click', skipVideo));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
screenSize.addEventListener('click', toggleSize);