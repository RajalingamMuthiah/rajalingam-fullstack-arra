import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "react-toastify";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { SOCIAL_ICONS, SOCIAL_COLORS } from "../components/common/socialIcons";
import useDocumentTitle from "../hooks/useDocumentTitle";
import {
  profile,
  contactRoles,
  messages,
  whatsappLink,
  socialLinks as socialLinkData,
} from "../data/portfolio";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "/api";

  useDocumentTitle({
    title: "Contact Rajalingam Muthiah — Mentoring, Freelance AI Projects, Hiring",
    description:
      "Get in touch with Rajalingam Muthiah for Pathwise mentoring, freelance AI projects or AI/ML job opportunities. WhatsApp, email or the contact form.",
  });

  // WhatsApp message follows the selected role.
  const whatsappText =
    role === "student" ? messages.mentoring : role === "company" ? messages.project : undefined;

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message me on WhatsApp",
      href: whatsappLink(whatsappText),
      newTab: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  const socialLinks = socialLinkData
    .filter((link) => link.showIn.includes("contact"))
    .map((link) => ({ ...link, icon: SOCIAL_ICONS[link.key], color: SOCIAL_COLORS[link.key] }));

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

  // "I am a…" selector: prefill the subject unless the visitor typed their own.
  const handleRole = (r) => {
    setRole(r.id);
    setFormData((prev) => {
      const prefilled = contactRoles.some((x) => x.subject && x.subject === prev.subject);
      return prev.subject && !prefilled ? prev : { ...prev, subject: r.subject };
    });
    if (r.subject && errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
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
      <div className="min-h-screen pt-page pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            as="h1"
            eyebrow="Contact"
            title="Get In Touch"
            subtitle="Mentoring, a freelance AI project or a job opportunity — tell me who you are and I'll get back to you."
          />

          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card glow>
                <h2 className="text-2xl font-bold mb-6">
                  Send Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* I am a… */}
                  <fieldset>
                    <legend className="block text-sm font-medium mb-2">
                      I am a…
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {contactRoles.map((r) => (
                        <label
                          key={r.id}
                          className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-neon-blue ${
                            role === r.id
                              ? r.id === "student"
                                ? "border-pathwise-600 bg-pathwise-700 text-white"
                                : "border-cyan-600 bg-cyan-700 text-white"
                              : "border-gray-300 hover:border-gray-500 dark:border-white/15 dark:hover:border-white/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name="role"
                            value={r.id}
                            checked={role === r.id}
                            onChange={() => handleRole(r)}
                            className="sr-only"
                          />
                          {r.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

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
                        errors.name ? "border-red-500" : "border-gray-200 dark:border-white/10"
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
                        errors.email ? "border-red-500" : "border-gray-200 dark:border-white/10"
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
                        errors.subject ? "border-red-500" : "border-gray-200 dark:border-white/10"
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
                        errors.message ? "border-red-500" : "border-gray-200 dark:border-white/10"
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
                <h2 className="text-2xl font-bold mb-6">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href, newTab }) => (
                    <div key={label} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="text-gray-900 dark:text-white hover:text-cyan-700 dark:hover:text-neon-blue transition-colors break-all"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card glow>
                <h2 className="text-2xl font-bold mb-6">
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
                <h3 className="text-xl font-bold mb-4">Let’s Collaborate!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  I’m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I’ll try my best to get back to you!
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
