import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages";
import Navbar from "./components/navbar";
import { AnimatePresence } from "framer-motion";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "*",
        element: <div className="flex justify-center items-center w-full h-screen">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-pink-500 opacity-50"></div>
            <h1 className="text-center text-2xl p-10 text-slate-500 z-10">
                404 -
                Page Not Found
            </h1>
        </div>,
    },
];

export default function App() {
    return (
        <>
            <div className="bg-black text-white">
                <BrowserRouter>
                    <div className="min-h-screen">
                        <RoutesWithTransition />
                        <Navbar />
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}

function RoutesWithTransition() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                {routes.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
            </Routes>
        </AnimatePresence>
    );
}
