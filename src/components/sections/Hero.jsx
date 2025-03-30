
const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-center">
            <h1 className="text-5xl font-bold text-white">Hi, I'm [Your Name]</h1>
            <p className="text-xl text-gray-200 mt-4">Web Developer | React Enthusiast</p>
            <a href="#projects" className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">View My Work</a>
        </section>
    )
};

export default Hero;

// Responsive
// const Hero = () => {
//     return (
//         <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-center px-4 md:px-8">
//             <header>
//                 <h1 className="text-3xl md:text-5xl font-bold text-white">Hi, I'm [Your Name]</h1>
//                 <p className="text-lg md:text-xl text-gray-200 mt-4">Web Developer | React Enthusiast</p>
//             </header>
//             <a href="#projects" className="mt-6 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">View My Work</a>
//         </section>
//     )
// };

// export default Hero;




// const Hero = () => {
//     return (
//         <section className="h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//             {/* Animated Intro Text */}
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
//                 Hi, I'm <span className="text-blue-500">Pavithr Jain</span> 👋
//             </h1>

//             <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl animate-fade-in-delay">
//                 A passionate <span className="text-blue-400">Web Developer</span> crafting beautiful & functional websites with ReactJS and TailwindCSS.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex gap-4 animate-fade-in-delay">
//                 <a
//                     href="#projects"
//                     className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
//                 >
//                     View Projects 🚀
//                 </a>
//                 <a
//                     href="#contact"
//                     className="border-2 border-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105 duration-300"
//                 >
//                     Contact Me 📩
//                 </a>
//             </div>

//             {/* Floating Avatar */}
//             <img
//                 src="/assets/PavithrJainLogo.png" // Make sure the path is correct
//                 alt="Profile"
//                 className="w-32 h-32 md:w-40 md:h-40 rounded-full mt-10 shadow-lg animate-bounce-slow"
//             />
//         </section>
//     )
// };

// export default Hero;
