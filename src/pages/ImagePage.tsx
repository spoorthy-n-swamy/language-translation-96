import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageIcon, Upload } from "lucide-react";
import BackHeader from "@/components/BackHeader";

const ImagePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onPick = () => inputRef.current?.click();
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Image Translation | Translator</title>
        <meta name="description" content="Pick an image from your folder for translation" />
        <link rel="canonical" href="/image" />
      </Helmet>

      <section className="px-4 sm:px-6 py-8 max-w-md mx-auto w-full">
        <BackHeader title="Image" />
        <p className="text-muted-foreground mb-8 text-center text-base">Choose an image to extract and translate text.</p>

        <Card className="p-6 flex flex-col items-center justify-center gap-6 min-h-[400px]">
          {preview ? (
            <img 
              src={preview} 
              alt="selected for translation" 
              className="max-h-[300px] w-full rounded-md object-contain" 
            />
          ) : (
            <div className="flex flex-col items-center text-muted-foreground py-16">
              <ImageIcon className="mb-4 h-12 w-12" />
              <p className="text-lg">No image selected</p>
            </div>
          )}

          <div className="w-full">
            <Button variant="pill" onClick={onPick} className="w-full h-14 text-lg">
              <Upload className="mr-3 h-5 w-5" /> Choose Image
            </Button>
          </div>

          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onChange} />
        </Card>
      </section>
    </main>
  );
};

export default ImagePage;
