import { useEffect, useState } from 'react';
import HamburgerIcon from './../icons/Navbar/HamburgerIcon';
import CloseIcon from './../icons/Navbar/CloseIcon';
import PavithrJainLogo from './../../assets/Navbar/PavithrJainLogo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        setMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => window.innerWidth >= 768 && setMenuOpen(false);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed top-0 z-50 w-full p-4 bg-gray-800 shadow-md">
            <nav className="mx-auto flex justify-between items-center w-full xl:w-[1300px]">
                <img src={PavithrJainLogo} alt="Portfolio Logo" className="w-10 h-10 md:w-16 md:h-16" />

                <div className="hidden gap-8 text-2xl text-gray-300 md:flex">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleScroll(item.toLowerCase()); }} className="hover:text-white">
                            {item}
                        </a>
                    ))}
                </div>

                <button className="md:hidden" onClick={() => setMenuOpen(true)}>
                    <HamburgerIcon />
                </button>
            </nav>

            <div className={`fixed top-0 right-0 w-full h-full bg-gray-900 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
                    <CloseIcon />
                </button>

                <div className="flex flex-col items-center justify-center h-full gap-6 text-2xl text-gray-300">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleScroll(item.toLowerCase()); }} className="hover:text-white">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
};

export default Navbar;
