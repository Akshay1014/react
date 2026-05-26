import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Import Pages
import Home from "./page/Home";
import Browse from "./page/Browse";
import Login from "./page/Login";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            // Redirect based on auth state
            if (currentUser && window.location.pathname === "/login") {
                navigate("/browse");
            } else if (!currentUser && window.location.pathname === "/browse") {
                navigate("/login");
            }
        });
    }, [navigate]);

    if (loading) {
        return <div className="text-white text-center p-10">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation Bar */}
            <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
                <div className="px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <Link
                            to="/"
                            className="text-3xl font-bold text-red-600 hover:text-red-500 transition"
                        >
                            Netflix
                        </Link>

                        {/* Navigation Links */}
                        {user && (
                            <div className="hidden md:flex gap-6">
                                <Link
                                    to="/"
                                    className="hover:text-gray-400 transition"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/browse"
                                    className="hover:text-gray-400 transition"
                                >
                                    Browse
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* User Section */}
                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                <span className="text-sm text-gray-300">
                                    {user.email}
                                </span>
                                <button
                                    onClick={() => {
                                        auth.signOut();
                                        navigate("/login");
                                    }}
                                    className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default Navbar;
