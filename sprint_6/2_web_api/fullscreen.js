function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        toggler.textContent = 'toggle off'
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            toggler.textContent = 'toggle on'
        }
    }
}

const toggler = document.getElementById('toggler');
toggler.addEventListener('click', this.toggleFullScreen)
