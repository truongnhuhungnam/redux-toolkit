import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";

function App() {
    return (
        <div>
            <nav className="bg-black text-white p-4">
                <ul className="flex justify-center">
                    <li>
                        <Link to="/" className="px-4">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/news" className="px-4">
                            News
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="px-4">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-center items-center h-screen w-screen">
                <main className="w-1/3 p-[30px] shadow-md shadow-gray-300">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
