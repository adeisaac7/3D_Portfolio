import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <Routes>
          {/* You can add more routes for individual pages here */}
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/works" element={<Works />} />
          {/* <Route path="/feedbacks" element={<Feedbacks />} /> */}
        </Routes>

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
};

export default App;
