import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CV from './components/CV';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route exact path="/cv-maker/" element={<CV />}></Route>
                    <Route path="/cv-maker/about" element={<AboutPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
