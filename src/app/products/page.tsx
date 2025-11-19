"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
    {
        id: "hiram",
        name: "HIRAM",
        tagline: "The King of Oils",
        description: "Named after the legendary Phoenician King Hiram, this extra virgin olive oil represents strength, tradition, and royalty. It is robust, full-bodied, and perfect for those who appreciate the authentic taste of Lebanese olives.",
        image: "/images/hiram-bottle.jpg",
        sizes: ["250ml", "500ml", "750ml"],
        color: "text-gold-500",
        borderColor: "border-gold-500",
    },
    {
        id: "olivazerta",
        name: "OLIVAZERTA",
        tagline: "Nature's Finest Gift",
        description: "OlivaZerta captures the delicate essence of the olive. With a smoother, more fruity profile, it is an exquisite addition to salads, finishing dishes, and gourmet cuisine.",
        image: "/images/olivazerta-pouring.jpg",
        sizes: ["250ml", "500ml", "750ml"],
        color: "text-olive-400",
        borderColor: "border-olive-400",
    },
];

export default function Products() {
    return (
        <div className="pt-24 pb-16">
            <section className="container mx-auto px-4 mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-gold-500 mb-6"
                >
                    Our Brands
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-olive-200 max-w-3xl mx-auto"
                >
                    Two distinct expressions of the same premium quality.
                </motion.p>
            </section>

            <div className="container mx-auto px-4 space-y-32">
                {products.map((product, index) => (
                    <section key={product.id} id={product.id} className="scroll-mt-32">
                        <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ${index % 2 === 1 ? "md:order-2" : ""}`}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={index % 2 === 1 ? "md:order-1" : ""}
                            >
                                <h2 className={`text-5xl font-serif font-bold mb-2 ${product.color}`}>{product.name}</h2>
                                <h3 className="text-xl text-white/80 italic mb-8">{product.tagline}</h3>
                                <p className="text-olive-100 text-lg leading-relaxed mb-8">
                                    {product.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-gold-400 font-serif text-lg mb-4">Available Sizes</h4>
                                    <div className="flex gap-4">
                                        {product.sizes.map((size) => (
                                            <span
                                                key={size}
                                                className={`px-4 py-2 border ${product.borderColor} ${product.color} rounded-full text-sm font-semibold`}
                                            >
                                                {size}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
