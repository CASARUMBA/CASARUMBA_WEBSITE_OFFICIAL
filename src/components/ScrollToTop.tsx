// React hook that lets us run code when something changes
import { useEffect } from "react";

// Hook from react-router that tells us the current page URL
import { useLocation } from "react-router-dom";

export function ScrollToTop() {

  // Get the current pathname (ex: "/", "/team", etc.)
  const { pathname } = useLocation();

  // This runs every time the pathname changes
  useEffect(() => {

    // Scroll the page back to the very top (x = 0, y = 0)
    window.scrollTo(0, 0);

  }, [pathname]); 
  // dependency array → means this only runs when pathname changes

  // This component doesn’t render anything visually
  // It only exists to run the scroll behavior
  return null;
}