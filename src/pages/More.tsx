import { Helmet } from "react-helmet-async";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Download } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const More = () => {
  const [open, setOpen] = useState(true);
  const [offline, setOffline] = useState(true);

  return (
    <main className="min-h-screen bg-background flex">
      <Helmet>
        <title>More | Translator</title>
        <meta name="description" content="Profile, offline translation, settings" />
        <link rel="canonical" href="/more" />
      </Helmet>

      <div className="w-1/2 h-screen bg-sidebar-background border-r border-sidebar-border p-6 overflow-y-auto">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-sidebar-foreground mb-2">More</h1>
            <p className="text-sidebar-foreground/70">Profile and preferences</p>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="text-lg">U</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-lg text-sidebar-foreground">Your Profile</p>
              <p className="text-sm text-sidebar-foreground/70">user@example.com</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex-1 pr-4">
              <p className="font-medium text-base text-sidebar-foreground">Offline translation</p>
              <p className="text-sm text-sidebar-foreground/70">Use downloaded packs without internet</p>
            </div>
            <Switch checked={offline} onCheckedChange={setOffline} />
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex-1 pr-4">
              <p className="font-medium text-base text-sidebar-foreground">Language packs</p>
              <p className="text-sm text-sidebar-foreground/70">Manage downloaded packs</p>
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
      </div>

      <div className="w-1/2 h-screen bg-background"></div>
    </main>
  );
};

export default More;
