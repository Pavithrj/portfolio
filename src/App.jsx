import { Routes, Route } from 'react-router-dom';
import AllProjects from './pages/AllProjects';
import Portfolio from './pages/Portfolio';

function App() {
    return (
        <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/projects" element={<AllProjects />} />
        </Routes>
    )
};

export default App;
