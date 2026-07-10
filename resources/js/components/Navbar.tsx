import React, { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Paket Umroh', href: '/packages?type=umrah' },
        { name: 'Paket Haji', href: '/packages?type=hajj' },
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Kontak', href: '/contact' },
    ];

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-emerald-800 tracking-tight">ZAMIRA</span>
                            <span className="text-sm font-medium text-emerald-600 hidden sm:block">Travel & Umroh</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-emerald-700 font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
                            <a href="/login" className="text-gray-700 hover:text-emerald-700 transition-colors">
                                <User size={20} />
                            </a>
                            <a 
                                href="/packages" 
                                className="bg-emerald-700 text-white px-5 py-2.5 rounded-full font-medium hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg active:scale-95"
                            >
                                Pesan Sekarang
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-emerald-700 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <a
                                    href="/login"
                                    className="flex items-center justify-center gap-2 px-3 py-3 text-base font-medium text-gray-700 border border-gray-200 rounded-lg"
                                >
                                    <User size={18} />
                                    Masuk Ke Akun
                                </a>
                                <a
                                    href="/packages"
                                    className="flex items-center justify-center bg-emerald-700 text-white px-3 py-3 rounded-lg font-medium shadow-sm"
                                >
                                    Pesan Sekarang
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
