import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ArrowRight, ShieldCheck, MapPin, Calendar } from 'lucide-react';

const LandingPage = () => {
    const featuredPackages = [
        {
            id: '1',
            name: 'Umroh Reguler Bintang 5',
            type: 'Umrah',
            price: '28.500.000',
            duration: '9 Hari',
            departure: '12 Sep 2024',
            rating: 4.9,
            reviews: 124,
            image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('luxurious mecca hotel with view of kaaba, professional photography, high resolution')}&image_size=landscape_4_3`
        },
        {
            id: '2',
            name: 'Umroh Plus Turki 12 Hari',
            type: 'Umrah Plus',
            price: '35.000.000',
            duration: '12 Hari',
            departure: '25 Okt 2024',
            rating: 4.8,
            reviews: 86,
            image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('beautiful blue mosque istanbul turkey, sunset, cinematic lighting, professional photography')}&image_size=landscape_4_3`
        },
        {
            id: '3',
            name: 'Haji Furoda Premium 2025',
            type: 'Haji',
            price: '250.000.000',
            duration: '25 Hari',
            departure: 'Juni 2025',
            rating: 5.0,
            reviews: 42,
            image: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('hajj pilgrims in mecca, grand mosque, spiritual atmosphere, high resolution')}&image_size=landscape_4_3`
        }
    ];

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('majestic kaaba in mecca at dawn, golden hour, spiritual, cinematic, 8k')}&image_size=landscape_16_9`}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                    >
                        <span className="inline-block px-4 py-1.5 bg-emerald-600/30 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-400 font-medium text-sm mb-6">
                            Penyelenggara Umrah & Haji Terpercaya
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Wujudkan Niat Suci <br />
                            <span className="text-emerald-400">Ke Baitullah</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                            Nikmati perjalanan ibadah yang aman, nyaman, dan penuh keberkahan bersama Zamira Travel. Bimbingan ibadah sesuai sunnah dengan fasilitas terbaik.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="/packages" 
                                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-lg transition-all shadow-xl hover:shadow-emerald-600/20 flex items-center justify-center gap-2"
                            >
                                Lihat Paket <ArrowRight size={20} />
                            </a>
                            <a 
                                href="/contact" 
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold text-lg transition-all flex items-center justify-center"
                            >
                                Konsultasi Gratis
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: ShieldCheck, title: 'Terpercaya & Resmi', desc: 'Terdaftar resmi di Kemenag RI dengan izin PPIU dan PIHK.' },
                            { icon: MapPin, title: 'Akomodasi Terbaik', desc: 'Hotel dekat dengan Masjidil Haram dan Masjid Nabawi.' },
                            { icon: Star, title: 'Pembimbing Berpengalaman', desc: 'Dibimbing oleh Ustadz berpengalaman sesuai Al-Qur\'an dan Sunnah.' }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-hover duration-300 hover:shadow-xl group">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Packages */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Pilihan Terbaik</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2">Paket Perjalanan Terpopuler</h2>
                        </div>
                        <a href="/packages" className="text-emerald-700 font-semibold flex items-center gap-2 hover:underline">
                            Lihat Semua Paket <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPackages.map((pkg) => (
                            <motion.div 
                                key={pkg.id}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-emerald-700 uppercase">
                                            {pkg.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className={i < Math.floor(pkg.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                                        ))}
                                        <span className="text-xs text-gray-500 font-medium ml-2">({pkg.reviews} ulasan)</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 line-clamp-1">{pkg.name}</h3>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Calendar size={16} className="text-emerald-600" />
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <MapPin size={16} className="text-emerald-600" />
                                            <span>{pkg.departure}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                        <div>
                                            <span className="text-xs text-gray-500 block mb-1">Mulai Dari</span>
                                            <span className="text-2xl font-bold text-emerald-800">Rp {pkg.price}</span>
                                        </div>
                                        <a 
                                            href={`/packages/${pkg.id}`}
                                            className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all"
                                        >
                                            <ArrowRight size={20} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                <img 
                                    src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('happy indonesian pilgrims in mecca, smiling, diverse group, professional photography')}&image_size=portrait_4_3`}
                                    alt="Trust"
                                    className="w-full"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
                        </div>
                        
                        <div>
                            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Mengapa Memilih Kami</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8 leading-tight">Melayani Sepenuh Hati <br />Untuk Ibadah Yang Berarti</h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Kami memahami bahwa perjalanan ibadah Umrah dan Haji adalah perjalanan spiritual sekali seumur hidup bagi banyak orang. Oleh karena itu, kami tidak pernah berkompromi dalam hal kualitas layanan.
                            </p>
                            
                            <ul className="space-y-6">
                                {[
                                    'Pembimbing Ibadah sesuai Manhaj Salaf',
                                    'Pasti Berangkat dengan Izin Resmi Kemenag',
                                    'Harga Transparan Tanpa Biaya Tersembunyi',
                                    'Fasilitas Hotel & Transportasi Berkelas'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12">
                                <a href="/about" className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-emerald-800 transition-all inline-block shadow-lg">
                                    Pelajari Selengkapnya
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default LandingPage;
