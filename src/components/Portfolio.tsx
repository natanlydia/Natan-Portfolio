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
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Project</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my final university project that combines technology with social impact
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 animate-scale-in">
            <div className="grid md:grid-cols-2">
              {/* Project Image/Visual */}
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-12 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-3xl shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">Hahu</h3>
                  <p className="text-xl text-muted-foreground">Inclusive Education Platform</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    UI/UX Design
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                    Front-End Dev
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  Empowering Children with Special Needs
                </h3>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A final university project focused on empowering children with Down syndrome and autism 
                  through inclusive education. The platform provides accessible, engaging learning experiences 
                  tailored to their unique needs.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Role & Contributions</h4>
                      <p className="text-muted-foreground">
                        UI/UX Designer & Front-End Developer - Led requirement gathering, interface design, 
                        and front-end implementation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {["TypeScript", "Prisma", "Figma", "Responsive Design"].map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-muted rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="default" size="lg" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </Card>

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
