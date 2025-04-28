
const Footer = () => {
    return (
        <footer className="relative w-full p-4 text-sm text-center text-gray-300 bg-gray-900 to-gray-800">
            <div className="animate-fadeIn">
                <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
                {/* <p>404 – Copyright Not Found (Just Kidding!)</p> */}

                © {new Date().getFullYear()} Pavithr Jain. All rights reserved.
            </div>
        </footer>
    )
};

export default Footer;
