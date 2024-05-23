document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  let isPlayingAudio = false;

  const audio2 = document.getElementById('audio2');
  let isPlayingAudio2 = false;

  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', () => {
    if (!isPlayingAudio) {
      audio.play();
      playButton.textContent = 'Hentikan Suara';
      isPlayingAudio = true;
    } else {
      audio.pause();
      playButton.textContent = 'Putar Suara';
      isPlayingAudio = false;
    }
  });

  const loveButton = document.getElementById('loveButton');
  const heart = document.getElementById('heart');
  let isActivated = false;

  loveButton.addEventListener('click', () => {
    if (isActivated) {
      isActivated = false;
      loveButton.style.backgroundColor = '#F44336';
      heart.style.fill = 'white';
      heart.style.animation = '';
      audio2.pause();
      audio2.currentTime = 0; // Reset audio to the start
      isPlayingAudio2 = false;
    } else {
      isActivated = true;
      loveButton.style.backgroundColor = '#E71C23';
      heart.style.fill = '#F44336';
      heart.style.animation = 'heartOutlineAnimation 1.2s ease infinite';
      
      if (isPlayingAudio2) {
        audio2.pause();
        audio2.currentTime = 0; // Reset audio to the start
        audio2.play();
      } else {
        audio2.play();
        isPlayingAudio2 = true;
      }
    }
  });
});