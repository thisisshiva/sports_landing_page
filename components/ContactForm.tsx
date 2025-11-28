"use client";

import { useState } from "react";
import { Send, Phone, Mail } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Thank you for your query! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="py-20 bg-gradient-to-br from-[#545454] to-[#3a3a3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl mb-4">Have a Query? Get In Touch</h2>
              <p className="text-xl text-gray-300">
                Book an event, join a tournament, partner with LCL or collaborate on a project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#a7fa25] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#545454]" />
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Call Us</p>
                  <p className="text-lg">+91 9527575294</p>
                  <p className="text-lg">+91 9319781655</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#a7fa25] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#545454]" />
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Email Us</p>
                  <p className="text-lg">info@jksportsmedia.in</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#a7fa25]/20">
              <p className="text-sm text-gray-300">
                We typically respond within 24 hours. For urgent queries, please call us directly.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#a7fa25] focus:border-transparent outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#a7fa25] focus:border-transparent outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#a7fa25] focus:border-transparent outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm text-gray-700 mb-2">
                  Select Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#a7fa25] focus:border-transparent outline-none"
                >
                  <option value="">Choose a category</option>
                  <option value="tournament">Tournament</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="lcl">LCL</option>
                  <option value="media">Media</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#a7fa25] focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your requirements"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#a7fa25] text-[#545454] py-4 rounded-lg hover:bg-[#95e020] transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
