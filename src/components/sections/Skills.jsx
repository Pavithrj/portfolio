import { useEffect, useState } from 'react';
import iconsData from './../icons/index';

const Skills = () => {
    const [hideSkills, setHideSkills] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowAllSkills = () => {
        setHideSkills(false);
        setVisibleCount(iconsData.length);
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width >= 1280) {
                setHideSkills(false);
                setVisibleCount(iconsData.length);
            } else {
                setVisibleCount(hideSkills ? 6 : iconsData.length);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [hideSkills]);

    return (
        <section id="skills" className="relative flex flex-col items-center justify-center h-full min-h-screen p-4 text-center text-white lg:px-0 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="absolute w-56 h-56 bg-blue-500 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-purple-500 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>

            <div className="flex flex-col items-center justify-center w-full gap-8 text-white">
                <h2 className="text-3xl font-extrabold leading-tight tracking-wide text-blue-400 duration-500 sm:text-4xl md:text-5xl lg:text-6xl animate-fadeIn">
                    Skills
                </h2>

                <div className="grid w-full max-w-5xl grid-cols-2 gap-4 duration-500 md:gap-8 sm:grid-cols-3 xl:grid-cols-4 animate-fadeIn">
                    {iconsData.slice(0, visibleCount).map((skill, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center p-4 transition-transform duration-500 bg-gray-700 shadow-lg group rounded-xl hover:scale-110"
                        >
                            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-full group-hover:animate-spin">
                                <skill.svg className="text-white w-14 h-14" />
                            </div>
                            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>

                {hideSkills && (
                    <button
                        onClick={handleShowAllSkills}
                        className="px-4 py-2 mx-auto text-sm font-semibold text-white transition-all duration-500 bg-indigo-600 rounded-lg w-fit md:px-6 hover:bg-indigo-500 xl:hidden"
                    >
                        Show More
                    </button>
                )}
            </div>
        </section>
    );
};

export default Skills;
