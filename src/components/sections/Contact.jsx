import GithubInIcon from "../icons/contact/GithubIcon";
import LinkedInIcon from "../icons/contact/LinkedInIcon";
import TelegramIcon from "../icons/contact/TelegramIcon";

const Contact = () => {
    return (
        <section id="contact" className="p-4 w-full bg-gradient-to-b from-gray-900 to-gray-700 text-white min-h-screen relative h-full flex flex-col items-center justify-center">
            <div className="absolute w-56 h-56 bg-blue-500 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-purple-500 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>


            <div className="max-w-3xl w-full mx-auto text-center flex flex-col gap-4">
                <h2 className="text-4xl font-bold animate-fade-in-down">Connect with Me</h2>
                <p className="text-gray-400 mb-12 animate-fade-in-down delay-100">
                    Let's collaborate, build something amazing, or just have a coffee chat! ☕
                </p>

                {/* Contact Form */}
                <form className="flex flex-col gap-6 animate-fade-in-up delay-200">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-4 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-4 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="p-4 rounded-lg bg-gray-900 focus:outline-none resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg font-semibold"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Media Links */}
                <div className="flex justify-center gap-6 mt-12 animate-fade-in-up delay-300">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                        <GithubInIcon />

                        {/* <FaGithub size={32} /> */}
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                        <LinkedInIcon />

                        {/* <FaLinkedin size={32} /> */}
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                        <TelegramIcon />

                        {/* <FaTwitter size={32} /> */}
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Contact;
