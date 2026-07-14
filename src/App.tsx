// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { Research } from "./components/Research";
// import { Team } from "./components/Team";
// import { Publications } from "./components/PublicationsHome";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <Research />
//         <Team />
//         <Publications />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Research } from "./components/Research";
import { Team } from "./components/Team";
import { Publications } from "./components/PublicationsHome";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* nsures new pages load from top */}
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            {/* Home Page (No Team here) */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Research />
                  <Publications />
                  <Contact />
                </>
              }
            />
            {/* Separate Team Page */}
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
