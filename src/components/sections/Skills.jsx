
// const Skills = () => {
//     return (
//         <div>Skills</div>
//     )
// };

// export default Skills;

// const skills = [
//     { name: "HTML", icon: "🟧" },
//     { name: "CSS", icon: "🔵" },
//     { name: "JavaScript", icon: "🟨" },
//     { name: "React", icon: "⚛️" },
//     { name: "Node.js", icon: "🟩" },
//     { name: "MongoDB", icon: "🍃" },
// ];

// const Skills = () => {
//     return (
//         <section id="skills" className="flex flex-col items-center justify-center h-screen p-6 text-center text-white bg-gradient-to-b from-gray-900 to-gray-800">
//             <h2 className="mb-10 text-4xl font-bold text-blue-400">🛠️ My Skills</h2>
//             <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
//                 {skills.map((skill, index) => (
//                     <div key={index} className="p-6 transition duration-300 transform bg-gray-700 rounded-lg shadow-lg hover:scale-105">
//                         <p className="text-4xl">{skill.icon}</p>
//                         <p className="mt-2 text-lg font-semibold">{skill.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Skills;

// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";

// const skills = [
//     { name: "React", icon: <FaReact className="text-blue-400" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//     { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
//     { name: "Databases", icon: <FaDatabase className="text-gray-400" /> },
// ];

// const skills = [
//     { name: "React" },
//     { name: "Node.js" },
//     { name: "HTML5" },
//     { name: "CSS3" },
//     { name: "JavaScript" },
//     { name: "Databases" },
// ];

// const Skills = () => {
//     return (
//         <section id="skills" className="py-16 text-white bg-gray-900">
//             <h2 className="text-4xl font-bold text-center text-blue-400">Skills</h2>
//             <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mt-8 md:grid-cols-3">
//                 {skills.map((skill, index) => (
//                     <div key={index} className="flex flex-col items-center p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:scale-110">
//                         <div className="text-5xl">{ }</div>
//                         <p className="mt-4 text-xl font-semibold">{skill.name}</p>
//                     </div>
//                 ))}

//                 <svg viewBox="0 0 128 128" height="30px" width="30px">
//                     <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
//                 </svg>

//                 <svg viewBox="0 0 128 128" height="30px" width="30px">
//                     <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
//                 </svg>

//             </div>

//         </section>
//     );
// };

// export default Skills;



// const skills = [
//     { name: "React", svg: "/react.svg", color: "shadow-blue-500" },
//     { name: "Node.js", svg: "/nodejs.svg", color: "shadow-green-500" },
//     { name: "JavaScript", svg: "/javascript.svg", color: "shadow-yellow-500" },
//     { name: "HTML5", svg: "/html.svg", color: "shadow-orange-500" },
//     { name: "CSS3", svg: "/css.svg", color: "shadow-blue-400" },
//     { name: "MongoDB", svg: "/mongodb.svg", color: "shadow-green-600" },
// ];

// const Skills = () => {
//     return (
//         <section id="skills" className="py-16 text-white bg-gray-900">
//             <h2 className="text-4xl font-bold text-center text-blue-400">Skills</h2>
//             <div className="grid max-w-5xl grid-cols-2 gap-8 mx-auto mt-8 sm:grid-cols-3 md:grid-cols-4">
//                 {skills.map((skill, index) => (
//                     <div
//                         key={index}
//                         className={`group relative flex flex-col items-center p-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:${skill.color}`}
//                     >
//                         <div className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-full shadow-md group-hover:animate-spin">
//                             {/* <img src={skill.svg} alt={skill.name} className="w-14 h-14" /> */}

//                             <svg viewBox="0 0 128 128" height="30px" width="30px">
//                                 <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
//                             </svg>
//                         </div>
//                         <p className="mt-4 text-lg font-semibold">{skill.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Skills;


