import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Users, Sparkles } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my design and development work across different platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hahu Project */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 animate-scale-in">
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-xl mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Hahu</h3>
                  <p className="text-lg text-muted-foreground">Inclusive Education Platform</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    UI/UX Design
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                    Front-End Dev
                  </span>
                </div>

                <h4 className="text-xl font-bold mb-3">
                  Empowering Children with Special Needs
                </h4>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A final university project focused on empowering children with Down syndrome and autism 
                  through inclusive education.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["TypeScript", "Prisma", "Figma"].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="default" size="lg" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            </Card>

            {/* Webflow Project */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 animate-scale-in">
              <div className="bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-xl mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Webflow Site</h3>
                  <p className="text-lg text-muted-foreground">Responsive One-Page Design</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                    Web Design
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Webflow
                  </span>
                </div>

                <h4 className="text-xl font-bold mb-3">
                  Modern Responsive Design
                </h4>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A fully responsive one-page website designed and built using Webflow, showcasing modern design 
                  principles and seamless user experience across all devices.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["Webflow", "Responsive Design", "No-Code"].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="default" size="lg" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-4">
              Interested in seeing more work samples?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
