'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Let's <span className="cosmic-gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="cosmic-glass rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <motion.label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? 'top-2 text-xs text-yellow-400'
                          : 'top-4 text-base text-white/60'
                      }`}
                      animate={{
                        y: focusedField === 'name' || formData.name ? -8 : 0,
                        scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                      }}
                    >
                      Your Name
                    </motion.label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`h-14 bg-transparent border-2 transition-all duration-300 text-white ${
                        focusedField === 'name' ? 'border-yellow-500 cosmic-glow' : 'border-white/20'
                      }`}
                      required
                    />
                  </div>

                  <div className="relative">
                    <motion.label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? 'top-2 text-xs text-yellow-400'
                          : 'top-4 text-base text-white/60'
                      }`}
                      animate={{
                        y: focusedField === 'email' || formData.email ? -8 : 0,
                        scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                      }}
                    >
                      Email Address
                    </motion.label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`h-14 bg-transparent border-2 transition-all duration-300 text-white ${
                        focusedField === 'email' ? 'border-yellow-500 cosmic-glow' : 'border-white/20'
                      }`}
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'subject' || formData.subject
                        ? 'top-2 text-xs text-yellow-400'
                        : 'top-4 text-base text-white/60'
                    }`}
                    animate={{
                      y: focusedField === 'subject' || formData.subject ? -8 : 0,
                      scale: focusedField === 'subject' || formData.subject ? 0.85 : 1,
                    }}
                  >
                    Subject
                  </motion.label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`h-14 bg-transparent border-2 transition-all duration-300 text-white ${
                      focusedField === 'subject' ? 'border-yellow-500 cosmic-glow' : 'border-white/20'
                    }`}
                    required
                  />
                </div>

                <div className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? 'top-2 text-xs text-yellow-400'
                        : 'top-4 text-base text-white/60'
                    }`}
                    animate={{
                      y: focusedField === 'message' || formData.message ? -8 : 0,
                      scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                    }}
                  >
                    Your Message
                  </motion.label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`min-h-32 bg-transparent border-2 transition-all duration-300 text-white ${
                      focusedField === 'message' ? 'border-yellow-500 cosmic-glow' : 'border-white/20'
                    }`}
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 cosmic-glow interactive"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Check size={20} className="mr-2" />
                        Message Sent!
                      </motion.div>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in touch</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and design.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 cosmic-glass rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 group interactive"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="p-3 bg-yellow-500/20 rounded-full group-hover:bg-yellow-500/30 transition-colors">
                      <info.icon size={20} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{info.label}</p>
                      <p className="text-white/60">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-4 cosmic-glass rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 group interactive"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} className="text-yellow-400 group-hover:text-orange-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 border border-yellow-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h4 className="text-xl font-bold mb-4 text-white">Ready to start a project?</h4>
              <p className="text-white/60 mb-6">
                Let's discuss your ideas and turn them into reality. I'm excited to hear from you!
              </p>
              <Button variant="outline" className="interactive border-yellow-500/50 text-white hover:bg-yellow-500/10">
                Schedule a Call
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}