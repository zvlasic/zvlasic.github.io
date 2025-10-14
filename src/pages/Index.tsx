import Navigation from "@/components/Navigation";
import logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6">
        <section className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="max-w-3xl">
            <img 
              src={logo} 
              alt="Veliki Vrh" 
              className="h-32 w-auto mx-auto mb-12 animate-in fade-in duration-700"
            />
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Welcome to Veliki Vrh
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Excellence in every detail. We bring your vision to life with precision,
              dedication, and a commitment to quality that stands the test of time.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
