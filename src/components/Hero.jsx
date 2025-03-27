
// const Hero = () => {
//     return (
//         <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-center">
//             <h1 className="text-5xl font-bold text-white">Hi, I'm [Your Name]</h1>
//             <p className="text-xl text-gray-200 mt-4">Web Developer | React Enthusiast</p>
//             <a href="#projects" className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">View My Work</a>
//         </section>
//     )
// };

// export default Hero;

// Responsive
const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-center px-4 md:px-8">
            <header>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Hi, I'm [Your Name]</h1>
                <p className="text-lg md:text-xl text-gray-200 mt-4">Web Developer | React Enthusiast</p>
            </header>
            <a href="#projects" className="mt-6 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">View My Work</a>
        </section>
    )
};

export default Hero;
