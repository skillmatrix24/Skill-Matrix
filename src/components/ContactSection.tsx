import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/ecosystemData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Ecosystem Partnership & Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className={`py-28 border-t transition-colors duration-300 ${
      darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with Skill Matrix</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Connect With Skill Matrix
          </h2>
          <p className={`text-lg sm:text-xl font-normal leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Have a question about our products, ecosystem, partnerships, or future ventures? Get in touch with Skill Matrix.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`p-8 rounded-3xl border shadow-xl ${
              darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Corporate Headquarters
              </h3>
              <p className={`text-sm leading-relaxed mb-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                Skill Matrix operates globally as a technology group. Contact our headquarters team for official correspondence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Email Inquiries</span>
                    <a href={`mailto:${OFFICIAL_CONTACT.email}`} className={`text-sm font-semibold transition-colors ${darkMode ? 'text-neutral-100 hover:text-cyan-400' : 'text-neutral-900 hover:text-cyan-600'}`}>
                      {OFFICIAL_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Telephone</span>
                    <a href={`tel:${OFFICIAL_CONTACT.phone}`} className={`text-sm font-semibold transition-colors ${darkMode ? 'text-neutral-100 hover:text-cyan-400' : 'text-neutral-900 hover:text-cyan-600'}`}>
                      {OFFICIAL_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Location</span>
                    <span className={`text-sm font-semibold block ${darkMode ? 'text-neutral-100' : 'text-neutral-900'}`}>
                      {OFFICIAL_CONTACT.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl ${
              darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
            }`}>
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    Message Received Successfully
                  </h3>
                  <p className={`text-sm max-w-md mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Thank you for reaching out to Skill Matrix. Our corporate relations team will review your message and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', subject: 'Ecosystem Partnership & Inquiry', message: '' });
                    }}
                    className={`mt-4 px-6 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                      darkMode ? 'bg-white text-neutral-900 hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'
                    }`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          darkMode 
                            ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500' 
                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          darkMode 
                            ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500' 
                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          darkMode 
                            ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500' 
                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          darkMode 
                            ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500' 
                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      Inquiry Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        darkMode 
                          ? 'bg-neutral-900 border-neutral-800 text-white' 
                          : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                      }`}
                    >
                      <option value="Ecosystem Partnership & Inquiry">Ecosystem Partnership & Inquiry</option>
                      <option value="Biztrix Business Platform">Biztrix Business Platform</option>
                      <option value="RojgarMatrix Career Marketplace">RojgarMatrix Career Marketplace</option>
                      <option value="LinkQR Digital Growth">LinkQR Digital Growth</option>
                      <option value="AppMatrix App Generation">AppMatrix App Generation</option>
                      <option value="ChatMatrix WhatsApp Automation">ChatMatrix WhatsApp Automation</option>
                      <option value="Jyotrix Astrology Platform">Jyotrix Astrology Platform</option>
                      <option value="Other Corporate Inquiry">Other Corporate Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details regarding your inquiry..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        darkMode 
                          ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500' 
                          : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Get in Touch</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
