
const Projects = () => {
    return (
        <div>Projects</div>
    )
};

export default Projects;


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
//         <section id="projects" className="py-16 text-white bg-gray-900">
//             <div className="max-w-6xl px-6 mx-auto">
//                 <h2 className="mb-12 text-4xl font-bold text-center">
//                     My Projects
//                 </h2>

//                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                     {projects.map((project) => (
//                         <div key={project.id} className="relative overflow-hidden transition duration-300 transform bg-gray-800 rounded-lg shadow-lg group hover:shadow-2xl hover:-translate-y-2">
//                             <img src={project.image} alt={project.title} className="object-cover w-full transition duration-300 h-52 group-hover:scale-105" />

//                             <div className="p-6">
//                                 <h3 className="text-2xl font-semibold">
//                                     {project.title}
//                                 </h3>

//                                 <p className="mt-2 text-gray-400">
//                                     {project.description}
//                                 </p>

//                                 <a href={project.link} className="inline-block px-4 py-2 mt-4 font-medium text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500">
//                                     View Project
//                                 </a>
//                             </div>

//                             <div className="absolute inset-0 transition duration-300 opacity-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:opacity-60"></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// };

// export default Projects;


// import { useState } from 'react';
// import ProjectsData from './../../data/projects/ProjectsData';

// const categories = ["Frontend", "Backend", "Full Stack"];

// const Projects = () => {
//     const [selectedCategory, setSelectedCategory] = useState("Frontend");

//     const filteredProjects = ProjectsData.filter(
//         (project) => project.category === selectedCategory
//     );

