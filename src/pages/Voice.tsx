
import { Helmet } from "react-helmet-async";
import RecordingWave from "@/components/RecordingWave";
import { Button } from "@/components/ui/button";
import { Mic, Square } from "lucide-react";
import BackHeader from "@/components/BackHeader";
import { useState } from "react";

const Voice = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordingToggle = () => {
    setIsRecording(!isRecording);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Voice Translation | Translator</title>
        <meta name="description" content="Record your voice to translate in real time" />
        <link rel="canonical" href="/voice" />
      </Helmet>

      <section className="flex-1 px-4 sm:px-6 pt-10 max-w-md mx-auto w-full">
        <BackHeader title="Voice" />
        <p className="text-muted-foreground mb-10 text-center text-lg">
          {isRecording ? "Recording... Tap stop when finished." : "Tap the mic and start speaking."}
        </p>
      </section>

      <footer className="sticky bottom-0 border-t bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="px-4 sm:px-6 py-6 flex flex-col items-center gap-6 max-w-md mx-auto w-full">
          {isRecording && <RecordingWave />}
          <Button 
            variant="pill" 
            className="h-16 px-8 text-lg" 
            aria-label={isRecording ? "Stop recording" : "Start recording"}
            onClick={handleRecordingToggle}
          >
            {isRecording ? (
              <>
                <Square className="mr-3 h-6 w-6" /> Stop
              </>
            ) : (
              <>
                <Mic className="mr-3 h-6 w-6" /> Start
              </>
            )}
          </Button>
        </div>
      </footer>
    </main>
  );
};

export default Voice;
