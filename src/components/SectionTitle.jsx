export default function SectionTitle({ title, subtitle, className = "" }) {
    return (
        <div className={`text-center mb-12 ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1.5 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>
    );
}