//     return (
//         <section className="py-16 text-white bg-gray-900">
//             <div className="container px-6 mx-auto">
//                 <h2 className="mb-8 text-4xl font-bold text-center">
//                     My Projects
//                 </h2>

                {/* <div className="flex flex-wrap justify-center mx-auto gap-4 md:gap-10 mb-8 w-full lg:w-[50%]">
                    {categories.map((category) => (
                        <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 md:px-6 py-2 rounded-lg font-semibold transition-all text-sm md:text-base w-full sm:w-auto ${selectedCategory === category ? "bg-indigo-600 text-white" : "bg-gray-700 hover:bg-indigo-500 text-gray-300"}`}>
                            {category}
                        </button>
                    ))}
                </div> */}

                {/* Projects Grid */}
                {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"> */}
                    {/* {filteredProjects.map((project, index) => ( */}

                        // 1

                        // <div key={index} className="relative overflow-hidden transition-all duration-500 ease-in-out transform bg-gray-800 shadow-lg group rounded-2xl hover:scale-105">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 transition-opacity group-hover:opacity-75" />

                        //     <div className="p-6">
                        //         <h3 className="text-2xl font-semibold">
                        //             {project.title}
                        //         </h3>

                        //         <p className="mt-2 text-gray-400">
                        //             {project.description}
                        //         </p>

                        //         <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-500">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 2

                        // <div key={index} className="relative overflow-hidden transition-all duration-500 ease-in-out transform bg-white shadow-lg group rounded-2xl bg-opacity-10 backdrop-blur-md hover:scale-105">
                        //   <img src={project.image} alt={project.title} className="object-cover w-full h-56 transition-opacity group-hover:opacity-75 rounded-t-2xl" />

                        //   <div className="p-6">
                        //     <h3 className="text-2xl font-semibold">{project.title}</h3>
                        //     <p className="mt-2 text-gray-300">{project.description}</p>

                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-500">
                        //       View Project
                        //     </a>
                        //   </div>
                        // </div>

                        // 3

                        // <div key={index} className="group perspective">
                        //   <div className="relative w-full h-64 transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">

                        //     {/* Front Side */}
                        //     <div className="absolute inset-0 flex flex-col bg-gray-800 shadow-lg rounded-2xl">
                        //       <img src={project.image} alt={project.title} className="object-cover w-full h-40 rounded-t-2xl" />
                        //       <h3 className="p-4 text-xl font-semibold text-center">{project.title}</h3>
                        //     </div>

                        //     {/* Back Side */}
                        //     <div className="absolute inset-0 flex flex-col justify-center p-6 text-white transform bg-gray-800 shadow-lg rounded-2xl rotate-y-180 backface-hidden">
                        //       <p>{project.description}</p>
                        //       <a href={project.link} className="px-4 py-2 mt-4 text-center text-indigo-900 bg-gray-100 rounded-lg">
                        //         View Project
                        //       </a>
                        //     </div>
                        //   </div>
                        // </div>

                        // 4

                        // <div key={index} className="relative overflow-hidden bg-gray-800 shadow-lg rounded-2xl group">
                        //   <img src={project.image} alt={project.title} className="object-cover w-full h-56" />

                        //   {/* Overlay */}
                        //   <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-transform duration-500 ease-in-out transform translate-y-full bg-indigo-600 group-hover:translate-y-0">
                        //     <h3 className="text-xl font-semibold">{project.title}</h3>
                        //     <p className="mt-2 text-sm">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-indigo-600 bg-white rounded-lg">
                        //       View Project
                        //     </a>
                        //   </div>
                        // </div>

                        // 5

                        // <div key={index} className="relative rounded-2xl bg-gray-900 p-6 shadow-[10px_10px_30px_rgba(0,0,0,0.2),-10px_-10px_30px_rgba(255,255,255,0.05)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(255,255,255,0.05)] transition-all duration-500">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-xl" />
                        //     <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                        //     <p className="mt-2 text-gray-400">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-500">
                        //         View Project
                        //     </a>
                        // </div>

                        // 6

                        // <div key={index} className="relative overflow-hidden transition-transform duration-300 bg-gray-800 shadow-lg group rounded-2xl hover:-rotate-2 hover:scale-105">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56" />

                        //     <div className="p-6">
                        //         <h3 className="text-2xl font-semibold">{project.title}</h3>
                        //         <p className="mt-2 text-gray-400">{project.description}</p>
                        //         <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 7

                        // <div key={index} className="relative overflow-hidden bg-gray-800 shadow-lg rounded-2xl group">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56" />

                        //     {/* Overlay */}
                        //     <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-indigo-800 to-transparent group-hover:opacity-100">
                        //         <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        //         <p className="mt-2 text-gray-300">{project.description}</p>
                        //         <a href={project.link} className="px-4 py-2 mt-4 text-indigo-600 bg-white rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 8

                        // <div key={index} className="relative p-6 transition-transform duration-300 transform bg-white shadow-lg bg-opacity-10 backdrop-blur-md rounded-2xl hover:-translate-y-3">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-lg" />

                        //     <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                        //     <p className="mt-2 text-gray-300">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">
                        //         View Project
                        //     </a>
                        // </div>

                        // 9

                        // <div key={index} className="relative overflow-hidden bg-gray-800 shadow-lg group rounded-2xl">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 transition-transform duration-500 group-hover:-translate-y-10" />

                        //     <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-500 bg-indigo-700 opacity-0 group-hover:opacity-100">
                        //         <h3 className="text-xl font-semibold">{project.title}</h3>
                        //         <p className="mt-2 text-gray-300">{project.description}</p>
                        //         <a href={project.link} className="inline-block px-4 py-2 mt-4 text-indigo-600 bg-white rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 10

                        // <div key={index} className="relative p-6 transition-all duration-300 bg-gray-900 border-2 border-gray-700 shadow-lg rounded-2xl hover:border-indigo-500">
                        //     <div className="flex items-center space-x-4">
                        //         <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-full">
                        //             🔗
                        //         </div>
                        //         <h3 className="text-2xl font-semibold">{project.title}</h3>
                        //     </div>
                        //     <p className="mt-4 text-gray-400">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">
                        //         View Project
                        //     </a>
                        // </div>

                        // 11

                        // <div key={index} className="relative p-6 transition-all duration-300 bg-gray-900 border border-gray-800 shadow-lg rounded-2xl group hover:shadow-neon-blue">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-lg" />
                        //     <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                        //     <p className="mt-2 text-gray-400">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white transition rounded-lg bg-neon-blue hover:bg-indigo-500">
                        //         View Project
                        //     </a>
                        // </div>

                        // 12

                        // <div key={index} className="relative p-6 transition-transform duration-300 bg-white shadow-lg rounded-2xl bg-opacity-10 backdrop-blur-lg hover:-translate-y-3">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-lg" />
                        //     <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                        //     <p className="mt-2 text-gray-300">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 13

                        // <div key={index} className="relative p-6 transition-all bg-gray-800 shadow-lg rounded-2xl hover:shadow-xl">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-lg" />
                        //     <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                        //     <p className="mt-2 text-gray-400">{project.description}</p>

                        //     <a href={project.link} className="absolute px-6 py-3 text-white transition-all transform -translate-x-1/2 bg-indigo-600 rounded-full opacity-0 -bottom-6 left-1/2 group-hover:opacity-100">
                        //         View Project
                        //     </a>
                        // </div>

                        // 14

                        // <div key={index} className="relative overflow-hidden bg-gray-900 shadow-lg rounded-2xl">
                        //     <div className="relative overflow-hidden">
                        //         <img src={project.image} alt={project.title} className="object-cover w-full h-56 transition-transform duration-500 hover:scale-110" />
                        //     </div>
                        //     <div className="p-6">
                        //         <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        //         <p className="mt-2 text-gray-400">{project.description}</p>
                        //         <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>

                        // 15

                        // <div key={index} className="relative p-6 transition-all duration-300 bg-gray-900 shadow-lg rounded-2xl hover:shadow-2xl">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-lg" />
                        //     <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                        //     <p className="mt-2 text-gray-400">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 16

                        // <div key={index} className="relative p-6 transition-all bg-gray-900 border-2 border-gray-700 shadow-lg rounded-2xl hover:border-indigo-500">
                        //     <div className="flex items-center space-x-4">
                        //         <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-full">
                        //             🔗
                        //         </div>
                        //         <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        //     </div>
                        //     <p className="mt-4 text-gray-400">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 17

                        // <div key={index} className="relative p-6 transition-all duration-300 transform bg-gray-800 shadow-lg rounded-2xl hover:-rotate-2 hover:scale-105">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-lg" />
                        //     <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                        //     <p className="mt-2 text-gray-400">{project.description}</p>
                        //     <a href={project.link} className="inline-block px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg">
                        //         View Project
                        //     </a>
                        // </div>

                        // 18

                        // <div key={index} className="flex flex-col items-center overflow-hidden bg-gray-800 shadow-lg md:flex-row rounded-2xl">
                        //     <img src={project.image} alt={project.title} className="object-cover w-full h-56 md:w-1/2" />
                        //     <div className="w-full p-6 md:w-1/2">
                        //         <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        //         <p className="mt-2 text-gray-400">{project.description}</p>
                        //         <a href={project.link} className="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg">
                        //             View Project
                        //         </a>
                        //     </div>
                        // </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Projects;
