import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

export function BaseCard({ children }: { children: ReactNode }) {
    return (
        <div className="transition duration-500 ease-in-out hover:scale-[1.02] bg-white/5 border border-white/10 p-6 shadow-md">
            {children}
        </div>
    );
}


export function CertCard({
    org,
    title,
    description,
    url,
    image,
}: {
    org: {
        name: string;
        url: string;
    };
    title: string;
    description: string;
    url: string;
    image: string;
}) {
    const [isShowImage, setShowImage] = useState(false);

    return (
        <div className="transition duration-500 ease-in-out hover:scale-[1.02] bg-white/5 h-fit border border-white/10 shadow-md rounded-xl overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between">
                    <div>
                        <Link to={url} className="text-xl font-normal underline">
                            {title}
                        </Link>
                        <p>{description}</p>
                    </div>
                    <Link to={org.url} className="text-sm">
                        {org.name}
                    </Link>
                </div>
            </div>
            <button
                type="button"
                className="w-full bg-white/5 text-xs py-1.5 transition duration-500 ease-in-out hover:bg-white/10"
                onClick={(e) => {
                    e.preventDefault();
                    setShowImage(!isShowImage);
                }}
            >
                {isShowImage ? "ปิด" : "ดู"}เกียรติบัตร
            </button>
            {isShowImage && (
                <div
                    className="bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="h-full p-4 flex justify-center backdrop-blur-sm bg-black/20">
                        <img
                            className="max-h-[200px] w-auto shadow-md rounded-xl"
                            src={image}
                            alt={`${title}_preview`}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}