let play = document.getElementById('play');
let progressBar = document.getElementById('progress-bar');
let audio = new Audio('Audio/Bairan-Bairan-(128 kbps).mp3');
let currentSong = 1;

//  PLAY / PAUSE 

play.addEventListener('click', () => {

    if (audio.paused || audio.currentTime === 0) {

        audio.play();

        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');

    } else {

        audio.pause();

        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }

});

//PROGRESS BAR 

audio.addEventListener('timeupdate', () => {

    if (!isNaN(audio.duration) && audio.duration > 0) {

        let progress =
            (audio.currentTime / audio.duration) * 100;

        progressBar.value = progress;

        progressBar.style.background =
            `linear-gradient(to right, #21a600 ${progress}%, #333 ${progress}%)`;
    }

});

progressBar.addEventListener('input', function () {

    if (!isNaN(audio.duration) && audio.duration > 0) {

        let value = this.value;

        this.style.background =
            `linear-gradient(to right, #21a600 ${value}%, #333 ${value}%)`;

        audio.currentTime =
            (value * audio.duration) / 100;
    }

});
//  SONG DATA 
let songs = [

    
    {songName: 'Barsaat',songDes: 'Jo tu manne chod ke gya',songImage: 'assets/images/new1',songPath: 'assets/Audio/Barsaat.mp3.mpeg'  },
    {songName: 'Abhi Kuch dino se',songDes: 'Relaxing Song',songImage: 'assets/images/3.jpg',songPath: 'assets/Audio/akds.mpeg'  },
    {songName: 'BTS',songDes: 'DNA - Wins MV award ',songImage: 'assets/images/bts.jpg',songPath: 'assets/Audio/Bts.mp3' },
    {songName: 'Soft Tune',songDes: 'Sitar',songImage: 'assets/images/16.jpg',songPath: 'assets/Audio/16.mp3'  },
    {songName: 'Bairan',songDes: 'Gita bhi gai mane chati se lagayi manne',songImage: 'assets/images/8.jpg',songPath: 'assets/Audio/Bairan.mp3'  },
    {songName: 'Paaro',songDes: 'This is the description for song ',songImage: 'assets/images/9.jpg',songPath: 'assets/Audio/Paro.mp3'  },
    {songName: 'Agar Tum Saath Ho',songDes: 'This is the description for song ',songImage: 'assets/images/10.jpg',songPath: 'assets/Audio/atsh.mp3'  },
    {songName: 'Guitar',songDes: 'This is the description for song ',songImage: 'assets/images/11.jpg',songPath: 'assets/Audio/atsh.mp3'  },
    {songName: 'BTS',songDes: '',songImage: 'assets/images/bts.jpg',songPath: 'assets/Audio/Bts.mp3' },
    {songName: 'BTS',songDes: '',songImage: 'assets/images/bts.jpg',songPath: 'assets/Audio/Bts.mp3' },
    {songName: 'KK',songDes: '',songImage: 'assets/images/kk.jpg',songPath: 'assets/Audio/kk.mpeg'  },
    {songName: 'Arijit Singh',songDes: '',songImage: 'assets/images/arijit.webp',songPath: 'assets/Audio/atsh.mp3' },
    {songName: 'Justein Beiber',songDes: '',songImage: 'assets/images/justein.webp',songPath: 'assets/Audio/13.mp3'  },
    {songName: 'Ariana Grande',songDes: '',songImage: 'assets/images/ariana.webp',songPath: 'assets/Audio/14.mp3'  },
    {songName: 'Aditya Rikhari',songDes: '',songImage: 'assets/images/aditya.jpg',songPath: 'assets/Audio/Paro.mp3'  }, 
     {songName: 'Abhi Kuch Dino se',songDes: 'Calm Song',songImage: 'assets/images/new2.webp',songPath: 'assets/Audio/akds.mpeg'  },   
    {songName: 'Guitar',songDes: 'This is the description for song ',songImage: 'assets/images/17.jpg',songPath: 'assets/Audio/17.mp3'  },
    {songName: 'Tune',songDes: 'This is the description for song ',songImage: 'assets/images/18.jpg',songPath: 'assets/Audio/18.mp3'  },
     {songName: 'Lofi',songDes: 'This is the description for song ',songImage: 'assets/images/2.jpg',songPath: 'assets/Audio/2.mp3'  },
    {songName: 'Western',songDes: 'This is the description for song ', songImage: 'assets/images/1.jpg',songPath: 'assets/Audio/1.mp3' }
];
// SONG ORDER 

let order = [...songs];
//  MUSIC CARDS 

let allMusic = Array.from(
    document.getElementsByClassName('music-card')
);

