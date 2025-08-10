import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera as CameraIcon, CameraOff } from "lucide-react";
import BackHeader from "@/components/BackHeader";

const CameraPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (e) {
        setError("Camera access denied or unavailable.");
      }
    })();

    return () => {
      const tracks = (videoRef.current?.srcObject as MediaStream | null)?.getTracks() || [];
      tracks.forEach((t) => t.stop());
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Camera Translation | Translator</title>
        <meta name="description" content="Open your camera to translate text in view" />
        <link rel="canonical" href="/camera" />
      </Helmet>

      <section className="px-4 sm:px-6 py-8 max-w-md mx-auto w-full">
        <BackHeader title="Camera" />
        <p className="text-muted-foreground mb-8 text-center text-base">Point your camera at text to translate.</p>

        <Card className="p-4 overflow-hidden">
          {error ? (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <CameraOff className="mb-4 h-12 w-12" />
              <p className="text-center text-lg">{error}</p>
            </div>
          ) : (
            <video 
              ref={videoRef} 
              className="w-full aspect-[4/3] bg-muted rounded-md" 
              playsInline 
              muted 
            />
          )}
        </Card>

        <div className="mt-6 flex justify-center">
          <Button variant="pill" className="h-14 px-8 text-lg">
            <CameraIcon className="mr-3 h-5 w-5" /> Capture
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CameraPage;
