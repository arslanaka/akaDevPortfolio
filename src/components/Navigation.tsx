import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/writing", label: "Blog" },
    { path: "/contact", label: "Ask about me" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-lg font-playfair hover:opacity-70 transition-opacity"
          >
            Muhammad Arslan - MA
          </Link>
          <div className="space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm hover:opacity-70 transition-opacity ${
                  location.pathname === link.path 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;