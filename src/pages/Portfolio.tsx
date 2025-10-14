import Navigation from "@/components/Navigation";

const Portfolio = () => {
  const projects = [
    {
      title: "Project Alpha",
      category: "Branding & Identity",
      description: "Comprehensive brand development and visual identity system for a growing enterprise."
    },
    {
      title: "Project Beta",
      category: "Digital Strategy",
      description: "Strategic planning and implementation of digital transformation initiatives."
    },
    {
      title: "Project Gamma",
      category: "Creative Development",
      description: "Innovative solutions combining design thinking with technical excellence."
    },
    {
      title: "Project Delta",
      category: "Consultation",
      description: "Expert guidance and strategic advisory for business optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-16">
            A selection of our finest work
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="text-sm font-medium text-accent mb-3 block">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {project.title}
                </h2>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
