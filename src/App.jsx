import { Routes, Route } from 'react-router-dom';
import AllProjects from './pages/AllProjects';
import Portfolio from './pages/Portfolio';
import ScrollRestoration from './components/sections/ScrollRestoration';

function App() {
    return (
        <>
            <ScrollRestoration />

            <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/projects" element={<AllProjects />} />
            </Routes>
        </>
    )
};

export default App;
