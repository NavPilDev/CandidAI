"use client";
import React, { useState } from "react";

const RecordingView = () => {
  const [recording, setRecording] = useState(false);
  const [recordingCompleted, setRecordingCompleted] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleStartRecording = () => {
    setRecording(true);
    setTranscript("Some Words");
  };

  const handleStopRecording = () => {
    setRecording(!recording);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row gap-4">
        ((isRecording) || (transcript) && (
        
      </div>
      <div className="text-2xl font-bold">{transcript}</div>
    </div>
  );
};

export default RecordingView;
