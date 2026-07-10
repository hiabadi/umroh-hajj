import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <a href="/" className="inline-block">
                            <span className="text-2xl font-bold text-white tracking-tight">ZAMIRA</span>
                            <span className="text-sm font-medium text-emerald-500 block">Travel & Umroh</span>
                        </a>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Penyelenggara perjalanan ibadah Umrah dan Haji terpercaya sejak 2010. Kami berkomitmen memberikan pelayanan terbaik demi kekhusyukan ibadah Anda.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg">Layanan Kami</h3>
                        <ul className="space-y-4">
                            <li><a href="/packages?type=umrah" className="hover:text-emerald-500 transition-colors">Paket Umroh Reguler</a></li>
                            <li><a href="/packages?type=umrah" className="hover:text-emerald-500 transition-colors">Paket Umroh Plus</a></li>
                            <li><a href="/packages?type=hajj" className="hover:text-emerald-500 transition-colors">Haji Khusus</a></li>
                            <li><a href="/packages?type=hajj" className="hover:text-emerald-500 transition-colors">Haji Furoda</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg">Informasi</h3>
                        <ul className="space-y-4">
                            <li><a href="/about" className="hover:text-emerald-500 transition-colors">Tentang Kami</a></li>
                            <li><a href="/faq" className="hover:text-emerald-500 transition-colors">Bantuan & FAQ</a></li>
                            <li><a href="/regulation" className="hover:text-emerald-500 transition-colors">Syarat & Ketentuan</a></li>
                            <li><a href="/privacy" className="hover:text-emerald-500 transition-colors">Kebijakan Privasi</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold mb-6 text-lg">Hubungi Kami</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-emerald-500 flex-shrink-0 mt-1" />
                                <span>Jl. Kebon Jeruk No. 123, Jakarta Barat, 11530</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-emerald-500 flex-shrink-0" />
                                <span>+62 21 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-emerald-500 flex-shrink-0" />
                                <span>info@zamiratravel.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 PT. Zamira Berkah Wisata. All rights reserved.</p>
                    <p>Terdaftar di Kemenag RI No. 123/2020</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
