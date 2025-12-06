import { useState, useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import { IndianRupee, Calculator as CalcIcon } from "lucide-react";

export default function SipCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [years, setYears] = useState(10);
    const [returnRate, setReturnRate] = useState(12);

    const calculateSIP = useMemo(() => {
        const i = returnRate / 100 / 12;
        const n = years * 12;
        // SIP Formula: P * [ (1+i)^n - 1 ] * (1+i) / i
        const fv = (monthlyInvestment * (Math.pow(1 + i, n) - 1) * (1 + i)) / i;
        const totalInvested = monthlyInvestment * n;

        return {
            invested: Math.round(totalInvested),
            value: Math.round(fv),
            wealthGained: Math.round(fv - totalInvested),
        };
    }, [monthlyInvestment, years, returnRate]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <section id="calculator" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="SIP Calculator"
                    subtitle="Estimate how much wealth you can create with disciplined monthly investments."
                />

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-slate-100 flex flex-col lg:flex-row">

                    {/* Controls Side */}
                    <div className="lg:w-1/2 p-8 lg:p-12 space-y-8 border-r border-slate-100">
                        {/* Monthly Investment */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="font-semibold text-slate-700">Monthly Investment</label>
                                <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg">
                                    ₹ {monthlyInvestment.toLocaleString()}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="500"
                                max="100000"
                                step="500"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                        </div>

                        {/* Duration */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="font-semibold text-slate-700">Time Period</label>
                                <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg">
                                    {years} Years
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="1"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                        </div>

                        {/* Rate of Return */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="font-semibold text-slate-700">Expected Return (p.a)</label>
                                <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg">
                                    {returnRate} %
                                </span>
                            </div>
                            <input
                                type="range"
                                min="8"
                                max="30"
                                step="0.5"
                                value={returnRate}
                                onChange={(e) => setReturnRate(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                        </div>

                        <p className="text-xs text-slate-400 mt-4 italic">
                            *The calculations are based on assumed rate of return and are for illustration purposes only.
                            They do not guarantee future returns.
                        </p>
                    </div>

                    {/* Result Side */}
                    <div className="lg:w-1/2 bg-slate-900 p-8 lg:p-12 text-white flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-green-400 font-bold mb-6 tracking-wide uppercase text-sm">
                            <CalcIcon size={18} />
                            Projected Growth
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="text-slate-400 text-sm mb-1">Total Amount Invested</div>
                                <div className="text-2xl font-semibold opacity-90">{formatCurrency(calculateSIP.invested)}</div>
                            </div>

                            <div>
                                <div className="text-slate-400 text-sm mb-1">Estimated Wealth Gained</div>
                                <div className="text-2xl font-semibold text-green-400"> + {formatCurrency(calculateSIP.wealthGained)}</div>
                            </div>

                            <div className="pt-6 border-t border-slate-700">
                                <div className="text-slate-400 text-sm mb-1">Future Value</div>
                                <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                    {formatCurrency(calculateSIP.value)}
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/40 w-full text-center">
                            Start Investing Now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
