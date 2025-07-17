import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data to your backend or service
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      </div>
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-1 mb-4 pt-10">Get In Touch</h2>
          <p className="paragraph text-lg max-w-2xl mx-auto">
            Have a technical question, a sales inquiry, or just want to chat?
            We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-cyan-500/20 rounded-2xl p-8 shadow-lg flex flex-col gap-6"
          >
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Work Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Company Name{" "}
                <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-input resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 mt-2 h-12"
            >
              Send Message
            </button>
            {submitted && (
              <div className="text-green-400 text-sm mt-2">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
          {/* Contact Details */}
          <div className="flex flex-col gap-8 justify-center">
            <FeatureCard
              icon={MapPin}
              iconBg="bg-gray-800"
              title="Our Office"
              description="123 Tech Avenue, Innovation City, Connectiville 45678"
              titleClass="text-lg font-bold text-cyan-400 mb-1"
              paddingClass="pt-5 px-6"
            />
            <FeatureCard
              icon={Mail}
              iconBg="bg-gray-800"
              title="Email Us"
              description="hello@apipro.com"
              titleClass="text-lg font-bold text-cyan-400 mb-1"
              paddingClass="pt-5 px-6"
            />
            <FeatureCard
              icon={Phone}
              iconBg="bg-gray-800"
              title="Call Us"
              description="+1 (555) 123-4567"
              titleClass="text-lg font-bold text-cyan-400 mb-1"
              paddingClass="pt-5 px-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
