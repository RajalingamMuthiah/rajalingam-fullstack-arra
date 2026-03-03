import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import { toast } from "react-toastify";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "/api";

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajalingammuthiah2011@gmail.com",
      href: "mailto:rajalingammuthiah2011@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, MH",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9920580660",
      href: "tel:+919920580660",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/RajalingamMuthiah",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rajalingam-muthiah/",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/hilarious_king__/",
      color: "hover:text-pink-400",
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    try {
      console.log("[Contact] Sending contact form to backend API");

      const response = await fetch(`${apiBaseUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Failed to send message");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("[Contact] Send message failed:", error);
      toast.error(
        error?.message ||
          "Failed to send message. Please try again or email me directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Get In Touch"
            subtitle="Have a project in mind? Let's work together!"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card glow>
                <h2 className="text-2xl font-bold mb-6 gradient-text">
                  Send Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl glass border ${
                        errors.name ? "border-red-500" : "border-white/10"
                      } focus:border-neon-blue focus:outline-none transition-colors`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl glass border ${
                        errors.email ? "border-red-500" : "border-white/10"
                      } focus:border-neon-blue focus:outline-none transition-colors`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl glass border ${
                        errors.subject ? "border-red-500" : "border-white/10"
                      } focus:border-neon-blue focus:outline-none transition-colors`}
                      placeholder="Project Discussion"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-xl glass border ${
                        errors.message ? "border-red-500" : "border-white/10"
                      } focus:border-neon-blue focus:outline-none transition-colors resize-none`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    icon={Send}
                    loading={loading}
                    className="w-full"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <Card glow>
                <h2 className="text-2xl font-bold mb-6 gradient-text">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-white hover:text-neon-blue transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-white">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card glow>
                <h2 className="text-2xl font-bold mb-6 gradient-text">
                  Follow Me
                </h2>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 rounded-xl glass flex items-center justify-center transition-all duration-300 ${color}`}
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Additional Info */}
              <Card glow>
                <h3 className="text-xl font-bold mb-4">Let's Collaborate!</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I'll try my best to get back to you!
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  🚀 Available for freelance work
                  <br />
                  💼 Open to collaboration
                  <br />
                  📧 Usually respond within 24 hours
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
