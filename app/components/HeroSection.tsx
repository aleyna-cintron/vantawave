"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl tracking-tight">
                Your Website Should Generate Leads — Not Just Exist.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We design high-converting websites for small businesses that turn
                visitors into booked calls and paying customers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Book a Free Strategy Call
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="group bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="size-5" />
                View Our Work
              </button>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main laptop mockup */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDg2MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Website mockup on laptop"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating mobile mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 w-32 lg:w-40 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1691073121676-1ab3a6d3d743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGFwdG9wfGVufDF8fHx8MTc3MDg0OTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mobile website mockup"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
