import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "UI/UX Designer Intern",
      company: "Efuye Gela",
      period: "2024",
      location: "Remote",
      description: "Designed user-friendly interfaces and enhanced user experience across web platforms using Figma.",
      color: "accent"
    },
    {
      role: "Front-End Developer Intern",
      company: "eTech",
      period: "2024",
      location: "On-site",
      description: "Worked on modern front-end projects using Tailwind CSS and Bootstrap to create responsive designs.",
      color: "primary"
    },
    {
      role: "Remote Website Developer",
      company: "Afronex",
      period: "2024",
      location: "Remote",
      description: "Focused on responsive website design and development, delivering high-quality web solutions.",
      color: "secondary"
    },
    {
      role: "Front-End Developer Intern",
      company: "Kuraz Tech",
      period: "2023",
      location: "On-site",
      description: "Contributed to building and improving front-end web interfaces with modern technologies.",
      color: "primary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey through various internships and roles
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 items-center animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Left side content (even) */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:text-right">
                        <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                          <div className="flex md:flex-row-reverse items-start gap-4">
                            <div className={`p-3 bg-${exp.color}/10 rounded-lg flex-shrink-0`}>
                              <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                              <p className="text-lg text-primary font-semibold mb-3">{exp.company}</p>
                              <div className="flex md:flex-row-reverse gap-4 mb-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 bg-${exp.color}/10 rounded-lg flex-shrink-0`}>
                              <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                              <p className="text-lg text-primary font-semibold mb-3">{exp.company}</p>
                              <div className="flex gap-4 mb-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </>
                  )}

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-4 h-4 rounded-full bg-${exp.color} border-4 border-background shadow-lg`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
