// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

// Get references to the video, audio, and subtitle elements
const video = document.getElementById('demo-video');
const englishAudio = new Audio('english.mp3');
const hindiAudio = new Audio('hindi.mp3');
const tamilAudio = new Audio('tamil.mp3');
const subtitleTrackEnglish = document.getElementById('subtitle-track-english');
const subtitleTrackHindi = document.getElementById('subtitle-track-hindi');
const subtitleTrackTamil = document.getElementById('subtitle-track-tamil');

// Function to play/pause the video and audio
function playPause() {
    if (video.paused) {
        video.play();
        if (englishAudio.paused) {
            englishAudio.play();
        }
    } else {
        video.pause();
        englishAudio.pause();
        hindiAudio.pause();
        tamilAudio.pause();
    }
}


// Function to change audio and subtitles based on the selected language
function changeAudio(audioTrack) {
    // Restart video
    video.currentTime = 0; // Reset video to start
    video.play(); // Play video

    // Pause all audio tracks
    englishAudio.pause();
    hindiAudio.pause();
    tamilAudio.pause();

    // Reset subtitle visibility
    subtitleTrackEnglish.mode = 'hidden'; // Hide all subtitles
    subtitleTrackHindi.mode = 'hidden'; 
    subtitleTrackTamil.mode = 'hidden'; 

    // Play the selected audio track and show the corresponding subtitles
    if (audioTrack === 'english') {
        englishAudio.currentTime = 0; // Reset to start
        englishAudio.play(); // Play English audio
        subtitleTrackEnglish.mode = 'showing'; // Show English subtitles
    } else if (audioTrack === 'hindi') {
        hindiAudio.currentTime = 0; // Reset to start
        hindiAudio.play(); // Play Hindi audio
        subtitleTrackHindi.mode = 'showing'; // Show Hindi subtitles
    } else if (audioTrack === 'tamil') {
        tamilAudio.currentTime = 0; // Reset to start
        tamilAudio.play(); // Play Tamil audio
        subtitleTrackTamil.mode = 'showing'; // Show Tamil subtitles
    }
}

// Function to adjust volume
function increaseVolume() {
    video.volume = Math.min(video.volume + 1, 1); // Increase volume
}

function decreaseVolume() {
    video.volume = Math.max(video.volume - 1, 0); // Decrease volume
}

// Initial setup to play English audio and show subtitles by default
window.onload = function() {
    changeAudio('english'); // Set default audio track to English
};
