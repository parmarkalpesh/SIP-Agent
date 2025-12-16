import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-10"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 text-slate-900">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/80 border border-green-200 text-green-800 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Start Investing Early & Set Your Goals
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Invest Smart with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-green-600">
                NJ E-Wealth SIP
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Start small, invest regularly, and build long-term wealth with a
              trusted SIP Agent. Secure your future with the power of
              compounding.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full">
              <a
                href="#contact"
                className="btn btn-primary w-full sm:w-auto justify-center"
                aria-label="Start your SIP journey"
              >
                Start Your SIP Journey
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/8128488441"
                className="btn btn-ghost w-full sm:w-auto justify-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Talk to expert on WhatsApp"
              >
                Talk to Expert
              </a>
            </div>

            <div className="flex gap-6 pt-4 text-xs md:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="text-green-600" size={18} />
                SEBI-Registered
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="text-green-600" size={18} />
                Goal-Based Planning
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="text-green-600" size={18} />
                Paperless KYC
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 relative animate-fade-in-right delay-200">
            <div className="relative z-10 glass-card p-6 md:p-8 rounded-2xl border border-white/50">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-slate-500 text-sm mb-1">
                    Total Portfolio Value
                  </div>
                  <div className="text-3xl font-bold text-slate-900">
                    ₹ 25,48,900
                  </div>
                  <div className="text-green-600 text-sm font-medium flex items-center gap-1 mt-1">
                    <TrendingUp size={14} /> +12.5% Annual Returns
                  </div>
                </div>
                <div className="bg-green-100 p-2 rounded-lg text-green-700">
                  <TrendingUp size={24} />
                </div>
              </div>

              {/* Mock Chart Bars */}
              <div className="flex items-end justify-between gap-2 h-40 mb-6">
                {[40, 65, 55, 80, 70, 95, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-slate-100 rounded-t-lg relative group"
                  >
                    <div
                      className="absolute bottom-0 w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg transition-all duration-1000 ease-out group-hover:from-green-600 group-hover:to-green-500"
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="text-xs text-slate-500 mb-1">Monthly SIP</div>
                  <div className="font-semibold text-slate-800">₹ 10,000</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="text-xs text-slate-500 mb-1">Duration</div>
                  <div className="font-semibold text-slate-800">15 Years</div>
                </div>
              </div>
            </div>

            {/* Decor Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-slate-200/50 rounded-2xl rotate-6 transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
