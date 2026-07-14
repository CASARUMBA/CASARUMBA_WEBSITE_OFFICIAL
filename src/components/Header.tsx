
// Importing a reusable button component (from your UI library)
import { Button } from "./ui/button";

// Importing menu icons (hamburger menu + close icon)
import { Menu, X } from "lucide-react";

// React hook for state (used to track if mobile menu is open or closed)
import { useState } from "react";

// React Router tools for navigation and tracking current page
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Header() {

  // State to control whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gives us the current page path (ex: "/" or "/team")
  const location = useLocation();

  // Allows us to programmatically navigate between pages
  const navigate = useNavigate();

  // Navigation items for the header
  // Each object = one button/link in the navbar
  const navItems = [
    { name: "Home", href: "/" },        // goes to homepage
    { name: "About", href: "#about" },  // scrolls to section
    { name: "Research", href: "#research" },
    { name: "Team", href: "/team" },    // goes to a different page
    // { name: "Publications", href: "#publications" }, // currently hidden
    { name: "Contact", href: "#contact" },
  ];

  // This function handles ALL navigation clicks
  // (instead of using default <a> behavior)
  const handleNavClick = (href: string) => {

    // Close mobile menu whenever something is clicked
    setIsMenuOpen(false);

    // If clicking "Home"
    if (href === "/") {
      navigate("/"); // go to homepage

      // Scroll to very top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If link starts with "#" → it's a section on the homepage
    if (href.startsWith("#")) {

      // If we are ALREADY on homepage
      if (location.pathname === "/") {

        // Find the section element
        const el = document.querySelector(href);

        // Scroll to it smoothly
        if (el) el.scrollIntoView({ behavior: "smooth" });

      } else {

        // If we are NOT on homepage:
        // 1. Go to homepage first
        navigate("/");

        // 2. Wait a tiny bit so page loads
        // 3. Then scroll to the section
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }

    } else {
      // If it's a normal route (like "/team")
      navigate(href);
    }
  };

  return (

    // Sticky header (stays at top when scrolling)
    // backdrop-blur = gives slight blur effect behind it
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      {/* Container for spacing and centering */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main header row */}
        <div className="flex h-16 items-center justify-between">

          {/* ================= LEFT SIDE: LOGO ================= */}
          <div className="flex items-center">

            {/* Clicking logo always goes to homepage */}
            <Link to="/" className="flex items-center space-x-2">

              {/* Logo image */}
              <img
                src="/images/team/CASARUMBALOGO.png" // make sure this path exists in /public
                alt="CASA RUMBA Lab Logo"
                className="h-8 w-8 object-contain"
              />

              {/* Lab name */}
              <span className="font-bold text-xl">CASA RUMBA Lab</span>
            </Link>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          {/* Hidden on small screens, visible on md+ screens */}
          <nav className="hidden md:flex items-center space-x-8">

            {/* Loop through navItems to create buttons */}
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}

          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          {/* Only shows on small screens */}
          <div className="md:hidden">

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // toggle open/close
            >

              {/* If menu is open → show X icon, otherwise show hamburger */}
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}

            </Button>
          </div>
        </div>

        {/* ================= MOBILE DROPDOWN MENU ================= */}
        {/* Only appears when isMenuOpen = true */}
        {isMenuOpen && (
          <div className="md:hidden">

            {/* Menu container */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">

              {/* Same nav items, just stacked vertically */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}

            </div>
          </div>
        )}
      </div>
    </header>
  );
}