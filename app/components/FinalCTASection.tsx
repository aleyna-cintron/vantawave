"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { Check, Clock, Video } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/jam-templeton-vplh/30min?hide_event_type_details=1&hide_gdpr_banner=1";

export function FinalCTASection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    "Free 30-minute strategy session",
    "No-pressure consultation",
    "Custom website roadmap",
    "Transparent pricing discussion",
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:sticky lg:top-32"
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
                  <Check className="size-6 text-green-400 shrink-0" />
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

          {/* Right Column - Calendly Inline Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "600px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
