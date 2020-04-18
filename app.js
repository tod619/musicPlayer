// DOM variables
const musicContainer = document.getElementById('music_container');

// buttons
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Progress bar
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress_container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');

// song titles
const songs = [ 'hey', 'summer', 'ukulele' ];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Functions

// Update song details
function loadSong(song) {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');

	audio.play();
}

// Pause song
function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	play.querySelector('i.fas').classList.add('fa-play');

	audio.pause();
}

// Previous Song function
function prevSong() {
	songIndex--;

	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}

	loadSong(songs[songIndex]);

	playSong();
}

// Next Song Function
function nextSong() {
	songIndex++;

	if (songIndex > songs.length - 2) {
		songIndex = 0;
	}

	loadSong(songs[songIndex]);

	playSong();
}

// EventListners
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
