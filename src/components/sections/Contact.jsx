import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import GithubInIcon from '../icons/contact/GithubIcon';
import LinkedInIcon from '../icons/contact/LinkedInIcon';
import TelegramIcon from '../icons/contact/TelegramIcon';

const Contact = () => {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .sendForm(
                'service_9i31fre',
                'template_2ekbyel',
                form.current,
                'a4un2DtiM1gkuoczA'
            )
            .then(
                () => {
                    setSuccess(true);
                    form.current.reset();
                },
                () => {
                    setSuccess(false);
                }
            )
            .finally(() => setSending(false))
    };

    return (
        <section id="contact" className="relative flex flex-col items-center justify-center h-full min-h-screen p-4 text-white lg:px-0 bg-gradient-to-b from-gray-900 to-gray-700">
            <div className="absolute w-56 h-56 bg-blue-500 rounded-full top-1/4 left-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>
            <div className="absolute w-56 h-56 bg-purple-500 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 opacity-20 blur-3xl"></div>

            <div className="flex flex-col w-full max-w-3xl gap-4 mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-wide text-blue-400 duration-500 sm:text-4xl md:text-5xl lg:text-6xl animate-fadeIn">
                    Connect with Me
                </h2>

                <p className="text-xs text-gray-400 duration-500 md:text-xl animate-fadeIn">
                    Ping Me Anytime! 🚀
                </p>

                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 py-5 duration-500 animate-fadeIn">
                    <input name="name" type="text" placeholder="Your Name" required className="p-4 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    <input name="email" type="email" placeholder="Your Email" required className="p-4 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    <textarea name="message" rows="5" placeholder="Your Message" required className="p-4 bg-gray-900 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    <button disabled={sending} className="px-6 py-3 font-semibold transition bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50">
                        {sending ? "Sending..." : "Submit"}
                    </button>
                </form>

                {success === true &&
                    <p className="text-green-400 animate-fadeIn">
                        Message sent successfully ✅
                    </p>
                }

                {success === false &&
                    <p className="text-red-400 animate-fadeIn">
                        Failed to send. Try again ❌
                    </p>
                }

                <div className="flex justify-center gap-6 duration-500 animate-fadeIn">
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
