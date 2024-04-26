import './style.css'

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('form');

  var username;
  var password;
  
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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    username = document.getElementById('username').value;
    password = document.getElementById('pass').value;
    
    if (username === 'admin' && password==='admin'){
      video.style.display = 'block';
      form.style.display = 'none';
      init();
    }
  });
});
