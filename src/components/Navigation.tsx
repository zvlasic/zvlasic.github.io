import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center transition-opacity hover:opacity-70">
            <img src={logo} alt="Veliki Vrh" className="h-12 w-auto" />
          </Link>
          
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
