import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, Youtube } from "lucide-react";

const LiveStreamSection = () => {
  const services = [
    {
      language: "Cantonese",
      time: "Sunday 11:20 AM PST",
      status: "Live",
      description: "Join our Cantonese-speaking congregation for worship, prayer, and fellowship.",
      youtubeUrl: "https://www.youtube.com/channel/UCyXaExMr_XB85x36e5YoPdw",
      isLive: true
    },
    {
      language: "Mandarin", 
      time: "Sunday 09:50 AM PST",
      status: "Replay Available",
      description: "Watch replays and short films from our Mandarin services.",
      youtubeUrl: "https://www.youtube.com/channel/UCWJNfMb1T49ldXqAQoeYi1Q",
      isLive: false
    },
    {
      language: "English",
      time: "Sunday 10:00 AM PST", 
      status: "Live",
      description: "Join our English worship service followed by Growth Groups at 11:30 AM.",
      youtubeUrl: "https://www.youtube.com/channel/UCS20UMH0g5g4hbAD4jx5GnA",
      isLive: true
    }
  ];

  return (
    <section id="worship" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary">
            Live Stream Channels
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">
            Sunday Worship Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us online for worship, whether you're at home or anywhere in the world. 
            We're here to connect and worship together as one community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-semibold text-church-navy">
                    {service.language} Service
                  </CardTitle>
                  <Badge 
                    variant={service.isLive ? "default" : "secondary"}
                    className={service.isLive ? "bg-red-500 hover:bg-red-600" : ""}
                  >
                    {service.isLive && <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />}
                    {service.status}
                  </Badge>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{service.time}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                    asChild
                  >
                    <a href={service.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4" />
                      {service.isLive ? "Watch Live" : "View Channel"}
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Play className="mr-2 h-4 w-4" />
                    Recent Sermons
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Message */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto gradient-card shadow-medium border-0">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-church-navy mb-4">
                We're Praying for You
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                SOUTHBAY wants you to know that we are praying for you and encourage you to care for 
                one another and look after our neighbors during this time. Please let our pastoral 
                staff know what we can do for you or if you have any prayer requests.
              </p>
              <Button className="mt-6" variant="outline">
                Submit Prayer Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamSection;