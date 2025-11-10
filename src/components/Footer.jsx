import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Dumbbell,
  Trophy,
  Users,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "PROGRAMS",
      links: [
        { name: "Boxing Fundamentals", to: "/programs/fundamentals" },
        { name: "Advanced Competition", to: "/programs/advanced" },
        { name: "Boxing for Fitness", to: "/programs/fitness" },
        { name: "Kids & Teens Boxing", to: "/programs/kids-teens" },
        { name: "Private Training", to: "/programs/private" },
      ]
    },
    {
      title: "CLUB INFO",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Our Coaches", to: "/coaches" },
        { name: "Schedule & Pricing", to: "/schedule" },
        { name: "Gallery", to: "/gallery" },
        { name: "Blog & News", to: "/blog" },
      ]
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Contact Us", to: "/contact" },
        { name: "FAQs", to: "/faqs" },
        { name: "Membership", to: "/membership" },
        { name: "Privacy Policy", to: "/privacy" },
        { name: "Terms of Service", to: "/terms" },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "123 Boxing Street, Sports District",
      subtext: "Kigali, Rwanda"
    },
    {
      icon: Phone,
      text: "+250 788 123 456",
      subtext: "Mon-Fri 6AM-10PM"
    },
    {
      icon: Mail,
      text: "info@tigerboxing.com",
      subtext: "We reply within 24h"
    },
    {
      icon: Clock,
      text: "6:00 AM - 10:00 PM",
      subtext: "7 Days a Week"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white border-t border-purple-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  TIGER BOXING
                </span>
                <span className="text-xs text-purple-400 font-semibold tracking-wider">
                  CHAMPIONSHIP CLUB
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Rwanda's premier boxing club training champions since 2010. 
              Join our family and unleash your inner fighter with professional 
              coaching and state-of-the-art facilities.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-xs text-gray-400">National Champs</div>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400">500+</div>
                <div className="text-xs text-gray-400">Active Members</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-purple-500/20 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold text-purple-400 mb-6 flex items-center gap-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-800"
        >
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <contact.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">{contact.text}</p>
                <p className="text-gray-400 text-sm mt-1">{contact.subtext}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl border border-purple-500/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                🥊 Stay in the Ring!
              </h3>
              <p className="text-gray-400">
                Get exclusive training tips, event updates, and special offers delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <span>© {currentYear} Tiger Boxing Club. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-purple-400" />
                Built with passion for the sport
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-6 h-6 bg-purple-500 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 left-8 w-4 h-4 bg-pink-500 rounded-full opacity-20"
      />
    </footer>
  );
};

export default Footer;