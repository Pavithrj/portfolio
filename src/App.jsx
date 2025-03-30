import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
    const sections = [Hero];
    // const sections = [About, Projects, Contact];

    return (
        <div className="h-full min-h-screen text-white bg-gray-900">
            <Navbar />

            {sections.map((Section, index) => (
                <Section key={index} />
            ))}

            {/* <Footer /> */}
        </div>
    )
};

export default App;
