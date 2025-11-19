"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background - Placeholder for Video/Image */}
            <div className="absolute inset-0 z-0 bg-olive-950">
                <Image
                    src="/images/hero-background.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
                        Premium Extra Virgin Olive Oil
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight"
                >
                    Liquid Gold from <br />
                    <span className="text-gold-500">North Lebanon</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 font-light"
                >
                    Experience the purity of tradition combined with modern excellence.
                    Willani brings you the finest olive oil derivatives.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <Link
                        href="/products"
                        className="px-8 py-4 bg-gold-500 text-olive-950 font-semibold tracking-wider hover:bg-gold-400 transition-colors rounded-sm"
                    >
                        DISCOVER OUR BRANDS
                    </Link>
                    <Link
                        href="/process"
                        className="px-8 py-4 border border-white/30 text-white font-semibold tracking-wider hover:bg-white/10 transition-colors rounded-sm backdrop-blur-sm"
                    >
                        OUR PROCESS
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
