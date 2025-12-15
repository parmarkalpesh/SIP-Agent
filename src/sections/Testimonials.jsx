import SectionTitle from "../components/SectionTitle";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        location: "Jamnagar, Gujarat",
        text: "I was skeptical about mutual funds, but the guidance I received was exceptional. My portfolio has grown significantly in 3 years.",
        rating: 5,
    },
    {
        name: "Anita Desai",
        location: "Rajkot, Gujarat",
        text: "The paperless KYC and SIP process was so smooth. I didn't have to visit any office. Highly recommended for beginners.",
        rating: 5,
    },
    {
        name: "Suresh Patel",
        location: "Ahmedabad, Gujarat",
        text: "Goal-based planning helped me save for my daughter's education systematically. Trustworthy and professional service.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="What Our Investors Say"
                    subtitle="Real stories from people who started their wealth creation journey with us."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow"
                        >
                            <Quote className="absolute top-6 right-6 text-green-100 w-10 h-10" />

                            <div className="flex gap-1 mb-4 text-orange-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill={i < item.rating ? "currentColor" : "none"}
                                        className={i < item.rating ? "text-orange-400" : "text-slate-300"}
                                    />
                                ))}
                            </div>

                            <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-slate-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs text-slate-500">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
