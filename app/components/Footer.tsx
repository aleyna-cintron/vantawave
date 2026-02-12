"use client";

import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              DevStudio
            </h3>
            <p className="text-gray-600 max-w-md">
              Building high-converting websites for ambitious small businesses.
              Let&apos;s turn your website into your best salesperson.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <button
              onClick={() => scrollToSection("work")}
              className="block text-gray-600 hover:text-gray-900 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block text-gray-600 hover:text-gray-900 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block text-gray-600 hover:text-gray-900 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 mb-4">Get in Touch</h4>
            <a
              href="mailto:hello@devstudio.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="size-4" />
              hello@devstudio.com
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="size-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="#"
                className="size-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="size-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
              >
                <Github className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; 2026 DevStudio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
