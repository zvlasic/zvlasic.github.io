import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-16">
            Get in touch with our team
          </p>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Location</h2>
              <p className="text-muted-foreground">
                123 Business Street<br />
                City, State 12345<br />
                Country
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Email</h2>
              <p className="text-muted-foreground">
                info@velikirvrh.com
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Phone</h2>
              <p className="text-muted-foreground">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
