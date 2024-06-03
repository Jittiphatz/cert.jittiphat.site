export function HelloTitle({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="mb-8">
            <h1 className="font-normal text-6xl mb-6">{title}</h1>
            <p className="font-normal text-2xl">{description}</p>
        </div>
    );
}
