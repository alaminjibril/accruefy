interface StatCardProps {
    title: string;
    value: string;
    className?: string;
}

export default function StatCard({ title, value, className = "" }: StatCardProps) {
    return (
        <div
            className={`bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center text-center ${className}`}
        >
            <p className="text-2xl font-bold text-black">{value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{title}</p>
        </div>
    );
}
