class AudioManager {
    private static instance: AudioManager;
    private currentAudio: HTMLAudioElement | null = null;

    private constructor() { }

    static getInstance(): AudioManager {
        if (!AudioManager.instance) {
            AudioManager.instance = new AudioManager();
        }
        return AudioManager.instance;
    }

    play(audio: HTMLAudioElement) {
        if (this.currentAudio && this.currentAudio !== audio) {
            this.currentAudio.pause();
        }
        this.currentAudio = audio;
        audio.play();
    }

    pause(audio: HTMLAudioElement) {
        if (this.currentAudio === audio) {
            audio.pause();
        }
    }
}

export default AudioManager.getInstance();
