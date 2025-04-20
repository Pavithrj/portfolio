import Dummy from './../../../dummy.pdf';

const About = () => {
    return (
        <section id="about" className="relative flex flex-col items-center justify-center h-screen p-4 text-center text-white bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="absolute w-56 h-56 bg-blue-500 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-purple-500 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>

            <div className="flex flex-col items-center max-w-3xl gap-6 mx-auto animate-fadeIn">
                <h2 className="text-3xl font-extrabold leading-tight tracking-wide text-blue-400 duration-500 sm:text-4xl md:text-5xl lg:text-6xl animate-fadeIn">
                    About Me
                </h2>

                <p className="text-lg leading-relaxed text-gray-300 duration-500 sm:text-xl animate-fadeIn">
                    I am a <span className="font-bold text-blue-400">MERN Stack Developer</span> passionate about crafting <span className="font-bold text-blue-400"> efficient</span>, <span className="font-bold text-blue-400">scalable</span>, and <span className="font-bold text-blue-400"> user-friendly</span> web applications. With expertise in <span className="font-bold text-blue-400"> MongoDB</span>, <span className="font-bold text-blue-400"> Express.js</span>, <span className="font-bold text-blue-400"> React</span>, and <span className="font-bold text-blue-400"> Node.js</span>, I build dynamic digital solutions that enhance user experiences.
                </p>

                <a target="_blank" href={Dummy} download="Dummy.pdf"
                    className='px-6 py-3 text-lg font-semibold text-white transition-transform duration-500 transform rounded-lg shadow-xl w-fit bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 hover:shadow-2xl animate-fadeIn'>
                    📄 View Resume
                </a>
            </div>
        </section>
    )
};

export default About;
