
// const Projects = () => {
//     return (
//         <div>Projects</div>
//     )
// };

// export default Projects;


// const projects = [
//     {
//         id: 1,
//         title: "Portfolio Website",
//         description: "A modern portfolio built with React and TailwindCSS.",
//         image: "https://via.placeholder.com/300",
//         link: "#",
//     },
//     {
//         id: 2,
//         title: "E-Commerce App",
//         description: "A full-stack e-commerce platform with authentication.",
//         image: "https://via.placeholder.com/300",
//         link: "#",
//     },
//     {
//         id: 3,
//         title: "Weather App",
//         description: "A real-time weather application using OpenWeather API.",
//         image: "https://via.placeholder.com/300",
//         link: "#",
//     },
// ];

// const Projects = () => {
//     return (
//         <section id="projects" className="py-16 bg-gray-900 text-white">
//             <div className="max-w-6xl mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center mb-12">
//                     My Projects
//                 </h2>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map((project) => (
//                         <div key={project.id} className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
//                             <img src={project.image} alt={project.title} className="w-full h-52 object-cover group-hover:scale-105 transition duration-300" />

//                             <div className="p-6">
//                                 <h3 className="text-2xl font-semibold">
//                                     {project.title}
//                                 </h3>

//                                 <p className="text-gray-400 mt-2">
//                                     {project.description}
//                                 </p>

//                                 <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-500 transition duration-300">
//                                     View Project
//                                 </a>
//                             </div>

//                             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-60 transition duration-300"></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// };

// export default Projects;


import { useState } from 'react';
import ProjectsData from './../../data/data';

