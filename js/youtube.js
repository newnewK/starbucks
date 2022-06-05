// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
  new YT.Player('player', {
      //videId : 유튜브 영상에대한 아이디
      // youtube.com/watch?v=An6LvWQuj_8 :: = 는 뒤에 있는게 유튜브 아이디
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 아이디
    PlayerVars : {   //영상을 재생하기위한 여러가지 변수들
        autoplay : true, //자동 재생 유무
        loop : true, //반복 재생 유무
        playlist : 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록 (loop를 사용했을때 다음 유뷰트 아이디 필요)
    },
    events : {
        onReady : function (event) {
          event.target.mute() //mute 음소거
        }
    }
  });
}