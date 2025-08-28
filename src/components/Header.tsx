import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import scbcLogo from "@/assets/scbc-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Worship", href: "#worship" },
    { name: "Spiritual Growth", href: "#growth" },
    { name: "Fellowship Groups", href: "#fellowship" },
    { name: "Church Activities", href: "#activities" },
    { name: "Giving", href: "#giving" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img 
              src={scbcLogo} 
              alt="SOUTHBAY Logo"
              className="h-12 w-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-church-navy">SOUTHBAY</h1>
              <p className="text-sm text-muted-foreground">Community Baptist Church</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                asChild
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <img src={scbcLogo} alt="SOUTHBAY Logo" className="h-10 w-10" />
                  <div>
                    <h2 className="font-bold text-church-navy">SOUTHBAY</h2>
                    <p className="text-sm text-muted-foreground">Community Baptist Church</p>
                  </div>
                </div>
              </div>
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start text-foreground hover:text-primary hover:bg-primary/10"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={item.href}>{item.name}</a>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;