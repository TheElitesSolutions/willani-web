"use client";

import { motion } from "framer-motion";
import { Droplets, Sprout, Thermometer, Truck } from "lucide-react";

const steps = [
    {
        icon: Sprout,
        title: "Harvesting",
        description: "Our process begins in the ancient olive groves of North Lebanon. We carefully harvest the olives at the perfect moment of ripeness to ensure the highest concentration of polyphenols and flavor.",
    },
    {
        icon: Truck,
        title: "Transport",
        description: "Time is of the essence. Harvested olives are transported immediately to our facility to prevent oxidation and fermentation, ensuring the freshest possible starting material.",
    },
    {
        icon: Thermometer,
        title: "Cold Pressing",
        description: "We use state-of-the-art cold press technology. By keeping the temperature strictly controlled below 27°C, we preserve the delicate aromas, vitamins, and antioxidants that define premium extra virgin olive oil.",
    },
    {
        icon: Droplets,
        title: "Storage & Bottling",
        description: "The extracted oil is stored in stainless steel tanks under inert gas to prevent oxidation. It is then bottled in dark glass or tin containers to protect it from light until it reaches your kitchen.",
    },
];

export default function Process() {
    return (
        <div className="pt-24 pb-16">
            <section className="container mx-auto px-4 mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-gold-500 mb-6"
                >
                    The Extraction Process
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-olive-200 max-w-3xl mx-auto"
                >
                    From the tree to the bottle, every step is monitored for perfection.
                </motion.p>
            </section>

            <section className="container mx-auto px-4">
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-olive-800 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 will-change-transform ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Icon Circle */}
                                <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-olive-900 border-4 border-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/20">
                                    <step.icon className="w-10 h-10 text-gold-500" />
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 text-center md:text-left ${index % 2 === 1 ? "md:text-right" : ""}`}>
                                    <div className="bg-olive-900/30 backdrop-blur-sm border border-olive-800 p-8 rounded-lg hover:border-gold-500/50 transition-colors">
                                        <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">{step.title}</h3>
                                        <p className="text-olive-100 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
