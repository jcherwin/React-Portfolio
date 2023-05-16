import React, { useState } from "react";

import Header from "./components/header/Header";
import Navigation from './components/header/Navigation';
import Footer from "./components/footer/Footer";
import About from './components/body/about/index';
import Portfolio from './components/body/portfolio';
import Contact from './components/body/contact/index';
import Resume from './components/body/resume/index';



export default function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header className="header">
                <Header />
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <main className="container my-10">
                {renderPage()}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}