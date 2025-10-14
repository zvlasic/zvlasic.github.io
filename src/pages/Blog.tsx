import Navigation from "@/components/Navigation";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with Our Services",
      date: "March 15, 2024",
      excerpt: "Learn about how we approach each project with dedication and precision."
    },
    {
      title: "Innovation in Practice",
      date: "March 10, 2024",
      excerpt: "Exploring new methodologies and best practices in our industry."
    },
    {
      title: "Client Success Stories",
      date: "March 5, 2024",
      excerpt: "Highlighting the achievements and milestones of our valued clients."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Blog</h1>
          <p className="text-xl text-muted-foreground mb-16">
            Insights, updates, and thoughts from our team
          </p>
          
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="border-b border-border pb-12 last:border-0 transition-transform hover:translate-x-2"
              >
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <h2 className="text-3xl font-bold mt-2 mb-4 text-foreground">
                  {post.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
