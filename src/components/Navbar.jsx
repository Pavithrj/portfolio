import { useState } from 'react';
import PavithrJainLogo from './../assets/PavithrJainLogo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 p-4 fixed w-full top-0 shadow-md z-50">
            <nav className="mx-auto flex justify-between items-center px-4 md:px-8 w-full xl:w-[1250px]">
                <h1 className="text-lg md:text-xl font-bold text-white flex gap-3 items-center">
                    <img src={PavithrJainLogo} alt="Portfolio Logo" className="w-16 h-16" />

                    Pavithr Jain
                </h1>

                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="#about" className="text-gray-300 hover:text-white">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="text-gray-300 hover:text-white">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="text-gray-300 hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>

                <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(true)}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
                    </svg>
                </button>
            </nav>

            <div className={`fixed top-0 right-0 w-full h-full bg-gray-900 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button className="text-white text-3xl absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" fillRule="evenodd" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" />
                    </svg>
                </button>

                <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
                    <li>
                        <a href="#about" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Navbar;
