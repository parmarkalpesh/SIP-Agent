import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        city: "",
        goal: "Wealth Creation",
        investment: "5000-10000",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const text = `*New SIP Consultation Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Mobile:* ${formData.mobile}\n` +
            `*Email:* ${formData.email || 'N/A'}\n` +
            `*City:* ${formData.city || 'N/A'}\n` +
            `*Goal:* ${formData.goal}\n` +
            `*Investment:* ${formData.investment}\n` +
            `*Message:* ${formData.message || 'N/A'}`;

        const encodedText = encodeURIComponent(text);
        const waLink = `https://wa.me/8128488441?text=${encodedText}`;

        window.open(waLink, "_blank");
    };

    return (
        <section id="contact" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <SectionTitle
                    className="!text-white"
                    title={<span className="text-white">Get Your Free Consultation</span>}
                    subtitle={<span className="text-slate-400">Ready to start your journey? Fill out the form below or contact us directly.</span>}
                />

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">

                    {/* Contact Details Card */}
                    <div className="lg:w-1/3 flex flex-col">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-green-500 h-full relative overflow-hidden group">
                            {/* Decorative glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-2xl group-hover:bg-green-200 transition-all duration-500 opacity-50"></div>

                            <h3 className="text-2xl font-bold mb-8 text-slate-800 relative z-10 border-b border-slate-100 pb-4">
                                Contact <span className="text-green-600">Information</span>
                            </h3>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-5">
                                    <div className="p-3.5 bg-green-50 rounded-xl text-green-600 border border-green-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call / WhatsApp</div>
                                        <a href="tel:+918128488441" className="text-xl font-bold hover:text-green-600 transition tracking-wide text-slate-900">+91 81284 88441</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-3.5 bg-green-50 rounded-xl text-green-600 border border-green-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Us</div>
                                        <a href="mailto:contact@nje-wealth.com" className="text-lg font-medium hover:text-green-600 transition text-slate-700 break-all">contact@nje-wealth.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-3.5 bg-green-50 rounded-xl text-green-600 border border-green-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Serving Location</div>
                                        <p className="font-medium text-lg text-slate-900">Gujarat, India</p>
                                        <p className="text-sm text-slate-500 mt-1">Digital Services Pan-India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-10">
                                <div className="p-4 bg-slate-50 rounded-lg text-sm text-center text-slate-600 border border-slate-100">
                                    "Your wealth creation journey is just one click away."
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3">
                        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-slate-800 h-full border-t-4 border-green-500">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition hover:bg-slate-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                                    <input
                                        required
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition hover:bg-slate-100"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition hover:bg-slate-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Your City"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition hover:bg-slate-100"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Investment Goal</label>
                                    <div className="relative">
                                        <select
                                            name="goal"
                                            value={formData.goal}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition appearance-none cursor-pointer hover:bg-slate-100"
                                        >
                                            <option>Wealth Creation</option>
                                            <option>Retirement Planning</option>
                                            <option>Child Education</option>
                                            <option>Tax Saving (ELSS)</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Investment</label>
                                    <div className="relative">
                                        <select
                                            name="investment"
                                            value={formData.investment}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition appearance-none cursor-pointer hover:bg-slate-100"
                                        >
                                            <option value="<5000">Less than ₹ 5,000</option>
                                            <option value="5000-10000">₹ 5,000 - ₹ 10,000</option>
                                            <option value="10000-25000">₹ 10,000 - ₹ 25,000</option>
                                            <option value="25000+">More than ₹ 25,000</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Any specific query?"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition resize-none hover:bg-slate-100"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 transform active:scale-95 duration-200">
                                <Send size={20} />
                                Send Request via WhatsApp
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
