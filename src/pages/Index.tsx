import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftRight, Mic, Image, Camera, Menu, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

const languages = [
  { code: "kn", label: "Kannada" },
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
];

const Index = () => {
  const { theme, setTheme } = useTheme();
  return (
    
      <main className="min-h-screen bg-background">
        <Helmet>
          <title>NeeNudi — Language Translator</title>
          <meta name="description" content="Translate voice, images, and camera text across Indian and global languages." />
          <link rel="canonical" href="/" />
        </Helmet>

        <header className="px-4 py-4 sm:px-6 border-b">
          <div className="relative flex items-center justify-between">
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild aria-label="More">
              <Link to="/more">
                <Menu className="h-6 w-6" />
              </Link>
            </Button>
            <h1 className="absolute inset-0 flex items-center justify-center pointer-events-none font-brandKannada text-3xl">ನೀನುದಿ</h1>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <section className="px-4 sm:px-6 grid gap-6 animate-enter max-w-md mx-auto w-full">
          <div className="flex items-center gap-2">
            <Select defaultValue={languages[0].code}>
              <SelectTrigger className="flex-1 min-w-0 h-12 text-base">
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem value={l.code} key={l.code} className="text-base">{l.label}</SelectItem>
                ))}
                <div className="px-2 py-1">
                  <Link to="/languages" className="text-sm text-primary">More languages…</Link>
                </div>
              </SelectContent>
            </Select>

            <Button variant="pill" size="icon" className="flex-shrink-0 h-12 w-12" aria-label="Swap languages">
              <ArrowLeftRight className="h-5 w-5" />
            </Button>

            <Select defaultValue={languages[1].code}>
              <SelectTrigger className="flex-1 min-w-0 h-12 text-base">
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem value={l.code} key={l.code} className="text-base">{l.label}</SelectItem>
                ))}
                <div className="px-2 py-1">
                  <Link to="/languages" className="text-sm text-primary">More languages…</Link>
                </div>
              </SelectContent>
            </Select>
          </div>

          <Card className="p-4">
            <Textarea 
              placeholder="Type here..." 
              className="min-h-[200px] bg-accent/40 text-base resize-none border-0 focus-visible:ring-0" 
            />
          </Card>

          <div className="grid gap-4 pt-4">
            <Link to="/voice" className="w-full">
              <Button variant="pill" className="w-full h-14 text-lg">
                <Mic className="mr-3 h-5 w-5" /> Voice
              </Button>
            </Link>
            <Link to="/image" className="w-full">
              <Button variant="pill" className="w-full h-14 text-lg">
                <Image className="mr-3 h-5 w-5" /> Image
              </Button>
            </Link>
            <Link to="/camera" className="w-full">
              <Button variant="pill" className="w-full h-14 text-lg">
                <Camera className="mr-3 h-5 w-5" /> Camera
              </Button>
            </Link>
          </div>
        </section>
      </main>
    
  );
};

export default Index;
