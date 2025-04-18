import { Routes, Route } from 'react-router-dom';
import AllProjects from './pages/AllProjects';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
    return (
        <Routes>
            <Route path="/portfolio" element={
                <>
                    <Navbar />
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    {/* <Contact /> */}
                    {/* <Footer /> */}
                </>
            } />

            <Route path="/portfolio/projects" element={<AllProjects />} />
        </Routes>
    )
};

export default App;
