import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Why SIP", href: "#why-sip" },
        { name: "How It Works", href: "#how-it-works" },
         { name: "Our Services", href: "#our-Services" },
        { name: "Benefits", href: "#benefits" },
        { name: "Calculator", href: "#calculator" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-md py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                    <img
                        src="/new_logo.png"
                        alt="Wealthara Capital Logo"
                        className="h-25  w-auto object-contain"
                    />


                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-700 hover:text-green-600 font-medium transition-colors text-sm uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+917016223029"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-green-500/30"
                    >
                        <Phone size={18} />
                        <span>Talk to Expert</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-slate-800 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col items-center py-6 gap-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-800 text-lg font-medium hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+918128488441"
                        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-md"
                        onClick={() => setIsOpen(false)}
                    >
                        <Phone size={20} />
                        <span>+91 81284 88441</span>
                    </a>
                </div>
            )}
        </nav>
    );
}
