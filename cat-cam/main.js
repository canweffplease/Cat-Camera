document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('video');
  const errorMsgElement = document.getElementById('errorMsg');

  const constraints = {
    audio: false,
    video: {
      width: 1280, height: 720
    }
  };

  async function init() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = stream;
    } catch (e) {
      errorMsgElement.textContent = `Error accessing the media devices: ${e.toString()}`;
    }
  }
  init();
});
