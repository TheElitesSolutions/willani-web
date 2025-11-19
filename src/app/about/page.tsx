"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <div className="pt-24 pb-16">
            {/* Header */}
            <section className="container mx-auto px-4 mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-gold-500 mb-6"
                >
                    Our Story
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-olive-200 max-w-3xl mx-auto"
                >
                    A journey of passion, tradition, and excellence in the heart of North Lebanon.
                </motion.p>
            </section>

            {/* Content Grid */}
            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/images/olive-grove.jpg"
                            alt="Olive Grove"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-gold-400 mb-6">The Willani Heritage</h2>
                        <p className="text-olive-100 leading-relaxed mb-6">
                            Willani s.a.r.l was founded with a singular vision: to elevate the standard of olive oil production in North Lebanon.
                            Nestled in a region renowned for its fertile soil and ancient olive groves, we combine generations of agricultural
                            wisdom with state-of-the-art technology.
                        </p>
                        <p className="text-olive-100 leading-relaxed">
                            Our commitment goes beyond just pressing olives. We strive to improve the entire sector in our region,
                            working closely with local farmers to ensure sustainable practices and the highest quality harvest.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-24 md:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square rounded-lg overflow-hidden md:order-2"
                    >
                        <Image
                            src="/images/olivazerta-pouring.jpg"
                            alt="Modern Press"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:order-1"
                    >
                        <h2 className="text-3xl font-serif font-bold text-gold-400 mb-6">Modern Excellence</h2>
                        <p className="text-olive-100 leading-relaxed mb-6">
                            Quality is not an accident; it is the result of intelligent effort. At Willani, we utilize modern olive presses
                            that allow us to extract oil at optimal temperatures, preserving the delicate flavors and nutritional value
                            of the fruit.
                        </p>
                        <p className="text-olive-100 leading-relaxed">
                            Our storage facilities are strictly controlled to maintain the perfect environment for our oil, protecting it
                            from light, heat, and oxygen until it reaches your table.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
