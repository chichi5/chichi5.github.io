window.console = window.console || function (t) { };


if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}


// Variables
var player1,
    card1 = document.querySelector('.card-v'),
    play1 = document.querySelector('.card-play-v'),
    video1 = document.querySelector('.card-video-v');

var player2,
    card2 = document.querySelector('.card-w'),
    play2 = document.querySelector('.card-play-w'),
    video2 = document.querySelector('.card-video-w');

var player3,
    card3 = document.querySelector('.card-x'),
    play3 = document.querySelector('.card-play-x'),
    video3 = document.querySelector('.card-video-x');

// Shine effect
card1.onmousemove = function (e) {
    const x = e.pageX - card1.offsetLeft;
    const y = e.pageY - card1.offsetTop;

    card1.style.setProperty('--x', x + 'px');
    card1.style.setProperty('--y', y + 'px');
};

card2.onmousemove = function (f) {
    const a = f.pageX - card2.offsetLeft;
    const b = f.pageY - card2.offsetTop;

    card2.style.setProperty('--x', a + 'px');
    card2.style.setProperty('--y', b + 'px');
};

card3.onmousemove = function (g) {
    const c = g.pageX - card3.offsetLeft;
    const d = g.pageY - card3.offsetTop;

    card3.style.setProperty('--x', c + 'px');
    card3.style.setProperty('--y', d + 'px');
};

// Youtube API
function onYouTubePlayerAPIReady() {
    player1 = new YT.Player('video-v', {
        events: {
            'onReady': onPlayerReady
        }
    });

    player2 = new YT.Player('video-w', {
        events: {
            'onReady': onPlayerReady
        }
    });

    player3 = new YT.Player('video-x', {
        events: {
            'onReady': onPlayerReady
        }
    });
}


// Player Ready
function onPlayerReady(event) {
    play1.addEventListener('click', function () {
        card1.classList.add('video-is-open-v');
        setTimeout(function () {
            video1.style.display = 'block';
            player1.playVideo();
        }, 500);
    });

    play2.addEventListener('click', function () {
        card2.classList.add('video-is-open-w');
        setTimeout(function () {
            video2.style.display = 'block';
            player2.playVideo();
        }, 500);
    });

    play3.addEventListener('click', function () {
        card3.classList.add('video-is-open-x');
        setTimeout(function () {
            video3.style.display = 'block';
            player3.playVideo();
        }, 500);
    });
}





// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);