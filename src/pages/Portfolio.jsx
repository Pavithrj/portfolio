import Navbar from './../components/layout/Navbar';
import Footer from './../components/layout/Footer';

import Home from '../components/sections/Home';
import About from './../components/sections/About';
import Skills from './../components/sections/Skills';
import Projects from './../components/sections/Projects';
import Contact from './../components/sections/Contact';

const Portfolio = () => {
    const sections = [Home, About, Skills, Projects];
    // const sections = [Projects];
    // const sections = [Contact];

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

export default Portfolio;
