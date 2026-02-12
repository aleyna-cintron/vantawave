"use client";

import { motion } from "motion/react";
import { Calendar, Check, Clock, Video } from "lucide-react";

export function FinalCTASection() {
  const benefits = [
    "Free 30-minute strategy session",
    "No-pressure consultation",
    "Custom website roadmap",
    "Transparent pricing discussion",
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl tracking-tight">
                Ready for a Website That Actually Works?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Let&apos;s build something that drives real results for your
                business. Book your free strategy call today.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="size-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="size-5" />
                <span>30 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Video className="size-5" />
                <span>Video call</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mock Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            {/* Mock Calendly Interface */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <Calendar className="size-6 text-gray-900" />
                <div>
                  <h3 className="text-xl text-gray-900">
                    Book Your Free Strategy Call
                  </h3>
                  <p className="text-sm text-gray-600">Select a time that works for you</p>
                </div>
              </div>

              {/* Mock calendar grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <button className="text-gray-400 hover:text-gray-600">
                    &larr;
                  </button>
                  <span className="text-gray-900">February 2026</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                    <div key={i} className="text-xs text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {[...Array(35)].map((_, i) => {
                    const day = i - 2;
                    if (day < 1 || day > 28) {
                      return <div key={i} className="py-2" />;
                    }
                    return (
                      <button
                        key={i}
                        className={`py-2 text-sm rounded-lg transition-colors ${
                          day === 15
                            ? "bg-gray-900 text-white"
                            : day > 11 && day < 20
                            ? "hover:bg-gray-100 text-gray-900"
                            : "text-gray-300"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mock time slots */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">
                  Available times for Feb 15
                </p>
                {["9:00 AM", "10:30 AM", "2:00 PM", "4:00 PM"].map(
                  (time, index) => (
                    <button
                      key={index}
                      className="w-full py-3 px-4 text-gray-900 border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
                    >
                      {time}
                    </button>
                  )
                )}
              </div>

              <button className="w-full bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors mt-4">
                Confirm Booking
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
