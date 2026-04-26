
---

# 🎤 Mic Audio Bytes Logger

A lightweight React application that captures real-time microphone input, processes it using the **Web Audio API**, and logs raw audio data as byte arrays to the browser console.

---

## 📖 Overview

This project demonstrates how to:

* Access a user’s microphone via the browser
* Stream live audio data in real time
* Process audio buffers using the Web Audio API
* Convert floating-point audio samples into byte-level data
* Inspect low-level audio streams directly in the console

It is designed as a **learning and experimentation tool** for developers working with audio processing in the browser.

---

## ✨ Features

* 🎧 Real-time microphone streaming
* ⚡ Low-level audio buffer processing
* 🔢 Float32 → Uint8 byte conversion
* 🖥️ Minimal UI (React + Tailwind)
* 🧪 Developer-friendly console output

---

## 🧱 Tech Stack

* **Frontend:** React (TypeScript)
* **Styling:** Tailwind CSS
* **Audio Processing:** Web Audio API

---

## 📂 Project Structure

```bash
src/
├── App.tsx                # Main UI component
├── components/
│   └── startMic.tsx      # Microphone + audio processing logic
```

---

## ⚙️ How It Works

1. **User Interaction**

   * A button click triggers microphone access

2. **Microphone Access**

   ```ts
   navigator.mediaDevices.getUserMedia({ audio: true })
   ```

3. **Audio Pipeline Setup**

   * `AudioContext` initializes audio processing
   * `MediaStreamSource` connects the microphone
   * `ScriptProcessorNode` processes audio chunks

4. **Audio Processing**

   * Input buffer is read as `Float32Array`
   * Values range from `-1.0` to `+1.0`

5. **Data Conversion**

   ```ts
   byte = (sample + 1) * 127.5
   ```

   Converts audio samples into `Uint8Array` (0–255)

6. **Output**

   * Byte arrays are logged continuously in the console

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm or yarn

---

### Installation

```bash
git clone https://github.com/tobyemerald/mic-audio-bytes-logger.git
cd mic-audio-bytes-logger
npm install
```

---

### Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

---

## 🔐 Permissions & Security

Microphone access is only available under:

* `http://localhost`
* or secure origins (`https://`)

The browser will prompt the user for permission on interaction.

---

## ⚠️ Important Notes

### Deprecated API

This project uses:

```ts
createScriptProcessor()
```

This API is **deprecated** but still supported in most browsers.

👉 For production or advanced use cases, migrate to:

* **AudioWorklet**

---

## 🐛 Troubleshooting

### Blank Page / Nothing Rendering

* Verify import paths (e.g., `./components/startMic`)
* Check browser console for build/runtime errors

---

### Microphone Not Working

* Ensure permission is granted
* Confirm you are on `localhost` or `https`

---

### No Console Output

* Confirm processor is connected:

```ts
processor.connect(audioContext.destination);
```

---

## 🔄 Future Improvements

* Replace `ScriptProcessorNode` with **AudioWorklet**
* Add waveform visualization (Canvas or SVG)
* Export audio to `.wav` format
* Stream audio to backend via WebSockets
* Add UI controls (start/stop, gain, recording)

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 👤 Author

**Tobyemerald**

* GitHub: [https://github.com/tobyemerald](https://github.com/tobyemerald)
* Portfolio: in-view