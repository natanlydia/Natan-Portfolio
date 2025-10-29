import { Card } from "@/components/ui/card";
import { Monitor, Palette, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Web Development",
      description: "Building modern, responsive, and scalable websites using the latest technologies and best practices.",
      color: "primary",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"]
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Crafting user-centered designs with Figma to enhance digital experiences and drive engagement.",
      color: "secondary",
      features: ["User Research", "Wireframing", "Interactive Prototypes"]
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices with a mobile-first approach to design and development.",
      color: "accent",
      features: ["Cross-Platform", "Adaptive Layouts", "Touch Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="bg-gradient-primary bg-clip-text text-transparent">Do</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services to help bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 hover:border-primary/50 group animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`inline-flex p-5 bg-${service.color}/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className={`text-${service.color}`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
