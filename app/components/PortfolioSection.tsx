"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PortfolioSection() {
  const projects = [
    {
      title: "Templeton Family Organics",
      description:
        "Redesigned outdated website to generate qualified leads for premium home renovation services.",
      image:
        "https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDg2MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Long Autumn",
      description:
        "Built conversion-focused website that showcases services and drives consultation bookings.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBwb3J0Zm9saW98ZW58MXx8fHwxNzcwODYwNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Opulent Tools",
      description:
        "Created professional online presence that establishes credibility and captures client inquiries.",
      image:
        "https://images.unsplash.com/photo-1691073121676-1ab3a6d3d743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGFwdG9wfGVufDF8fHx8MTc3MDg0OTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results for real businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="space-y-6">
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Case Study
                      <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-1">
                  <h3 className="text-2xl tracking-tight group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
