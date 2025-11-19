"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="pt-24 pb-16">
            <section className="container mx-auto px-4 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-gold-500 mb-6"
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-olive-200 max-w-3xl mx-auto"
                >
                    We'd love to hear from you. Contact us for orders, inquiries, or to visit our facility.
                </motion.p>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-olive-900 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-gold-400 font-bold mb-1">Visit Us</h4>
                                        <p className="text-olive-100">North Lebanon</p>
                                        <p className="text-olive-200 text-sm mt-1">Main Road, Olive District</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-olive-900 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-gold-400 font-bold mb-1">Email Us</h4>
                                        <a href="mailto:info@willani.com" className="text-olive-100 hover:text-white transition-colors">
                                            info@willani.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-olive-900 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-gold-400 font-bold mb-1">Call Us</h4>
                                        <p className="text-olive-100">+961 3 123 456</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-olive-900 border border-olive-800 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-olive-500">
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5" /> Map Integration
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-olive-900/30 backdrop-blur-sm border border-olive-800 p-8 rounded-lg"
                    >
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gold-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-olive-950/50 border border-olive-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gold-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-olive-950/50 border border-olive-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gold-400">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-olive-950/50 border border-olive-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gold-400">Message</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full bg-olive-950/50 border border-olive-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gold-500 text-olive-950 font-bold py-4 rounded-sm hover:bg-gold-400 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                SEND MESSAGE
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
