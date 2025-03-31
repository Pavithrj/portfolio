import HeroPic from './../../assets/Home/hero-pic.png';

const Hero = () => {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center h-screen p-4 overflow-hidden text-center text-white lg:px-0 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="absolute w-56 h-56 bg-blue-500 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-purple-500 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>

            <div className="flex flex-col items-center gap-8 justify-between w-full mx-auto max-w-[1250px] lg:flex-row">
                <div className="flex flex-col gap-4 w-full lg:w-[60%] mx-auto">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-wide duration-500 sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
                        Hi, I'm <span className="text-blue-500">Pavithr Jain</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-base text-gray-300 duration-500 md:text-lg lg:text-lg animate-fade-in-delay">
                        Building robust and dynamic web applications as a <span className="font-bold text-blue-400">MERN Stack Developer</span>.
                    </p>

                    <div className="flex flex-row justify-center gap-4 sm:gap-6 animate-fade-in-delay">
                        <a href="#projects" className="p-3 text-sm font-semibold text-white transition-transform duration-300 transform rounded-lg shadow-xl sm:px-6 sm:text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 hover:shadow-2xl">
                            🚀 View Projects
                        </a>

                        <a href="#contact" className="p-3 text-sm font-semibold text-white transition-transform duration-300 transform border-2 border-blue-500 rounded-lg shadow-xl sm:px-6 sm:text-lg hover:bg-blue-500 hover:scale-105 hover:shadow-2xl">
                            📩 Contact Me
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mx-auto lg:w-[40%]">
                    <img src={HeroPic} alt="Profile" className="w-40 h-40 duration-500 rounded-full shadow-lg sm:h-64 sm:w-64 ring-4 ring-blue-500/50 hover:scale-110 animate-fade-in" />
                </div>
            </div>
        </section>
    )
};

export default Hero;
