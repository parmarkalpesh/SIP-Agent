export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800/50 p-6 rounded-2xl mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                            Start Your SIP Today
                        </h3>
                        <p className="text-sm text-slate-400">
                            Small steps lead to big wealth.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/8128488441"
                        className="mt-4 md:mt-0 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                    >
                        Chat on WhatsApp
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-sm">
                    <div className="flex items-center justify-center text-center">
                        <p className="leading-relaxed text-slate-400 max-w-sm">
                            Your trusted partner for mutual fund investments. We help you plan,
                            invest, and grow your wealth with disciplined SIPs.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="hover:text-green-500 transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#why-sip" className="hover:text-green-500 transition">
                                    Why SIP?
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#calculator"
                                    className="hover:text-green-500 transition"
                                >
                                    SIP Calculator
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-green-500 transition">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            NJ E-Wealth is a platform for mutual fund distribution. Investments
                            in mutual funds are subject to market risks, read all scheme-related
                            documents carefully. Past performance is not an indicator of future
                            returns.
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>
                        &copy; {new Date().getFullYear()} NJ E-Wealth SIP Agent. All rights
                        reserved.
                    </p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
