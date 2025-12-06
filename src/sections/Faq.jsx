import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is SIP?",
        answer: "SIP (Systematic Investment Plan) is a method of investing a fixed sum regularly in mutual funds. It helps in rupee cost averaging and disciplined investing.",
    },
    {
        question: "Is SIP safe for beginners?",
        answer: "Yes, SIP is one of the safest ways to enter the stock market as it reduces risk through averaging. However, mutual fund investments are subject to market risks.",
    },
    {
        question: "Can I increase or decrease my SIP amount?",
        answer: "Yes, you can increase (Step-up SIP) or decrease your SIP amount anytime. You can also pause or stop your SIP without penalty.",
    },
    {
        question: "What happens if I miss a SIP installment?",
        answer: "If you miss an installment, the bank may charge a penalty for insufficient funds, but the SIP continues. It is best to maintain sufficient balance.",
    },
    {
        question: "How do I start SIP with NJ E-Wealth?",
        answer: "Simply contact us or fill the inquiry form. We will help you complete your KYC (online) and set up your SIP in minutes.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionTitle
                    title="Frequently Asked Questions"
                    subtitle="Got questions? We have answers. Learn more about SIP and Mutual Funds."
                />

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border ${openIndex === index ? "border-green-500 shadow-md ring-1 ring-green-100" : "border-slate-200"
                                }`}
                        >
                            <button
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                            >
                                <span className={`font-semibold text-lg ${openIndex === index ? "text-green-700" : "text-slate-800"}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="text-green-600 transition-transform duration-300" />
                                ) : (
                                    <Plus className="text-slate-400 transition-transform duration-300" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
