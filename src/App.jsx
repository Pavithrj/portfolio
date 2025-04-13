import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
    const sections = [Home, About, Skills];
    // const sections = [Projects, Contact];

    return (
        <div>
            <Navbar />

            {sections.map((Section, index) => (
                <Section key={index} />
            ))}

            {/* <Footer /> */}
        </div>
    )

};

export default App;
