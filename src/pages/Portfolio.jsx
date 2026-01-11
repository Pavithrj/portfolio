import Navbar from '../components/sections/Navbar';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Portfolio = () => {
    const sections = [Navbar, Home, About, Skills, Projects, Contact];

    return (
        <>
            {sections.map((Section, index) => (
                <Section key={index} />
            ))}
        </>
    )
};

export default Portfolio;
