import GithubInIcon from "../icons/contact/GithubIcon";
import LinkedInIcon from "../icons/contact/LinkedInIcon";
import TelegramIcon from "../icons/contact/TelegramIcon";

const Contact = () => {
    return (
        <section id="contact" className="relative flex flex-col items-center justify-center w-full h-full min-h-screen p-4 text-white bg-gradient-to-b from-gray-900 to-gray-700">
            <div className="absolute w-56 h-56 bg-blue-500 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-purple-500 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>


            <div className="flex flex-col w-full max-w-3xl gap-4 mx-auto text-center">
                <h2 className="text-2xl font-extrabold leading-tight tracking-wide text-blue-400 duration-500 sm:text-3xl md:text-4xl lg:text-5xl animate-fadeIn">
                    Connect with Me
                </h2>

                <p className="mb-12 text-xs text-gray-400 duration-500 animate-fade-in-down animate-fadeIn 2xl:text-lg">
                    Let's collaborate, build something amazing, or just have a coffee chat! ☕
                </p>

                <form className="flex flex-col gap-6 duration-500 animate-fadeIn">
                    <input type="text" placeholder="Your Name" className="p-4 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    <input type="email" placeholder="Your Email" className="p-4 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    <textarea rows="5" placeholder="Your Message" className="p-4 bg-gray-900 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    <button className="px-6 py-3 font-semibold transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
                        Send Message
                    </button>
                </form>

                <div className="flex justify-center gap-6 mt-12 duration-500 animate-fadeIn">
                    <a href="https://github.com/Pavithrj" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
                        <GithubInIcon />
                    </a>

                    <a href="https://www.linkedin.com/in/pavithr-jain/" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
                        <LinkedInIcon />
                    </a>

                    <a href="https://t.me/Jarvis_of_Friday" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
                        <TelegramIcon />
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Contact;
