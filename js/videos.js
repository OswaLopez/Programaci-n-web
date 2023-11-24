/*document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
  
    videoThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const videoId = this.dataset.videoId;
        const videoFrame = document.getElementById('video-frame');
        const videoPopup = document.getElementById('video-popup');
  
        videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        videoPopup.style.display = 'flex';
      });
    });
  
    const closePopup = document.querySelector('.close-popup');
    const videoPopup = document.getElementById('video-popup');
  
    closePopup.addEventListener('click', function() {
      const videoFrame = document.getElementById('video-frame');
      videoFrame.src = '';
      videoPopup.style.display = 'none';
    });
  });

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }*/

    // Evento para detectar clics en los iframes de video
    document.addEventListener('DOMContentLoaded', function() {
      // Obtener todos los iframes
      const iframes = document.querySelectorAll('.video iframe');
  
      // Recorrer todos los iframes y añadir el evento clic
      iframes.forEach(iframe => {
          iframe.addEventListener('click', function() {
              const videoPopup = document.createElement('div');
              videoPopup.classList.add('video-popup');
  
              const videoIframe = document.createElement('iframe');
              videoIframe.src = iframe.src;
              videoIframe.title = iframe.title;
              videoIframe.frameBorder = 0;
              videoIframe.allowFullscreen = true;
  
              videoPopup.appendChild(videoIframe);
              document.body.appendChild(videoPopup);
  
              videoPopup.addEventListener('click', function() {
                  videoPopup.remove();
              });
          });
      });
  });

  

  document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
  
    videoThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const videoId = this.dataset.videoId;
        const videoFrame = document.getElementById('video-frame');
        const videoPopup = document.getElementById('video-popup');
  
        videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        videoPopup.style.display = 'flex';
      });
    });
  
    const closePopup = document.querySelector('.close-popup');
    const videoPopup = document.getElementById('video-popup');
  
    closePopup.addEventListener('click', function() {
      const videoFrame = document.getElementById('video-frame');
      videoFrame.src = '';
      videoPopup.style.display = 'none';
    });
  });

  
  