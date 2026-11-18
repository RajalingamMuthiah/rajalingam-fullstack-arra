import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Eye,
  FileScan,
  Gauge,
  Layers,
  Mail,
  MessageCircle,
  MessagesSquare,
  Workflow,
} from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { freelance } from "../data/portfolio";

// NOTE: freelance work must not conflict with the TransformHub employment
// terms — see the comment above `freelance` in data/portfolio.js.

const ICONS = {
  chat: MessagesSquare,
  file: FileScan,
  eye: Eye,
  gauge: Gauge,
  workflow: Workflow,
  layers: Layers,
};

const PANEL =
  "rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

const ContactButtons = ({ center = false, label = "Discuss your project" }) => (
  <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 ${center ? "sm:justify-center" : ""}`}>
    <Button
      href={freelance.whatsapp}
      variant="primary"
      icon={MessageCircle}
      aria-label={`${label} on WhatsApp (opens in a new tab)`}
    >
      {label}
    </Button>
    <Button href={freelance.email} variant="ghost" icon={Mail}>
      Email me
    </Button>
  </div>
);

const Services = () => {
  useDocumentTitle({
    title: "Freelance AI Development — RAG, Document AI, Computer Vision | Rajalingam Muthiah",
    description:
      "Freelance AI solutions for companies and founders: RAG chatbots, document AI and OCR, computer vision POCs, LLM evaluation, agent workflows and full-stack AI MVPs. Fixed-scope POCs or part-time help.",
  });

  return (
    <PageTransition>
      <div className="pt-page pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section aria-labelledby="services-page-heading" className="pb-12 max-w-3xl">
            <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-neon-blue">
              Freelance AI development
            </p>
            <h1
              id="services-page-heading"
              className="text-4xl sm:text-5xl font-bold font-display leading-tight mb-5"
            >
              {freelance.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[65ch] mb-8">
              {freelance.lead}
            </p>
            <ContactButtons />
          </section>

          {/* Services */}
          <section aria-labelledby="offer-heading" className="py-10">
            <SectionTitle id="offer-heading" eyebrow="What I build" title="Services" subtitle="Each one backed by work I've already shipped or built." />
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {freelance.services.map(({ icon, title, outcome, proof }) => {
                const Icon = ICONS[icon];
                return (
                  <motion.li key={title} {...fadeIn} className={`${PANEL} flex flex-col gap-3`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-purple-600 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold leading-snug">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{outcome}</p>
                    <div className="mt-auto pt-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                        Proof
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {proof.map(({ label, projectId }) => (
                          <li key={label}>
                            {projectId ? (
                              <Link
                                to={`/projects#${projectId}`}
                                className="inline-block rounded-full border border-cyan-700/30 px-3 py-1 text-xs font-medium text-cyan-800 hover:border-cyan-700 dark:border-neon-blue/30 dark:text-neon-blue dark:hover:border-neon-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon-blue"
                              >
                                {label}
                              </Link>
                            ) : (
                              <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 dark:border-white/15 dark:text-gray-300">
                                {label}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </section>

          {/* How we work */}
          <section aria-labelledby="process-heading" className="py-10">
            <SectionTitle id="process-heading" eyebrow="How we work" title="From call to handover" />
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {freelance.process.map(({ title, text }, i) => (
                <motion.li key={title} {...fadeIn} className={`${PANEL} space-y-2`}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-600 text-cyan-700 dark:text-neon-blue font-bold">
                    {i + 1}
                  </span>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
                </motion.li>
              ))}
            </ol>
          </section>

          {/* Engagement */}
          <section aria-labelledby="engage-heading" className="py-10">
            <SectionTitle id="engage-heading" eyebrow="Engagement" title="Two ways to work together" subtitle="Pricing depends on scope. Tell me about your project and I'll send a quote." />
            <ul className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              {freelance.engagements.map(({ title, text }) => (
                <motion.li key={title} {...fadeIn} className={`${PANEL} flex flex-col gap-3`}>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{text}</p>
                  <Button
                    href={freelance.whatsapp}
                    variant="ghost"
                    size="sm"
                    className="self-start mt-2"
                    aria-label={`Get a quote for a ${title.toLowerCase()} engagement on WhatsApp (opens in a new tab)`}
                  >
                    Get a quote
                  </Button>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Final CTA */}
          <section
            aria-labelledby="services-cta-heading"
            className="mt-6 rounded-2xl border border-cyan-600/30 bg-cyan-50 px-6 py-10 text-center dark:bg-neon-blue/[0.05] dark:border-neon-blue/25"
          >
            <h2 id="services-cta-heading" className="text-2xl sm:text-3xl font-bold font-display mb-3">
              Have an AI project in mind?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Start with a short call about the problem, your data and what success looks like.
            </p>
            <ContactButtons center />
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
