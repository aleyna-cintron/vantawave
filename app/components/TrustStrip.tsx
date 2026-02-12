"use client";

import { motion } from "motion/react";
import { TrendingUp, Clock } from "lucide-react";

export function TrustStrip() {
  const stats = [
    {
      icon: TrendingUp,
      text: "+32% lead increase",
    },
    {
      icon: Clock,
      text: "Avg. 2-week turnaround",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-center text-sm tracking-wide text-gray-500 uppercase">
            Trusted by growing businesses
          </p>

          {/* Logo placeholders */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-40">
            <div className="w-24 h-8 bg-gray-300 rounded" />
            <div className="w-28 h-8 bg-gray-300 rounded" />
            <div className="w-20 h-8 bg-gray-300 rounded" />
            <div className="w-26 h-8 bg-gray-300 rounded" />
            <div className="w-24 h-8 bg-gray-300 rounded" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center gap-3"
              >
                <stat.icon className="size-5 text-gray-700" />
                <span className="text-gray-700">{stat.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
