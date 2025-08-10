import { Helmet } from "react-helmet-async";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { LANGUAGES } from "@/data/languages";
import { Card } from "@/components/ui/card";
import BackHeader from "@/components/BackHeader";

const Languages = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Choose Language | Translator</title>
        <meta name="description" content="Select from 18+ languages for translation" />
        <link rel="canonical" href="/languages" />
      </Helmet>

      <section className="px-4 sm:px-6 py-6 max-w-md mx-auto w-full">
        <BackHeader title="Select Language" />
        <Card className="p-0 overflow-hidden">
          <Command>
            <CommandInput placeholder="Search languages..." className="h-12 text-base" />
            <CommandList className="max-h-[60vh]">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="All Languages">
                {LANGUAGES.map((lang) => (
                  <CommandItem 
                    key={lang} 
                    value={lang.toLowerCase()}
                    className="text-base py-3 px-4"
                  >
                    {lang}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </Card>
      </section>
    </main>
  );
};

export default Languages;
