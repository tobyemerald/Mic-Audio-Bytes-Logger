import startMic from './components/startMic';

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4 bg-black">
            <h1 className="text-white text-2xl font-bold">Mic Audio Bytes Logger</h1>
            <p className="text-white">Click "Play" to start logging audio bytes from your microphone. Click "Stop" to stop logging.</p>

            <div className="flex flex-row gap-4">
              <button 
                onClick={startMic}
                className="bg-blue-600 text-white px-3 py-1 rounded-md">Play</button>
            
              <button 
                onClick={() => window.location.reload()}
                className="bg-gray-600 text-white px-3 py-1 rounded-md">Stop</button>
            </div>   
        </div>
    )
}

export default App;