const categories = ["Frontend", "Backend", "Full Stack"];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("Frontend");

    const filteredProjects = ProjectsData.filter(
        (project) => project.category === selectedCategory
    );

    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8">
                    My Projects
                </h2>

                <div className="flex flex-wrap justify-center mx-auto gap-4 md:gap-10 mb-8 w-full lg:w-[50%]">
                    {categories.map((category) => (
                        <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 md:px-6 py-2 rounded-lg font-semibold transition-all text-sm md:text-base w-full sm:w-auto ${selectedCategory === category ? "bg-indigo-600 text-white" : "bg-gray-700 hover:bg-indigo-500 text-gray-300"}`}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (

                        // 1

                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg bg-gray-800 transform transition-all duration-500 ease-in-out hover:scale-105">
                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-opacity group-hover:opacity-75" />

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    {project.description}
                                </p>

                                <a href={project.link} className="inline-block mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition">
                                    View Project
                                </a>
                            </div>
                        </div>

                        // 2

                        // <div key={index} className="group relative overflow-hidden rounded-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105">
                        //   <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-opacity group-hover:opacity-75 rounded-t-2xl" />

                        //   <div className="p-6">
                        //     <h3 className="text-2xl font-semibold">{project.title}</h3>
                        //     <p className="text-gray-300 mt-2">{project.description}</p>

                        //     <a href={project.link} className="inline-block mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition">
                        //       View Project
                        //     </a>
                        //   </div>
                        // </div>

                        // 3

                        // <div key={index} className="group perspective">
                        //   <div className="relative w-full h-64 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">

                        //     {/* Front Side */}
                        //     <div className="absolute inset-0 rounded-2xl shadow-lg bg-gray-800 flex flex-col">
                        //       <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-2xl" />
                        //       <h3 className="text-xl font-semibold p-4 text-center">{project.title}</h3>
                        //     </div>

                        //     {/* Back Side */}
                        //     <div className="absolute inset-0 rounded-2xl shadow-lg bg-gray-800 text-white p-6 transform rotate-y-180 backface-hidden flex flex-col justify-center">
                        //       <p>{project.description}</p>
                        //       <a href={project.link} className="mt-4 px-4 py-2 bg-gray-100 text-indigo-900 rounded-lg text-center">
                        //         View Project
                        //       </a>
                        //     </div>
                        //   </div>
                        // </div>

                        // 4

                        // <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-800 group">
                        //   <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

                        //   {/* Overlay */}
                        //   <div className="absolute inset-x-0 bottom-0 bg-indigo-600 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        //     <h3 className="text-xl font-semibold">{project.title}</h3>
                        //     <p className="text-sm mt-2">{project.description}</p>
                        //     <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-white text-indigo-600 rounded-lg">
                        //       View Project
                        //     </a>
                        //   </div>
                        // </div>

                        // 5

                        // <div key={index} className="relative rounded-2xl bg-gray-900 p-6 shadow-[10px_10px_30px_rgba(0,0,0,0.2),-10px_-10px_30px_rgba(255,255,255,0.05)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(255,255,255,0.05)] transition-all duration-500">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-xl" />
                        //     <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
                        //     <p className="text-gray-400 mt-2">{project.description}</p>
                        //     <a href={project.link} className="inline-block mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition">
                        //         View Project
                        //     </a>
                        // </div>

                        // 6

                        // <div key={index} className="relative group overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition-transform duration-300 hover:-rotate-2 hover:scale-105">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

                        //     <div className="p-6">
                        //         <h3 className="text-2xl font-semibold">{project.title}</h3>
                        //         <p className="text-gray-400 mt-2">{project.description}</p>
                        //         <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 7

                        // <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-800 group">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

                        //     {/* Overlay */}
                        //     <div className="absolute inset-0 bg-gradient-to-t from-indigo-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        //         <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        //         <p className="text-gray-300 mt-2">{project.description}</p>
                        //         <a href={project.link} className="mt-4 px-4 py-2 bg-white text-indigo-600 rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 8

                        // <div key={index} className="relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-3">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg" />

                        //     <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
                        //     <p className="text-gray-300 mt-2">{project.description}</p>
                        //     <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 9

                        // <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:-translate-y-10" />

                        //     <div className="absolute bottom-0 left-0 right-0 bg-indigo-700 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        //         <h3 className="text-xl font-semibold">{project.title}</h3>
                        //         <p className="text-gray-300 mt-2">{project.description}</p>
                        //         <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-white text-indigo-600 rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 10

                        // <div key={index} className="relative border-2 border-gray-700 rounded-2xl p-6 shadow-lg bg-gray-900 hover:border-indigo-500 transition-all duration-300">
                        //     <div className="flex items-center space-x-4">
                        //         <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-full">
                        //             🔗
                        //         </div>
                        //         <h3 className="text-2xl font-semibold">{project.title}</h3>
                        //     </div>
                        //     <p className="text-gray-400 mt-4">{project.description}</p>
                        //     <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 11

                        // <div key={index} className="relative p-6 rounded-2xl bg-gray-900 shadow-lg border border-gray-800 group transition-all duration-300 hover:shadow-neon-blue">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg" />
                        //     <h3 className="text-2xl font-semibold text-white mt-4">{project.title}</h3>
                        //     <p className="text-gray-400 mt-2">{project.description}</p>
                        //     <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-neon-blue hover:bg-indigo-500 text-white rounded-lg transition">
                        //         View Project
                        //     </a>
                        // </div>

                        // 12

                        // <div key={index} className="relative p-6 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-lg transition-transform duration-300 hover:-translate-y-3">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg" />
                        //     <h3 className="text-2xl font-semibold text-white mt-4">{project.title}</h3>
                        //     <p className="text-gray-300 mt-2">{project.description}</p>
                        //     <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 13

                        // <div key={index} className="relative bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg" />
                        //     <h3 className="text-2xl font-semibold text-white mt-4">{project.title}</h3>
                        //     <p className="text-gray-400 mt-2">{project.description}</p>

                        //     <a href={project.link} className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                        //         View Project
                        //     </a>
                        // </div>

                        // 14

                        // <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900">
                        //     <div className="relative overflow-hidden">
                        //         <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" />
                        //     </div>
                        //     <div className="p-6">
                        //         <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        //         <p className="text-gray-400 mt-2">{project.description}</p>
                        //         <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 15

                        // <div key={index} className="relative p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg" />
                        //     <h3 className="text-2xl font-semibold text-white mt-4">{project.title}</h3>
                        //     <p className="text-gray-400 mt-2">{project.description}</p>
                        //     <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 16

                        // <div key={index} className="relative border-2 border-gray-700 rounded-2xl p-6 shadow-lg bg-gray-900 hover:border-indigo-500 transition-all">
                        //     <div className="flex items-center space-x-4">
                        //         <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-full">
                        //             🔗
                        //         </div>
                        //         <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        //     </div>
                        //     <p className="text-gray-400 mt-4">{project.description}</p>
                        //     <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 17

                        // <div key={index} className="relative p-6 rounded-2xl bg-gray-800 shadow-lg transition-all duration-300 transform hover:-rotate-2 hover:scale-105">
                        //     <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg" />
                        //     <h3 className="text-2xl font-semibold text-white mt-4">{project.title}</h3>
                        //     <p className="text-gray-400 mt-2">{project.description}</p>
                        //     <a href={project.link} className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 18

                        // <div key={index} className="flex flex-col md:flex-row items-center bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        //     <img src={project.image} alt={project.title} className="w-full md:w-1/2 h-56 object-cover" />
                        //     <div className="p-6 w-full md:w-1/2">
                        //         <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        //         <p className="text-gray-400 mt-2">{project.description}</p>
                        //         <a href={project.link} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
