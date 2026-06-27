import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const contactInfo = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'prajapatishanu111@gmail.com', href: 'mailto:prajapatishanu111@gmail.com' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+91 8630680768', href: 'tel:+918630680768' },
  { icon: <FiMapPin size={18} />, label: 'Location', value: 'Ghaziabad, UP India' },
];

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/ShanuPrajapati12005', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/shanu-prajapati-313b44322/', label: 'LinkedIn' },
  { icon: <FaXTwitter size={18} />, href: 'https://x.com/SPrajapati99535', label: 'X' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:prajapatishanu111@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: 'transparent' }}>
      <div className="bg-glow-2" style={{ top: '20%', right: '-10%' }} />
      <div className="bg-glow-1" style={{ bottom: '-10%', left: '20%' }} />

      <div className="section-wrapper">
        {/* Massive Elevated Card for Entire Section */}
        <div className="section-card p-5 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading gradient-heading font-black"
          >
            Get In Touch
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center space-y-4 h-full"
            >
              {/* Availability Status Badge */}
              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit mb-1"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-wider select-none">
                  Available for Opportunities
                </span>
              </div>

              <p className="leading-relaxed mb-4 text-[14.5px]" style={{ color: 'var(--text-secondary)' }}>
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities and ideas.
              </p>

              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href || '#'}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{
                    x: 6,
                    scale: 1.015,
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.08)',
                    transition: { type: 'spring', stiffness: 400, damping: 25 }
                  }}
                  className="p-4 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 block rounded-2xl"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    background: 'var(--bg-card-solid)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: 'var(--gradient-accent)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                    <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Developer Terminal Mockup to fill space */}
              <div 
                className="rounded-2xl p-4 font-mono text-[11px] select-none mt-2"
                style={{
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-secondary)',
                }}
              >
                <div className="flex items-center gap-1.5 mb-2.5 pb-1.5 border-b border-[var(--border-subtle)]">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  <span className="text-[9px] text-slate-500 ml-1">developer_status.sh</span>
                </div>
                <div className="space-y-1 text-slate-400">
                  <p><span className="text-purple-400">$</span> npm run build</p>
                  <p className="text-emerald-400">✓ Production build successful</p>
                  <p className="text-blue-400">ℹ Status: Available for roles & freelance</p>
                  <p><span className="text-purple-400">$</span> contact --now</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            {/* Right - Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(59, 130, 246, 0.25)',
                boxShadow: 'var(--shadow-card-hover)',
                transition: { type: 'spring', stiffness: 400, damping: 25 }
              }}
              className="p-6 md:p-8 space-y-5 rounded-2xl"
              style={{
                background: 'var(--bg-card)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-card)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
                <div className="border-b border-[var(--border-subtle)] pb-4 mb-2">
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Send a Message
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Got a question or proposal? Drop a message below and I'll get back to you soon.
                  </p>
                </div>
                {[
                  { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none"
                      style={{
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-card)',
                        color: 'var(--text-primary)',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(59,130,246,0.5)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-card)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none resize-none"
                    style={{
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-card)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(59,130,246,0.5)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-card)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center"
                >
                  <FiSend size={16} />
                  Send Message
                </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
