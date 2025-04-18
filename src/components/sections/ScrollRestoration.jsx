import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
    const location = useLocation();

    useEffect(() => {
        const savedScrollY = sessionStorage.getItem("scrollY");

        if (savedScrollY && performance.navigation.type === 2) {
            window.scrollTo(0, parseInt(savedScrollY, 10));
        }

        const handleBeforeUnload = () => {
            sessionStorage.setItem("scrollY", window.scrollY);
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [location.pathname]);

    return null;
};

export default ScrollRestoration;