allMusic.forEach((element, i) => {

    let songIndex = i % songs.length;

    let image = element.getElementsByTagName('img')[0];
    let title = element.getElementsByClassName('img-title')[0];
    let description =
        element.getElementsByClassName('img-description')[0];

    if (image) {
        image.src = songs[songIndex].songImage;
    }

    if (title) {
        title.innerText = songs[songIndex].songName;
    }

    if (description) {
        description.innerText =
            songs[songIndex].songDes;
    }

});
//  CLICK ON SONG CARD / PICTURE 

allMusic.forEach((card, i) => {

    card.addEventListener('click', (e) => {

        if (e.target.classList.contains('playMusic')) {
            return;
        }

        let index = i % songs.length;

        makeAllPlay();

        let button = card.querySelector('.playMusic');

        if (button) {
            button.classList.remove('fa-circle-play');
            button.classList.add('fa-circle-pause');
        }

        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');

        currentSong = index + 1;

        audio.src = songs[index].songPath;

        audio.currentTime = 0;

        audio.play();

        updateNowBar();

    });

});
//  CARD PLAY BUTTONS 
let playMusic = Array.from(
    document.getElementsByClassName('playMusic')
);

function makeAllPlay() {

    playMusic.forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    });

}

playMusic.forEach((element) => {

    element.addEventListener('click', (e) => {

        let index = parseInt(e.currentTarget.id);

        if (index >= 1 && index <= songs.length) {

            makeAllPlay();

            e.currentTarget.classList.remove('fa-circle-play');
            e.currentTarget.classList.add('fa-circle-pause');

            play.classList.remove('fa-circle-play');
            play.classList.add('fa-circle-pause');

            currentSong = index;

            audio.src = songs[index - 1].songPath;

            audio.currentTime = 0;

            audio.play();

            updateNowBar();
        }

    });

});

//  SHUFFLE / REPEAT 

let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');

let songOnShuffle = false;
let songOnRepeat = false;
//  NOW PLAYING BAR 
let nowBar = document.querySelector('.now-bar');
//  SHUFFLE FUNCTION 

function shuffleSongs(originalOrder) {

    let shuffled = [...originalOrder];

    for (let i = shuffled.length - 1; i > 0; i--) {

        let j =
            Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}
// SHUFFLE BUTTON 

shuffle.addEventListener('click', () => {

    if (!songOnShuffle) {

        songOnShuffle = true;
        songOnRepeat = false;

        shuffle.classList.add('active');
        repeat.classList.remove('active');

        order = shuffleSongs(songs);

    } else {

        songOnShuffle = false;

        shuffle.classList.remove('active');

        order = [...songs];
    }

});
// REPEAT BUTTON 
repeat.addEventListener('click', () => {

    if (!songOnRepeat) {

        songOnRepeat = true;
        songOnShuffle = false;

        repeat.classList.add('active');
        shuffle.classList.remove('active');

    } else {

        songOnRepeat = false;

        repeat.classList.remove('active');
    }

});
// NEXT SONG 

function playNextSong() {

    if (songOnRepeat) {

        audio.src =
            order[currentSong - 1].songPath;

    } else {

        let nextSong = currentSong + 1;

        if (nextSong > songs.length) {
            nextSong = 1;
        }

        currentSong = nextSong;

        audio.src =
            order[currentSong - 1].songPath;
    }

    audio.currentTime = 0;

    audio.play();

    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');

    updateNowBar();

}
//  PREVIOUS SONG 

function playPrevSong() {

    let prevSong = currentSong - 1;

    if (prevSong < 1) {
        prevSong = songs.length;
    }

    currentSong = prevSong;

    audio.src =
        order[currentSong - 1].songPath;

    audio.currentTime = 0;

    audio.play();

    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');

    updateNowBar();

}
//  UPDATE NOW BAR 
function updateNowBar() {

    if (!nowBar) {
        return;
    }

    let song = order[currentSong - 1];

    if (!song) {
        return;
    }

    let image = nowBar.getElementsByTagName('img')[0];

    let title = nowBar.getElementsByClassName('img-title-info')[0];

    let description =
        nowBar.getElementsByClassName('img-des-info')[0];

    if (image) {
        image.src = song.songImage;
    }

    if (title) {
        title.innerText = song.songName;
    }

    if (description) {
        description.innerText = song.songDes;
    }
}
//  NEXT / PREVIOUS BUTTON
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
if (forward) {
   forward.addEventListener('click', () => {
        playNextSong();
    });
}
if (backward) {
    backward.addEventListener('click', () => {
        playPrevSong();
    });
}
// SONG ENDED 

audio.addEventListener('ended', () => {

    playNextSong();

});