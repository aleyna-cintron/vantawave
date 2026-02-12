"use client";

import { motion } from "motion/react";
import { Check, TrendingUp } from "lucide-react";

export function BeforeAfterSection() {
  const improvements = [
    "Improved mobile UX",
    "Clear call-to-actions",
    "Faster load time",
    "Simplified navigation",
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight">
            From Outdated to High-Converting
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformation that drives real results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-4 mb-6">
                <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm">
                  Before
                </span>
                <h3 className="text-2xl tracking-tight">Cluttered & Confusing</h3>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 rounded-xl relative overflow-hidden">
                {/* Simulated messy old website */}
                <div className="absolute inset-0 p-6 space-y-3">
                  <div className="bg-gray-400/60 h-8 w-2/3 rounded" />
                  <div className="bg-gray-400/40 h-4 w-1/2 rounded" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-gray-400/60 h-20 rounded" />
                    <div className="bg-gray-400/60 h-20 rounded" />
                    <div className="bg-gray-400/60 h-20 rounded" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="bg-gray-400/40 h-3 w-full rounded" />
                    <div className="bg-gray-400/40 h-3 w-5/6 rounded" />
                    <div className="bg-gray-400/40 h-3 w-4/6 rounded" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gray-500/10" />
              </div>
              <div className="mt-6 space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="text-red-500">&#10005;</span>
                  No clear value proposition
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-500">&#10005;</span>
                  Hidden contact information
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-500">&#10005;</span>
                  Poor mobile experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="space-y-4 mb-6">
                <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm">
                  After
                </span>
                <h3 className="text-2xl tracking-tight">Clean & Converting</h3>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-xl relative overflow-hidden border border-gray-200">
                {/* Simulated clean modern website */}
                <div className="absolute inset-0 p-6 space-y-4">
                  <div className="bg-gray-800 h-10 w-3/4 rounded-lg shadow-sm" />
                  <div className="bg-gray-200 h-5 w-2/3 rounded" />
                  <div className="bg-gray-900 h-10 w-40 rounded-lg mt-4 shadow-md" />
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="bg-white h-20 rounded-lg shadow border border-gray-200" />
                    <div className="bg-white h-20 rounded-lg shadow border border-gray-200" />
                    <div className="bg-white h-20 rounded-lg shadow border border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {improvements.map((improvement, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Check className="size-5 text-green-600 flex-shrink-0" />
                    <span>{improvement}</span>
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Result callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <TrendingUp className="size-12 text-green-600" />
            <div>
              <p className="text-sm text-gray-600 mb-1">Measured Impact</p>
              <p className="text-2xl lg:text-3xl tracking-tight">
                <span className="text-green-600">41% increase</span> in
                inquiries within 60 days
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
