import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BackHeaderProps {
  title?: string;
  right?: React.ReactNode;
}

const BackHeader = ({ title, right }: BackHeaderProps) => {
  return (
    <header className="py-4 mb-4">
      <nav className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-12 w-12" asChild aria-label="Back to home">
          <Link to="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>
        {title ? <h1 className="text-2xl font-semibold flex-1">{title}</h1> : null}
        <div className="ml-auto">{right}</div>
      </nav>
    </header>
  );
};

export default BackHeader;
