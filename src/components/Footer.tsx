import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Youtube, Facebook, Instagram } from "lucide-react";
import scbcLogo from "@/assets/scbc-logo.png";

const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "448 Francis Drive, San Jose, CA 95133"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "(408) 926-2621"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "info@scbc.org"
    }
  ];

  const serviceHours = [
    { service: "Cantonese Service", time: "Sunday 11:20 AM" },
    { service: "Mandarin Service", time: "Sunday 9:50 AM" },
    { service: "English Service", time: "Sunday 10:00 AM" },
    { service: "Growth Groups", time: "Sunday 11:30 AM" },
    { service: "Children Worship", time: "Sunday 10:00 AM" },
    { service: "Children Sunday School", time: "Sunday 11:30 AM" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Worship Services", href: "#worship" },
    { name: "Ministries", href: "#fellowship" },
    { name: "Events", href: "#activities" },
    { name: "Giving", href: "#giving" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-church-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={scbcLogo} alt="SOUTHBAY Logo" className="h-12 w-12 brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">SOUTHBAY</h3>
                <p className="text-sm text-white/70">Community Baptist Church</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Building a healthy church to reach our community through faith, fellowship, and service.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="h-5 w-5 text-church-blue-light mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white/70">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Times */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <Clock className="h-5 w-5 mr-2 text-church-blue-light" />
              Service Times
            </h4>
            <div className="space-y-3">
              {serviceHours.map((service, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white/80 text-sm">{service.service}</span>
                  <span className="text-white font-medium text-sm">{service.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start text-white/80 hover:text-white hover:bg-white/10 p-0 h-auto"
                  asChild
                >
                  <a href={link.href}>{link.name}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm">
            © 2024 Southbay Community Baptist Church. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Button variant="ghost" className="text-white/70 hover:text-white p-0 h-auto">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="text-white/70 hover:text-white p-0 h-auto">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;