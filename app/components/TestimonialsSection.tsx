"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Summit Renovations",
      image:
        "https://images.unsplash.com/photo-1706824250412-42b8ba877abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzA3OTk5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Working with DevStudio completely transformed our online presence. Within the first month, we saw a noticeable increase in inquiries. The process was smooth, fast, and professional. Our new website actually brings in customers now.",
      rating: 5,
    },
    {
      name: "James Chen",
      company: "Precision Legal Group",
      image:
        "https://images.unsplash.com/photo-1715423058726-ddea1ec51b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNzkxMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "I was skeptical about investing in a new website, but the results speak for themselves. We're now ranking higher, getting more traffic, and most importantly, booking more consultations. Best business investment we've made this year.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      company: "Elevate Marketing Co.",
      image:
        "https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG93bmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODYwNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "The attention to detail and focus on conversion was exactly what we needed. Our bounce rate dropped significantly and our contact form submissions doubled. It's refreshing to work with a team who truly understands business goals.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real business owners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="size-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
