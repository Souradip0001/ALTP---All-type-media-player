const fileInput = document.getElementById('file-input');
const videoPlayer = document.getElementById('main-video');
const modeToggle = document.getElementById('mode-toggle');

// 1. Handle File Selection
fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const fileUrl = URL.createObjectURL(file);
        videoPlayer.src = fileUrl;
        videoPlayer.play();
    }
});

// 2. Handle Audio-Only Toggle
modeToggle.addEventListener('change', function() {
    if (this.checked) {
        // Audio Mode: Hide video but keep sound
        videoPlayer.style.opacity = "0";
        videoPlayer.style.height = "50px"; // Shrink it to a bar
        console.log("Switching to Audio Mode");
    } else {
        // Video Mode: Show everything
        videoPlayer.style.opacity = "1";
        videoPlayer.style.height = "auto";
        console.log("Switching to Video Mode");
    }
});
