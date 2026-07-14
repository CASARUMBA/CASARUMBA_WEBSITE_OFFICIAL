// Importing reusable UI component for a horizontal divider line
import { Separator } from "./ui/separator";

// Importing icons from lucide-react (used for visual labels like email, phone, etc.)
import { Mail, Phone, MapPin, Building } from "lucide-react";

// This is the Footer component that will appear at the bottom of the website
export function Footer() {

  // Gets the current year dynamically (so we don’t have to manually update it every year)
  const currentYear = new Date().getFullYear();

  // Array of navigation links that will show in the footer
  // Each object represents one link (name = text shown, href = where it scrolls)
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Team", href: "#team" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // Main footer container
    // bg-muted/30 = light background color
    // border-t = top border line
    <footer className="bg-muted/30 border-t">

      {/* Centers content and adds padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top section of footer (main content) */}
        <div className="py-12 lg:py-16">

          {/* Grid layout:
              - 1 column on small screens
              - 2 columns on medium+ screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ================= LEFT SIDE: LAB INFORMATION ================= */}
            <div className="space-y-4">

              {/* Logo + Lab Name */}
              <div className="flex items-center space-x-2">

                {/* Circle logo (currently just "CR") */}
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">CR</span>
                </div>

                {/* Lab name text */}
                <span className="font-bold text-lg">CASA RUMBA Lab</span>
              </div>

              {/* Short description of the lab */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                Child and Adolescent Safety Advocacy Research on Understanding Mental health, 
                Belonging, and Access.
              </p>

              {/* Contact / location information */}
              <div className="space-y-2 text-sm text-muted-foreground">

                {/* University info */}
                <div className="flex items-start space-x-2">

                  {/* Building icon */}
                  <Building className="h-4 w-4 mt-[2px]" />

                  <div>
                    <span className="font-medium block">University of South Carolina</span>
                    <span>Barnwell College</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-[2px]" />
                  <span>1512 Pendleton St, Columbia, SC 29208</span>
                </div>

                {/* Office hours (not actually a phone number despite icon) */}
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Main office hours: M–F, 9am–5pm</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>lab.casarumba@gmail.com</span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE: QUICK LINKS ================= */}
            <div className="space-y-4">

              {/* Section title */}
              <h4 className="font-medium">Quick Links</h4>

              {/* List of links */}
              <ul className="space-y-2">

                {/* Loop through quickLinks array and create each link */}
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href} // scrolls to section on page
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal divider line */}
        <Separator />

        {/* ================= BOTTOM BAR ================= */}
        <div className="py-6">

          {/* Flex layout:
              - stacks on small screens
              - spreads out on larger screens */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright text */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} CASA RUMBA Lab. All rights reserved.
            </div>

            {/* Footer policy links */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">

              {/* These currently don’t go anywhere (#),
                  but can be linked later to real pages */}
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Use
              </a>

              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-foreground transition-colors">
                Accessibility
              </a>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}