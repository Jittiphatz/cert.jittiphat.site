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
                <a href="https://maki-service.xyz" title="Maki Service Shop">
                    <img
                        alt="Maki Service Shop"
                        width="42"
                        height="42"
                        src="images/maki.png"
                    />
                </a>
                <a href="https://github.com/MoriDev-2023" title="Mori Dev">
                    <img
                        alt="Mori Dev"
                        width="42"
                        height="42"
                        src="images/mori.png"
                    />
                </a>
            </ul>
            <div className="w-full flex justify-center items-center space-x-6 text-base sm:text-lg">
                <Link to="/">Home</Link>
                <Link to="/facts">Facts</Link>
                <Link to="/roles">Roles</Link>
                <Link to="/works">Works</Link>
                <Link to="/cert">Certificate</Link>
                <Link to="/contact">Contact me</Link>
                <Link to="https://status.jittiphat.site">Status</Link>

            </div>
            <ul className="w-auto sm:w-[20%] flex justify-center items-center sm:justify-end space-x-6">
                <a className="block sm:hidden" href="https://maki-service.xyz" title="Maki Service Shop">
                    <img
                        alt="Maki Service Shop"
                        width="42"
                        height="42"
                        src="images/maki.png"
                    />
                </a>
                <a className="block sm:hidden" href="https://github.com/MoriDev-2023" title="Mori Dev">
                    <img
                        alt="Mori Dev"
                        width="42"
                        height="42"
                        src="images/mori.png"
                    />
                </a>
               
            </ul>
        </div>
    );
}