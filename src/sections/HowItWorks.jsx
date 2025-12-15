import SectionTitle from "../components/SectionTitle";
import { UserPlus, Search, FileCheck, LineChart } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Share Your Goals",
        description: "Tell us about your financial targets—retirement, education, or wealth creation.",
        icon: <UserPlus className="w-6 h-6 text-white" />,
    },
    {
        id: "02",
        title: "Choose the Right Plan",
        description: "We help you select the best mutual funds tailored to your risk profile and timeline.",
        icon: <Search className="w-6 h-6 text-white" />,
    },
    {
        id: "03",
        title: "Complete KYC & Start",
        description: "Paperless, seamless onboarding process to get your investment journey started quickly.",
        icon: <FileCheck className="w-6 h-6 text-white" />,
    },
    {
        id: "04",
        title: "Track & Review",
        description: "Monitor your portfolio performance anytime with the NJ E-Wealth platform.",
        icon: <LineChart className="w-6 h-6 text-white" />,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="How It Works"
                    subtitle="Starting your investment journey is simple, fast, and completely paperless."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-slate-50 shadow-sm group-hover:border-green-100 transition-colors mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 -mr-4 mt-2 text-6xl font-black text-slate-200 -z-10 opacity-50 select-none">
                                {step.id}
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed px-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
