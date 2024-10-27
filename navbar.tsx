import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <div
            className={`fixed pt-16 p-8 w-full bg-gradient-to-t from-black/40 via-black/40 to-black/0 bottom-0 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 ${
                isHomePage ? "navbar-home-animate" : ""
            }`}
        >
            <ul className="w-auto sm:w-[20%] hidden sm:flex items-center justify-center sm:justify-start space-x-6">
                
            </ul>
            <div className="w-full flex justify-center items-center space-x-6 text-base sm:text-lg">
                <Link to="https://jittiphat.site">Back to Home page</Link>
                <Link to="https://status.jittiphat.site">Status</Link>

            </div>
            <ul className="w-auto sm:w-[20%] flex justify-center items-center sm:justify-end space-x-6">
                
            </ul>
        </div>
    );
}