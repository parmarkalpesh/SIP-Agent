import SectionTitle from "../components/SectionTitle";
import { CheckCircle, Users, BarChart3, Smartphone, Shield, Clock } from "lucide-react";

export default function Benefits() {
    const benefits = [
        { text: "Personalized Goal-Based Planning", icon: Users },
        { text: "Diversified Mutual Fund Options", icon: BarChart3 },
        { text: "Transparent & Paperless Process", icon: Smartphone },
        { text: "Regular Portfolio Reviews", icon: Clock },
        { text: "Safe & Secure Transactions", icon: Shield },
        { text: "Dedicated Support via WhatsApp/Call", icon: CheckCircle },
    ];

    return (
        <section id="benefits" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Why Invest with <span className="text-green-600">NJ E-Wealth?</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We go beyond just being a distributor. We act as your financial partners,
                            guiding you through every market cycle to ensure you stay on track with your financial goals.
                            With improved technology and human expertise, wealth creation becomes effortless.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                                    <item.icon className="text-green-600 w-5 h-5 flex-shrink-0" />
                                    <span className="font-medium text-slate-700 text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <a href="#contact" className="inline-block px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                                Get Free Consultation
                            </a>
                        </div>
                    </div>

                    {/* Right Visual (Abstract Representation) */}
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square rounded-full bg-gradient-to-tr from-green-100 to-blue-50 relative flex items-center justify-center p-8">
                            <div className="absolute inset-0 border border-slate-200/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 border border-green-200/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                            <div className="text-center bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl max-w-xs">
                                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                                <div className="text-slate-900 font-bold text-lg">Focus on Your Growth</div>
                                <p className="text-slate-500 text-xs mt-2">We prioritize your financial well-being above everything else.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
