import React from 'react'

const Contact = () => {
    return (
        <div>Contact</div>
    )
};

export default Contact;






// import React, { useState } from "react";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Message Sent Successfully!");
//         setFormData({ name: "", email: "", message: "" });
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen p-5 bg-gradient-to-br from-gray-500 to-gray-600">
//             <div className="w-full max-w-lg p-8 transition-all duration-500 transform bg-white shadow-xl rounded-2xl hover:scale-105 hover:shadow-2xl">
//                 <h2 className="text-3xl font-bold text-center text-gray-800">
//                     Contact Me
//                 </h2>

//                 <p className="mt-2 text-center text-gray-600">
//                     Let's get in touch!
//                 </p>

//                 <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//                     <div className="relative">
//                         <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400" />
//                     </div>

//                     <div className="relative">
//                         <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400" />
//                     </div>

//                     <div className="relative">
//                         <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="4" className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400" />
//                     </div>

//                     <button type="submit" className="w-full py-3 text-lg font-semibold text-white transition-all duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg">
//                         Send Message 🚀
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Contact;
