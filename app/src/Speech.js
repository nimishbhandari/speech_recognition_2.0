import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Speech = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    {
      SpeechRecognition.startListening();
    }
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Speech;
