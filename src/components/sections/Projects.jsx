import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectsData from './../../data/projects/ProjectsData';

const Projects = () => {
    const [imageLoadedStates, setImageLoadedStates] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("Frontend");
    const [visibleCount, setVisibleCount] = useState(8);
    const categories = ["Frontend", "Backend", "Full Stack"];

    const filteredProjects = ProjectsData.filter((project) => project.category === selectedCategory);

    useEffect(() => {
        const handleResizeOrCategoryChange = () => {
            const width = window.innerWidth;

            if (width < 600) {
                setVisibleCount(4);
            } else if (width < 1280) {
                setVisibleCount(6);
            } else {
                setVisibleCount(8);
            }
        };

        handleResizeOrCategoryChange();

        window.addEventListener("resize", handleResizeOrCategoryChange);
        return () => window.removeEventListener("resize", handleResizeOrCategoryChange);
    }, [selectedCategory]);

    return (
        <section id="projects" className="relative flex flex-col items-center justify-center h-full min-h-screen p-4 text-white bg-gray-900 lg:px-0 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="absolute w-56 h-56 bg-blue-500 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-purple-500 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>

            <div className="flex flex-col items-center w-full gap-6 animate-fadeIn">
                <h2 className="text-3xl font-extrabold leading-tight tracking-wide text-blue-400 duration-500 sm:text-4xl md:text-5xl lg:text-6xl animate-fadeIn">
                    Projects
                </h2>

                <div className="flex justify-center w-full gap-4 mx-auto duration-500 md:gap-10 animate-fadeIn">
                    {categories.map((category) => (
                        <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={`px-4 md:px-6 py-2 rounded-lg font-semibold transition-all text-sm md:text-base w-full sm:w-auto ${selectedCategory === category ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-400 opacity-70 hover:opacity-100 hover:bg-indigo-500 hover:text-white"}`}>
                            {category}
                        </button>
                    ))}
                </div>

                <div key={selectedCategory} className="grid grid-cols-2 gap-4 max-w-7xl lg:gap-8 md:grid-cols-3 xl:grid-cols-4 animate-fadeIn">
                    {filteredProjects.length > 0 ?
                        filteredProjects.slice(0, visibleCount).map((project, index) => (
                            <div key={index} className="relative w-full overflow-hidden duration-500 bg-gray-800 shadow-lg rounded-2xl group animate-fadeIn">
                                <img src={project.image} alt={project.title} onLoad={() => { setImageLoadedStates(prev => ({ ...prev, [index]: true })) }} className="object-cover w-full h-40 duration-500 lg:h-56" />

                                {imageLoadedStates[index] &&
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-500 opacity-0 bg-indigo-900/80 group-hover:opacity-100">
                                        <h3 className="text-base font-semibold sm:text-xl">
                                            {project.title}
                                        </h3>

                                        <p className="mt-2 text-xs sm:text-base">
                                            {project.description}
                                        </p>

                                        <a target="_blank" rel="noreferrer" href={project.link} className="px-4 py-2 mt-4 text-base bg-indigo-700 rounded-lg w-fit hover:bg-indigo-900">
                                            Launch Project
                                        </a>
                                    </div>
                                }
                            </div>
                        ))
                        :
                        <div className="flex items-center justify-center h-40 text-lg font-medium text-gray-400 col-span-full">
                            🚧 Projects brewing — exciting things on the way!
                        </div>
                    }
                </div>

                {filteredProjects.length > visibleCount &&
                    <Link to="/portfolio/projects" className="w-auto px-4 py-2 text-sm font-semibold text-white transition-all duration-500 bg-indigo-600 rounded-lg md:px-6 hover:bg-indigo-500">
                        Discover More
                    </Link>
                }
            </div>
        </section>
    )
};

export default Projects;
