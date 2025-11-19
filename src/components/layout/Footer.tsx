import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-olive-950 text-olive-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-gold-500">WILLANI</h3>
                        <p className="text-olive-200 text-sm leading-relaxed">
                            Producing premium Extra Virgin Olive Oil in North Lebanon with modern techniques and traditional care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold-400 font-serif text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-olive-200 hover:text-gold-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-olive-200 hover:text-gold-400 transition-colors text-sm">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-olive-200 hover:text-gold-400 transition-colors text-sm">
                                    Brands
                                </Link>
                            </li>
                            <li>
                                <Link href="/process" className="text-olive-200 hover:text-gold-400 transition-colors text-sm">
                                    Process
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-olive-200 hover:text-gold-400 transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gold-400 font-serif text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-olive-200">
                                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                                <span>North Lebanon</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-olive-200">
                                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                                <a href="mailto:info@willani.com" className="hover:text-gold-400">
                                    info@willani.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-olive-200">
                                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                                <span>+961 3 123 456</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-gold-400 font-serif text-lg mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-olive-900 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-olive-950 transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-olive-900 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-olive-950 transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-olive-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-olive-400">
                    <p>&copy; {new Date().getFullYear()} Willani s.a.r.l. All rights reserved.</p>
                    <p>Designed by The Elites Solutions</p>
                </div>
            </div>
        </footer>
    );
}
