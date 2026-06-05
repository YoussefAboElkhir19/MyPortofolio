import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const contactCards = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: FaPhone },
  { label: 'Location', value: profile.location, href: '/contact', icon: FaMapMarkerAlt },
  { label: 'LinkedIn', value: 'LinkedIn.com/in/YoussefAboElkhir', href: profile.linkedIn, icon: FaLinkedin },
  { label: 'GitHub', value: 'GitHub.com/Youssefaboelkhir19', href: profile.github, icon: FaGithub },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  const { ref, isInView } = useReveal();

  const handleInputChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm('service_ienfclb', 'template_lhrdqiv', formRef.current, '8oYtkA12k1yTPweg6');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      window.setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="relative bg-slate-50 py-20 dark:bg-slate-900/60 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build the next"
          accent="useful thing"
          description="Send a project brief, freelance request, or hiring opportunity. I’ll respond with clear next steps."
        />

        <div ref={ref} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {contactCards.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10 dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-white/10 dark:text-cyan-200">
                  <item.icon />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold uppercase text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="break-words font-semibold text-slate-800 dark:text-slate-100">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/5 dark:border-white/10 dark:bg-white/[0.06] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={7}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                placeholder="Tell me about your project, timeline, and goals."
              />
            </label>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </motion.button>

            {submitStatus && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${submitStatus === 'success'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200'
                    : 'bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-200'
                  }`}
              >
                {submitStatus === 'success'
                  ? 'Message sent successfully. I will get back to you soon.'
                  : 'The form could not send right now. Please email me directly.'}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
