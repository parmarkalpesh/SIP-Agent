import React from 'react';
import { TrendingUp, Target, Shield, FileText, Scroll, GraduationCap } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            title: 'Investments',
            icon: TrendingUp,
            subtitle: 'Mutual Funds',
            image: 'investment.png',
        },
        {
            id: 2,
            title: 'Goal based Solutions',
            icon: Target,
            items: [
                "Children's Education",
                "Dream Home",
                "Financially Secure Retirement",
                "& Many More"
            ],
            image: 'goal.png',
        },
        {
            id: 3,
            title: 'Insurance',
            icon: Shield,
            items: [
                'Term Insurance',
                'Health Insurance'
            ],
            image: 'insurance.png',
        },
        {
            id: 4,
            title: 'Income Tax Planning',
            icon: FileText,
            subtitle: 'NPS Contribution',
            image: 'income_tax.png',
        },
        {
            id: 5,
            title: 'Estate Planning',
            icon: Scroll,
            subtitle: 'Will Drafting',
            image: 'E-stateplaning.png',
        },
        {
            id: 6,
            title: 'Learning Academy',
            icon: GraduationCap,
            items: [
                'Blogs/Podcasts',
                'Annual Event',
                'IAPs'
            ],
            image: 'lerning.png',
        }
    ];

    return (
        <section id='our-Services'>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-center mb-12">
                        Our Services
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-green-400"
                                >
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 min-h-[280px] flex flex-col border-b-2 border-gray-200">
                                        <div className="flex items-start justify-between mb-6">
                                            <h2 className="text-2xl md:text-3xl font-bold text-green-700 flex-1 leading-tight">
                                                {service.title}
                                            </h2>
                                            <div className="bg-white border-2 border-green-200 rounded-2xl p-3 shadow-sm ml-4 flex-shrink-0">
                                                <IconComponent className="w-8 h-8 text-green-600" strokeWidth={2} />
                                            </div>
                                        </div>

                                        {service.subtitle && (
                                            <p className="text-xl font-semibold text-gray-900 mt-auto">
                                                {service.subtitle}
                                            </p>
                                        )}

                                        {service.items && (
                                            <div className="space-y-1 mt-auto">
                                                {service.items.map((item, idx) => (
                                                    <p key={idx} className="text-lg font-semibold text-gray-900">
                                                        {item}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-4 bg-gray-100">
                                        <div className="h-60 overflow-hidden rounded-2xl">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}