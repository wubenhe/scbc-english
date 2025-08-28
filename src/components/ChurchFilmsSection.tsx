import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Film, Heart, Music, Users, ArrowRight } from "lucide-react";

const ChurchFilmsSection = () => {
  const filmSeries = [
    {
      title: "Dinner Tonight (Marriage Series)",
      description: "Learn how to improve your marriage relationship through life sketches and practical tips for couples.",
      category: "Marriage",
      icon: Heart,
      episodes: 8,
      color: "bg-rose-500"
    },
    {
      title: "Casual Conversations (Life Series)", 
      description: "Heartfelt discussions about life's journey, sharing wisdom and experiences from our community.",
      category: "Life",
      icon: Users,
      episodes: 12,
      color: "bg-blue-500"
    },
    {
      title: "Cantonese Opera Performances",
      description: "Beautiful Cantonese opera performances by our Southbay Cantonese Gospel Opera Team.",
      category: "Music",
      icon: Music,
      episodes: 6,
      color: "bg-purple-500"
    },
    {
      title: "Joyful Living (Pandemic Series)",
      description: "Finding hope and joy during challenging times, featuring stories of faith and resilience.",
      category: "Encouragement", 
      icon: Film,
      episodes: 10,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary">
            Church Film Series
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">
            Our Short Film Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to watch our church-produced short film series! Rich content is being 
            gradually uploaded with engaging stories and practical wisdom for daily life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filmSeries.map((series, index) => {
            const IconComponent = series.icon;
            return (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 gradient-card overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${series.color} mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">
                    {series.category}
                  </Badge>
                  <CardTitle className="text-lg font-semibold text-church-navy group-hover:text-primary transition-colors">
                    {series.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {series.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{series.episodes} Episodes</span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-0 h-auto text-primary hover:text-primary/80"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Content Categories Preview */}
        <div className="bg-muted/50 rounded-2xl p-8 text-center">
          <Film className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-church-navy mb-4">
            Featured Content Includes
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              "Marriage Tips & Sketches", 
              "Life Journey Discussions", 
              "Cantonese Opera Gospel", 
              "Pandemic Hope Stories"
            ].map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <Button className="shadow-medium">
            <ArrowRight className="mr-2 h-4 w-4" />
            View All Films
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChurchFilmsSection;