# 🎧 ALTP: ALL TYPE MEDIA PLAYER

VibePlayer is a high-performance, web-first media player designed to bridge the gap between browser-based flexibility and native app power. It aims to handle virtually any media format while offering a seamless transition between immersive video playback and background audio-only "music mode."

## ✨ Key Features

* **Universal Format Support:** Leveraging WebAssembly (FFmpeg.wasm) to decode and play media formats often unsupported by standard browsers (MKV, AVI, FLAC, and more).
* **Dual-Mode Playback:** Toggle instantly between Video and Audio-only modes. Perfect for turning music videos into background soundtracks.
* **Zero-Server Uploads:** Privacy-focused processing using the HTML5 File API. Your media stays on your device; we just provide the interface.
* **PWA Ready:** Installable as a Progressive Web App for a full-screen, app-like experience on Android, iOS, and Desktop.
* **Vibe-Coded UI:** A minimalist, aesthetic interface designed for focus and immersion.

## 🚀 Tech Stack

* **Frontend:** HTML5, CSS3 (Modern Flex/Grid), JavaScript (ES6+)
* **Media Engine:** FFmpeg.wasm (WebAssembly-powered transcoding)
* **APIs:** Web Audio API, Media Session API (for lock-screen controls)
* **Distribution:** PWA (Service Workers & Manifest)


## 🗺️ Roadmap

- [ ] Phase 1: Core UI & Local File Integration
- [ ] Phase 2: FFmpeg.wasm integration for extended codec support
- [ ] Phase 3: Background playback & Media Session controls
- [ ] Phase 4: Full PWA implementation and offline caching

## 📄 License
MIT License - Feel free to use and modify for your own "vibe."
