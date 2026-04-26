async function startMic() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        console.log('Microphone access granted:', stream);

        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);
        const processor = audioContext.createScriptProcessor(4096, 1, 1);

        source.connect(processor);
        processor.connect(audioContext.destination);

        processor.onaudioprocess = (event) => {
            const inputData = event.inputBuffer.getChannelData(0);
            const bytes = new Uint8Array(inputData.length);

            for (let i = 0; i < inputData.length; i++) {
                const sample = Math.max(-1, Math.min(1, inputData[i]));
                bytes[i] = (sample + 1) * 127.5;
            }

            console.log('Audio bytes:', bytes);          
        }

    } catch (error) {
        console.error('Microphone access denied:', error);
    }
}

export default startMic;