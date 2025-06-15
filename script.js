const sound = document.getElementById('hoverSound');
    let audioUnlocked = false;

    // Unlock audio on first user interaction
    function unlockAudio() {
        if (!audioUnlocked) {
            sound.play().then(() => {
                audioUnlocked = true;
            }).catch(() => {});
        }
        document.removeEventListener('click', unlockAudio);
    }
    document.addEventListener('click', unlockAudio);

    // Do nothing on hover; let the audio play naturally
    document.querySelectorAll('.container img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            // No audio restart on hover
        });
    });

    // Stop audio on any click after it's unlocked
    document.addEventListener('click', () => {
        if (audioUnlocked) {
            sound.pause();
            sound.currentTime = 0;
        }
    });