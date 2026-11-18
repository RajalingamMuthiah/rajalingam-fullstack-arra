import { useId, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Compass,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
  UserRound,
} from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import Flyer from "../components/mentorship/Flyer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { mentorship, profile } from "../data/portfolio";

const SERVICE_ICONS = { compass: Compass, code: Code2, graduation: GraduationCap };

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

const PANEL =
  "rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]";

/** WhatsApp + email buttons used in the hero and the final band. */
const BookingButtons = ({ center = false }) => (
  <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 ${center ? "sm:justify-center" : ""}`}>
    <Button
      href={mentorship.bookCall.href}
      variant="pathwise"
      icon={MessageCircle}
      aria-label={`${mentorship.bookCall.label} on WhatsApp (opens in a new tab)`}
    >
      {mentorship.bookCall.label}
    </Button>
    <Button href={mentorship.email.href} variant="ghost" icon={Mail}>
      {mentorship.email.label}
    </Button>
  </div>
);

/** Accessible accordion: each question is a button controlling its answer region. */
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <li className="border-b border-gray-200 dark:border-white/10">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pathwise-500 rounded"
        >
          {q}
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-pathwise-700 dark:text-pathwise-400 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`${id}-a`}
        role="region"
        aria-labelledby={`${id}-q`}
        hidden={!open}
        className="pb-4 text-gray-600 dark:text-gray-300 max-w-[70ch]"
      >
        {a}
      </div>
    </li>
  );
};

/** Hidden until real testimonials are added to portfolio.js. */
const Testimonials = () => {
  if (!mentorship.testimonials.length) return null;
  return (
    <section aria-labelledby="testimonials-heading" className="py-10">
      <SectionTitle id="testimonials-heading" eyebrow="Testimonials" tone="pathwise" title="What mentees say" />
      <ul className="grid gap-4 md:grid-cols-2">
        {mentorship.testimonials.map(({ quote, name, role }) => (
          <li key={name} className={PANEL}>
            <Quote className="h-6 w-6 text-pathwise-700 dark:text-pathwise-400 mb-3" aria-hidden="true" />
            <blockquote className="text-gray-700 dark:text-gray-200">{quote}</blockquote>
            <p className="mt-4 font-semibold">
              {name}
              {role && <span className="font-normal text-gray-500 dark:text-gray-400"> · {role}</span>}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Mentorship = () => {
  useDocumentTitle({
    title: "Pathwise Mentoring — AI/ML Career Guidance | Rajalingam Muthiah",
    description:
      "Pathwise career mentoring for students and early-career engineers: a personalised AI/IT roadmap, portfolio projects and interview prep. Book a free 20-minute discovery call. Mumbai, online and offline.",
  });

  return (
    <PageTransition>
      <div className="pt-page pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section
            aria-labelledby="pathwise-heading"
            className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 items-center pb-12"
          >
            <div className="space-y-6">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pathwise-700 dark:text-pathwise-400">
                Pathwise mentoring
              </p>
              <h1
                id="pathwise-heading"
                className="text-4xl sm:text-5xl font-bold font-display leading-tight"
              >
                {mentorship.page.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[60ch]">
                {mentorship.page.lead}
              </p>
              <BookingButtons />
              <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {mentorship.location}
              </p>
            </div>
            <Flyer eager className="max-w-sm mx-auto lg:max-w-none" />
          </section>

          {/* Who it's for */}
          <section aria-labelledby="who-heading" className="py-10">
            <SectionTitle id="who-heading" eyebrow="Who it's for" tone="pathwise" title="Is Pathwise for you?" />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mentorship.audience.map((who) => (
                <motion.li key={who} {...fadeIn} className={`${PANEL} flex items-start gap-3`}>
                  <UserRound className="h-5 w-5 mt-0.5 flex-shrink-0 text-pathwise-700 dark:text-pathwise-400" aria-hidden="true" />
                  <span className="font-medium">{who}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Services */}
          <section aria-labelledby="services-heading" className="py-10">
            <SectionTitle id="services-heading" eyebrow="What you get" tone="pathwise" title="Three kinds of guidance" />
            <ul className="grid gap-4 md:grid-cols-3">
              {mentorship.services.map(({ icon, title, description }) => {
                const Icon = SERVICE_ICONS[icon] ?? Compass;
                return (
                  <motion.li key={title} {...fadeIn} className={`${PANEL} space-y-3`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pathwise-700 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{description}</p>
                  </motion.li>
                );
              })}
            </ul>
          </section>

          {/* How it works */}
          <section aria-labelledby="how-heading" className="py-10">
            <SectionTitle id="how-heading" eyebrow="How it works" tone="pathwise" title="Four steps" />
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mentorship.steps.map(({ title, text }, i) => (
                <motion.li key={title} {...fadeIn} className={`${PANEL} space-y-2`}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-pathwise-600 text-pathwise-700 dark:text-pathwise-400 font-bold">
                    {i + 1}
                  </span>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
                </motion.li>
              ))}
            </ol>
          </section>

          {/* Meet your mentor */}
          <section aria-labelledby="mentor-heading" className="py-10">
            <SectionTitle id="mentor-heading" eyebrow="Meet your mentor" tone="pathwise" title={profile.name} />
            <div className={`${PANEL} grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] items-center`}>
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                width="192"
                height="192"
                loading="lazy"
                className="mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-pathwise-600/40"
              />
              <div className="space-y-5">
                <ul className="space-y-2">
                  {mentorship.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-pathwise-700 dark:text-pathwise-400" aria-hidden="true" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <Button to="/projects" variant="ghost" icon={ArrowRight}>
                  See my projects
                </Button>
              </div>
            </div>
          </section>

          <Testimonials />

          {/* FAQ */}
          <section aria-labelledby="faq-heading" className="py-10">
            <SectionTitle id="faq-heading" eyebrow="FAQ" tone="pathwise" title="Common questions" />
            <ul className="max-w-3xl mx-auto border-t border-gray-200 dark:border-white/10">
              {mentorship.faq.map((item) => (
                <FaqItem key={item.q} {...item} />
              ))}
            </ul>
          </section>

          {/* Final CTA band */}
          <section
            aria-labelledby="cta-heading"
            className="mt-6 rounded-2xl border border-pathwise-600/40 bg-pathwise-50 px-6 py-10 text-center dark:bg-pathwise-400/[0.06] dark:border-pathwise-400/30"
          >
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold font-display mb-3">
              Ready to find your direction?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The first 20-minute call is free. Bring your resume and your goals.
            </p>
            <BookingButtons center />
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Mentorship;