const skills = [
    { name: "React", svg: "/react.svg", color: "shadow-blue-500" },
    { name: "Node.js", svg: "/nodejs.svg", color: "shadow-green-500" },
    { name: "JavaScript", svg: "/javascript.svg", color: "shadow-yellow-500" },
    { name: "HTML5", svg: "/html.svg", color: "shadow-orange-500" },
    { name: "CSS3", svg: "/css.svg", color: "shadow-blue-400" },
    { name: "MongoDB", svg: "/mongodb.svg", color: "shadow-green-600" },
    { name: "TailwindCSS", svg: "/tailwind.svg", color: "shadow-teal-500" },
    { name: "Git", svg: "/git.svg", color: "shadow-red-500" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 text-white bg-gray-900">
            <h2 className="mb-10 text-4xl font-bold text-center text-blue-400">My Skills</h2>

            <div className="grid max-w-5xl grid-cols-3 gap-8 mx-auto sm:grid-cols-4 md:grid-cols-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`group relative flex flex-col items-center p-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:${skill.color}`}
                    >
                        <div className="flex items-center justify-center w-24 h-24 transition-transform duration-500 bg-gray-800 rounded-full shadow-md group-hover:rotate-180 group-hover:shadow-xl">
                            <svg viewBox="0 0 128 128" height="30px" width="30px">
                                <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                            </svg>

                            {/* <img src={skill.svg} alt={skill.name} className="w-14 h-14" /> */}
                        </div>
                        <p className="mt-4 text-lg font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;




// import { useEffect, useState, useRef } from "react";

// const skills = [
//     { name: "React", percentage: "90%" },
//     { name: "Node.js", percentage: "80%" },
//     { name: "JavaScript", percentage: "85%" },
//     { name: "CSS", percentage: "75%" },
//     { name: "MongoDB", percentage: "70%" },
// ];

// const Skills = () => {
//     const [visible, setVisible] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) setVisible(true);
//             },
//             { threshold: 0.5 }
//         );

//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section id="skills" ref={ref} className="py-16 text-white bg-gray-900">
//             <h2 className="text-4xl font-bold text-center text-blue-400">Skills</h2>
//             <div className="max-w-4xl mx-auto mt-8 space-y-6">
//                 {skills.map((skill, index) => (
//                     <div key={index} className="w-full">
//                         <p className="text-lg font-semibold">{skill.name}</p>
//                         <div className="w-full h-4 mt-2 overflow-hidden bg-gray-700 rounded-md">
//                             <div
//                                 className={`h-full bg-blue-500 transition-all duration-1000 ${visible ? `w-[${skill.percentage}]` : "w-0"}`}
//                             ></div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Skills;


// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

// const skills = [
//     { name: "React", icon: <FaReact />, percentage: "90%" },
//     { name: "Node.js", icon: <FaNodeJs />, percentage: "80%" },
//     { name: "JavaScript", icon: <FaJs />, percentage: "85%" },
//     { name: "HTML", icon: <FaHtml5 />, percentage: "95%" },
//     { name: "CSS", icon: <FaCss3Alt />, percentage: "90%" },
// ];

// const Skills = () => {
//     return (
//         <section id="skills" className="py-16 text-white bg-gray-900">
//             <h2 className="text-4xl font-bold text-center text-blue-400">Skills</h2>
//             <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mt-8 md:grid-cols-3">
//                 {skills.map((skill, index) => (
//                     <div key={index} className="relative flex flex-col items-center w-32 h-32 p-6 bg-gray-800 rounded-full shadow-lg">
//                         <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
//                             <div className="text-5xl">{skill.icon}</div>
//                         </div>
//                         <svg className="w-full h-full transform -rotate-90">
//                             <circle cx="50%" cy="50%" r="40%" stroke="gray" strokeWidth="5" fill="none" />
//                             <circle
//                                 cx="50%"
//                                 cy="50%"
//                                 r="40%"
//                                 stroke="blue"
//                                 strokeWidth="5"
//                                 fill="none"
//                                 strokeDasharray="251"
//                                 strokeDashoffset={`calc(251 - (251 * ${parseInt(skill.percentage)}) / 100)`}
//                                 className="transition-all duration-1000"
//                             />
//                         </svg>
//                         <p className="absolute text-lg font-semibold bottom-2">{skill.percentage}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Skills;
