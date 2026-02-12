"use client";

import { motion } from "motion/react";
import { MessageSquare, Palette, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Strategy Call",
      description:
        "We discuss your business goals, target audience, and what success looks like for your website.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Design & Build",
      description:
        "We create a custom, conversion-focused website tailored to your business and optimized for results.",
      icon: Palette,
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description:
        "Your site goes live with full training, ongoing support, and continuous optimization for performance.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight">
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial call to launch in weeks, not months
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 space-y-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 size-12 bg-gray-900 text-white rounded-xl flex items-center justify-center text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="pt-4">
                  <div className="size-14 bg-gray-100 rounded-xl flex items-center justify-center">
                    <step.icon className="size-7 text-gray-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl tracking-tight">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-0.5 bg-gray-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
