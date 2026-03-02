const songs = [
  {
    name: "Song 1",
    file: "song1.mp3",
    cover: "cover1.jpg"
  },
  {
    name: "Song 2",
    file: "song2.mp3",
    cover: "cover2.jpg"
  },
  {
    name: "Song 3",
    file: "song3.mp3",
    cover: "cover3.jpg"
  }
];

let currentSong = 0;
const audio = document.getElementById("audio");
const songList = document.getElementById("songList");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadSongs(){
  songs.forEach((song, index)=>{
    songList.innerHTML += `
      <div class="song" onclick="selectSong(${index})">
        <img src="${song.cover}">
        <h4>${song.name}</h4>
      </div>
    `;
  });
}

function selectSong(index){
  currentSong = index;
  audio.src = songs[index].file;
  cover.src = songs[index].cover;
  audio.play();
}

function playPause(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong(){
  currentSong = (currentSong + 1) % songs.length;
  selectSong(currentSong);
}

function prevSong(){
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  selectSong(currentSong);
}

audio.addEventListener("timeupdate", ()=>{
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", ()=>{
  audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", ()=>{
  audio.volume = volume.value;
});

loadSongs();
selectSong(0);
