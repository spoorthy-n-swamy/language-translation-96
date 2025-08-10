import { Helmet } from "react-helmet-async";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Download } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import BackHeader from "@/components/BackHeader";

const More = () => {
  const [open, setOpen] = useState(true);
  const [offline, setOffline] = useState(true);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>More | Translator</title>
        <meta name="description" content="Profile, offline translation, settings" />
        <link rel="canonical" href="/more" />
      </Helmet>

      <div className="px-4 sm:px-6 max-w-md mx-auto w-full">
        <BackHeader title="More" />
      </div>
      
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="h-[60vh] max-w-md mx-auto">
          <DrawerHeader className="pb-6">
            <DrawerTitle className="text-xl">More</DrawerTitle>
            <DrawerDescription className="text-base">Profile and preferences</DrawerDescription>
          </DrawerHeader>

          <div className="px-6 space-y-8 pb-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="text-lg">U</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-lg">Your Profile</p>
                <p className="text-sm text-muted-foreground">user@example.com</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1 pr-4">
                <p className="font-medium text-base">Offline translation</p>
                <p className="text-sm text-muted-foreground">Use downloaded packs without internet</p>
              </div>
              <Switch checked={offline} onCheckedChange={setOffline} />
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1 pr-4">
                <p className="font-medium text-base">Language packs</p>
                <p className="text-sm text-muted-foreground">Manage downloaded packs</p>
              </div>
              <Button variant="pill" className="h-10">
                <Download className="mr-2 h-4 w-4" /> Manage
              </Button>
            </div>

            <div className="pt-4">
              <Button variant="outline" className="w-full h-12 text-base">
                <Settings className="mr-2 h-5 w-5" /> Settings
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </main>
  );
};

export default More;
