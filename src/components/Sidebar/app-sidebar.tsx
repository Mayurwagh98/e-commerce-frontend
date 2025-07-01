import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, Home, Settings, User } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home className="w-5 h-5 mr-2" />, href: "#" },
    { name: "Profile", icon: <User className="w-5 h-5 mr-2" />, href: "#" },
    {
      name: "Settings",
      icon: <Settings className="w-5 h-5 mr-2" />,
      href: "#",
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="m-4">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[280px]">
        <SheetTitle className="text-xl font-bold mb-4">Threadory</SheetTitle>
        <Separator />
        <Separator />
        <nav className="mt-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 rounded-md hover:bg-muted transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
