import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectsData from './../../data/projects/ProjectsData';

const Projects = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Frontend");
    const [visibleCount, setVisibleCount] = useState(8);
    const categories = ["Frontend", "Backend", "Full Stack"];

    const filteredProjects = ProjectsData.filter((project) => project.category === selectedCategory);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 600) {
                setVisibleCount(4);
            } else if (width < 1280) {
                setVisibleCount(6);
            } else {
                setVisibleCount(8);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="projects" className="relative flex flex-col items-center justify-center min-h-screen text-white bg-gray-900 lg:p-0 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="absolute w-56 h-56 bg-blue-500 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-purple-500 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>

            <div className="flex flex-col items-center w-full gap-6 px-4 py-8 animate-fade-in">
                <h2 className="text-3xl font-extrabold leading-tight tracking-wide text-blue-400 duration-500 sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
                    Projects
                </h2>

                <div className="flex justify-center w-full gap-4 mx-auto duration-500 md:gap-10 animate-fade-in">
                    {categories.map((category) => (
                        <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 duration-500 md:px-6 py-2 rounded-lg font-semibold transition-all text-sm md:text-base w-full sm:w-auto ${selectedCategory === category ? "bg-indigo-600 text-white" : "bg-gray-700 hover:bg-indigo-500 text-gray-300"}`}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-7xl lg:gap-8 md:grid-cols-3 xl:grid-cols-4 animate-fade-in">
                    {filteredProjects.slice(0, visibleCount).map((project, index) => (
                        <div key={index} className="relative w-full overflow-hidden duration-500 bg-gray-800 shadow-lg rounded-2xl group animate-fade-in">
                            <img src={project.image} alt={project.title} onLoad={() => setImageLoaded(true)} className="object-cover w-full h-40 duration-500 lg:h-56" />

                            {imageLoaded &&
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-500 opacity-0 bg-indigo-400/80 group-hover:opacity-100">
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2">
                                        {project.description}
                                    </p>

                                    <a href={project.link} className="px-4 py-2 mt-4 bg-indigo-500 rounded-lg w-fit hover:bg-indigo-900">
                                        View Project
                                    </a>
                                </div>
                            }
                        </div>
                    ))}
                </div>

                <Link to="/portfolio/projects" className="w-auto px-4 py-2 text-sm font-semibold text-white transition-all duration-500 bg-indigo-600 rounded-lg md:px-6 hover:bg-indigo-500">
                    Discover More
                </Link>
            </div>
        </section>
    )
};

export default Projects;
