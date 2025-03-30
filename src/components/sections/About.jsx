
const About = () => {
    return (
        <div>About</div>
    )
};

export default About;


// Classic Centered Section

// import React from "react";

// const About = () => {
//     return (
//         <section className="py-16 bg-gray-900 text-white opacity-0 animate-fadeIn">
//             <div className="container mx-auto px-6 text-center">
//                 <h2 className="text-4xl font-bold mb-4">About Me</h2>
//                 <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//                     I am a passionate web developer with expertise in React, TailwindCSS, and modern front-end technologies. My goal is to build beautiful and efficient web applications.
//                 </p>
//             </div>
//         </section>
//     )
// };

// export default About;

// Split Layout with Image & Text

// import React from "react";

// const About = () => {
//     return (
//         <section className="py-16 bg-gray-900 text-white opacity-0 animate-fadeIn">
//             <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
//                 <img
//                     src="https://via.placeholder.com/400"
//                     alt="Profile"
//                     className="w-80 h-80 object-cover rounded-full shadow-lg"
//                 />
//                 <div>
//                     <h2 className="text-4xl font-bold mb-4">Who Am I?</h2>
//                     <p className="text-lg text-gray-400">
//                         A creative web developer passionate about crafting intuitive and responsive user interfaces.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// };

// export default About;


// Timeline Style About

// import React from "react";

// const milestones = [
//     { year: "2022", text: "Started learning Web Development." },
//     { year: "2023", text: "Built multiple projects using React." },
//     { year: "2024", text: "Worked on real-world applications and freelancing." },
// ];

// const About = () => {
//     return (
//         <section className="py-16 bg-gray-900 text-white opacity-0 animate-fadeIn">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center mb-8">My Journey</h2>
//                 <div className="flex flex-col gap-8 max-w-2xl mx-auto">
//                     {milestones.map((milestone, index) => (
//                         <div key={index} className="flex gap-4 items-center">
//                             <span className="text-indigo-400 font-bold text-xl">{milestone.year}</span>
//                             <p className="text-gray-300">{milestone.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;

// Card-Style About Me Section

// import React from "react";

// const About = () => {
//     return (
//         <section className="py-16 bg-gray-900 text-white opacity-0 animate-fadeIn">
//             <div className="container mx-auto px-6 flex justify-center">
//                 <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-xl text-center">
//                     <h2 className="text-3xl font-bold mb-4">About Me</h2>
//                     <p className="text-lg text-gray-400">
//                         I am a web developer focused on building interactive experiences. Passionate about clean UI/UX and optimized performance.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;

// Fun Fact-Based Grid

// import React from "react";

// const facts = [
//     { title: "Projects Completed", value: "25+" },
//     { title: "Happy Clients", value: "10+" },
//     { title: "Cups of Coffee", value: "500+" },
// ];

// const About = () => {
//     return (
//         <section className="py-16 bg-gray-900 text-white opacity-0 animate-fadeIn">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center mb-8">Who Am I?</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//                     {facts.map((fact, index) => (
//                         <div key={index} className="p-6 bg-gray-800 rounded-lg text-center shadow-lg">
//                             <h3 className="text-3xl font-bold text-indigo-400">{fact.value}</h3>
//                             <p className="text-gray-300">{fact.title}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;




// import React from "react";
// import { useState, useEffect } from "react";

// const About = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     return (
//         <section
//             className={`min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
//                 }`}
//         >
//             <div className="max-w-4xl text-center">
//                 <h2 className="text-4xl font-bold mb-4 text-indigo-400">About Me</h2>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                     Hello! I'm a passionate web developer with expertise in building
//                     modern and user-friendly applications. I enjoy solving complex problems,
//                     learning new technologies, and creating seamless user experiences.
//                 </p>
//                 <div className="mt-6">
//                     <a
//                         href="#contact"
//                         className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg transition-all"
//                     >
//                         Get in Touch
//                     </a>
//                 </div>
//             </div>
//         </section>
//     )
// };

// export default About;


// import React from "react";

// const About = () => {
//     return (
//         <section className="py-16 bg-gray-900 text-white">
//             <div className="container mx-auto px-6 md:px-12 lg:px-16">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                     {/* Image Section */}
//                     <div className="relative">
//                         <img
//                             src="https://via.placeholder.com/400"
//                             alt="Profile"
//                             className="w-full max-w-md rounded-2xl shadow-lg mx-auto"
//                         />
//                         <div className="absolute top-4 -left-4 w-full h-full bg-indigo-600 rounded-2xl opacity-25 transform scale-105"></div>
//                     </div>

//                     {/* Text Section */}
//                     <div>
//                         <h2 className="text-4xl font-bold mb-4">About Me</h2>
//                         <p className="text-gray-400 leading-relaxed">
//                             Hi! I'm a passionate **MERN Stack Developer** with a love for building
//                             scalable and interactive web applications. I specialize in **React,
//                             Node.js, and TailwindCSS**, and I enjoy solving complex problems
//                             with elegant solutions.
//                         </p>

//                         <p className="text-gray-400 mt-4">
//                             My goal is to create **impactful digital experiences** that not only look
//                             great but also function seamlessly. Whether it's frontend, backend,
//                             or full-stack development, I'm always up for a challenge!
//                         </p>

//                         <div className="mt-6 flex flex-wrap gap-4">
//                             <a
//                                 href="/resume.pdf"
//                                 className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition"
//                             >
//                                 📄 Download Resume
//                             </a>
//                             <a
//                                 href="#contact"
//                                 className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
//                             >
//                                 📩 Contact Me
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;


// import React from "react";

// const About = () => {
//     return (
//         <section className="py-16 bg-gray-900 text-white">
//             <div
//                 className="container mx-auto px-6 md:px-12 lg:px-16 opacity-0 animate-fadeIn"
//             >
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                     {/* Image Section */}
//                     <div className="relative">
//                         <img
//                             src="https://via.placeholder.com/400"
//                             alt="Profile"
//                             className="w-full max-w-md rounded-2xl shadow-lg mx-auto"
//                         />
//                         <div className="absolute top-4 -left-4 w-full h-full bg-indigo-600 rounded-2xl opacity-25 transform scale-105"></div>
//                     </div>

//                     {/* Text Section */}
//                     <div>
//                         <h2 className="text-4xl font-bold mb-4">About Me</h2>
//                         <p className="text-gray-400 leading-relaxed">
//                             Hi! I'm a passionate **MERN Stack Developer** with a love for building
//                             scalable and interactive web applications. I specialize in **React,
//                             Node.js, and TailwindCSS**, and I enjoy solving complex problems
//                             with elegant solutions.
//                         </p>

//                         <p className="text-gray-400 mt-4">
//                             My goal is to create **impactful digital experiences** that not only look
//                             great but also function seamlessly. Whether it's frontend, backend,
//                             or full-stack development, I'm always up for a challenge!
//                         </p>

//                         <div className="mt-6 flex flex-wrap gap-4">
//                             <a
//                                 href="/resume.pdf"
//                                 className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition"
//                             >
//                                 📄 Download Resume
//                             </a>
//                             <a
//                                 href="#contact"
//                                 className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
//                             >
//                                 📩 Contact Me
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;
