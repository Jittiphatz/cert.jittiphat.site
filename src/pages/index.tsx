import "../styles/index.css";

export default function HomePage() {
    return (
        <>
            <div
                className="relative h-screen overflow-hidden px-1"
            >
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover bg-aura-animate"
                    src="/images/bg-red.jpg"
                    alt="bg-red"
                />
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-left bg-photo"
                    src="/images/drummer.jpg"
                    alt="drummer"
                />

                <div className="relative h-full flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-8xl sm:text-9xl font-normal main-text-animate drop-shadow-md mb-8">
                            Jittiphat Somsai
                        </h1>
                        <p className="text-2xl font-thin description-text-animate">
                            <span className="whitespace-nowrap">
                                💻Developer
                            </span>{" "}
                            <span className="whitespace-nowrap">
                                & Drummer🥁
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
