"use client";

import Hero from "@/components/home/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "HIRAM",
    description: "The essence of tradition. Robust and full-bodied extra virgin olive oil.",
    image: "/images/hiram-bottle.jpg",
    link: "/products#hiram",
  },
  {
    name: "OLIVAZERTA",
    description: "Pure elegance. A delicate balance of flavor for the refined palate.",
    image: "/images/olivazerta-pouring.jpg",
    link: "/products#olivazerta",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Intro Section */}
      <section className="py-24 bg-olive-50 dark:bg-olive-950/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-900 dark:text-olive-100 mb-6">
              Rooted in North Lebanon
            </h2>
            <p className="text-lg text-olive-700 dark:text-olive-300 leading-relaxed">
              Willani s.a.r.l is dedicated to producing the finest Extra Virgin Olive Oil.
              With our modern olive presses and strict quality control, we ensure that every drop
              of <strong>Hiram</strong> and <strong>OlivaZerta</strong> embodies the rich heritage
              and fertile soil of our region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-foreground"
          >
            Our Signature Brands
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] md:aspect-[3/4]"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-serif font-bold text-gold-500 mb-2">{brand.name}</h3>
                  <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {brand.description}
                  </p>
                  <Link
                    href={brand.link}
                    className="inline-block px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-olive-950 transition-colors uppercase tracking-wider text-sm"
                  >
                    View Product
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-olive-900">
          <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-fixed opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              From Grove to Bottle
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Discover the meticulous process behind our premium oils.
            </p>
            <Link
              href="/process"
              className="px-10 py-4 bg-gold-500 text-olive-950 font-bold text-lg rounded-sm hover:bg-gold-400 transition-colors"
            >
              SEE THE PROCESS
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
