import { Card } from "@/components/ui/card";
import { Code2, Layout, Palette, FileCode, Layers, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
      color: "primary"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Design",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
      color: "secondary"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Styling Frameworks",
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design"],
      color: "accent"
    },
    {
      icon: <FileCode className="w-8 h-8" />,
      title: "Web Development",
      skills: ["Modern Web Apps", "Performance Optimization", "SEO"],
      color: "primary"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "Prisma", "REST APIs"],
      color: "secondary"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      skills: ["Mobile-First", "Cross-Browser", "Accessibility"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of technical skills and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 bg-${category.color}/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${category.color}`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in-up">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm constantly exploring new technologies and frameworks to stay current in this ever-evolving field. 
                My passion for learning drives me to continuously improve and adapt to new challenges.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
