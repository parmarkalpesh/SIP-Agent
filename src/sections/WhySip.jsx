import SectionTitle from "../components/SectionTitle";
import { TrendingUp, Clock, Wallet, PiggyBank } from "lucide-react";

const reasons = [
    {
        title: "Rupee Cost Averaging",
        description:
            "Buy more units when markets are low and fewer when high, averaging out the cost over time.",
        icon: <Wallet className="w-8 h-8 text-white" />,
        color: "bg-blue-500",
    },
    {
        title: "Power of Compounding",
        description:
            "Reinvest your earnings to generate more earnings. Start early to maximize this benefit.",
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        color: "bg-green-500",
    },
    {
        title: "Disciplined Investing",
        description:
            "Develop a regular habit of saving and investing small amounts without timing the market.",
        icon: <Clock className="w-8 h-8 text-white" />,
        color: "bg-orange-500",
    },
    {
        title: "Wealth Creation",
        description:
            "Ideal for long-term goals like retirement, children's education, or buying a dream home.",
        icon: <PiggyBank className="w-8 h-8 text-white" />,
        color: "bg-purple-500",
    },
];

export default function WhySip() {
    return (
        <section id="why-sip" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Why Choose SIP?"
                    subtitle="Systematic Investment Plans (SIP) are the smartest way to build wealth over time."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                        >
                            <div
                                className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform ${item.color} shadow-lg`}
                            >
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
