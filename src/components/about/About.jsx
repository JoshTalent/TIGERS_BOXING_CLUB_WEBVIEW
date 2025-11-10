"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Award,
  Users,
  Target,
  Mail,
  Phone,
  Award as TrophyIcon,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { image8, image9, image11, image5, image12 } from "../../assets";

const AboutUs = () => {
  const testimonials = [
    {
      name: "Alice N.",
      role: "National Competitor",
      content:
        "Tiger Boxing Club transformed my life! I lost 15kg, gained confidence, and now I'm competing at national level. The coaches' dedication is incredible.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Jean M.",
      role: "Parent",
      content:
        "Amazing coaches, great community, and top-notch facilities. My son loves the kids' program and has gained so much confidence!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Marie U.",
      role: "Fitness Enthusiast",
      content:
        "As a complete beginner, I was nervous, but the supportive environment and professional coaching made all the difference. Lost 10kg in 3 months!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const platinumPartners = [
    {
      name: "Rwanda Boxing Federation",
      logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=200&auto=format&fit=crop",
      description: "Official National Governing Body",
      type: "GOVERNING_BODY",
    },
    {
      name: "Everlast",
      logo: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200&auto=format&fit=crop",
      description: "Official Equipment Partner",
      type: "EQUIPMENT",
    },
    {
      name: "Rwanda Sports Commission",
      logo: "https://images.unsplash.com/photo-1551135040-5cdd5e1857b6?q=80&w=200&auto=format&fit=crop",
      description: "Sports Development Partner",
      type: "GOVERNMENT",
    },
  ];

  const executiveTeam = [
    {
      name: "John Smith",
      role: "Founder & Head Coach",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      bio: "Former national boxing champion with 15+ years of coaching experience. John founded Tiger Boxing Club in 2010 with a vision to develop Rwanda's next generation of boxing champions.",
      achievements: [
        "National Champion 2005-2008",
        "Certified Level 3 Boxing Coach",
        "15+ Years Coaching Experience",
      ],
      email: "john@tigerboxing.rw",
      phone: "+250 788 123 456",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      bio: "Sports management professional with a passion for community development. Sarah ensures smooth operations and member satisfaction at Tiger Boxing Club.",
      achievements: [
        "MBA in Sports Management",
        "5+ Years Sports Administration",
        "Community Outreach Specialist",
      ],
      email: "sarah@tigerboxing.rw",
      phone: "+250 788 654 321",
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Youth Development",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      bio: "Former professional boxer and certified youth coach. Mike specializes in developing young talent and creating pathway programs for aspiring champions.",
      achievements: [
        "Professional Boxer 2010-2015",
        "Youth Coaching Certified",
        "10+ Junior Champions Trained",
      ],
      email: "mike@tigerboxing.rw",
      phone: "+250 788 789 012",
    },
    {
      name: "Dr. Grace Uwimana",
      role: "Sports Medicine Director",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
      bio: "Certified sports physician with expertise in athlete health and performance optimization. Dr. Grace oversees all medical and recovery programs.",
      achievements: [
        "MD in Sports Medicine",
        "National Team Physician",
        "Injury Prevention Specialist",
      ],
      email: "grace@tigerboxing.rw",
      phone: "+250 788 345 678",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-4"
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-10 bg-purple-500 rounded-full"></div>
                <span className="text-purple-400 font-semibold tracking-wider">
                  SINCE 2010
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Building Champions,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Forging Character
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              variants={{
                hidden: { x: -30, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.8 },
                },
              }}
            >
              At Tiger Boxing Club, we don't just train athletes—we develop
              individuals who excel in the ring and inspire in their
              communities. Through discipline, dedication, and world-class
              coaching, we're shaping Rwanda's next generation of leaders.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.6, duration: 0.8 },
                },
              }}
            >
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Book a Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Images */}
          <div className="flex-1 relative w-full h-[600px]">
            <motion.div
              className="absolute top-0 left-0 w-3/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ x: 100, opacity: 0, rotate: 5 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={image8}
                alt="Main training session"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              className="absolute top-16 right-4 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ x: 50, opacity: 0, rotate: -5 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={image9}
                alt="Coach training"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-1/4 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={image11}
                alt="Boxing equipment"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Enhanced */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-purple-400">Story</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to Rwanda's premier boxing destination
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Founded by Champion, Built for Champions
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  In 2010, former national champion <strong>John Smith</strong>{" "}
                  envisioned a space where Rwandan athletes could access
                  world-class boxing training. What started as a small gym with
                  one heavy bag has grown into a premier training facility that
                  has produced multiple national champions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Our Philosophy
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We believe boxing is more than a sport—it's a vehicle for
                  personal transformation. It's not about fighting others, but
                  about overcoming your own limitations, building mental
                  resilience, and discovering your true potential.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { icon: Award, number: "50+", label: "Champions Trained" },
                  { icon: Users, number: "1000+", label: "Members Served" },
                  { icon: Target, number: "12", label: "Years of Excellence" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {item.number}
                    </div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {[
                image8, // Your imported image 1
                image9, // Your imported image 2
                image5, // Your imported image 3
                image11, // Your imported image 4
              ].map((imageSrc, index) => (
                <motion.img
                  key={index}
                  src={imageSrc}
                  alt={`Historical ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platinum Partners Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-purple-400">Partners</span> &{" "}
              <span className="text-gray-400">Sponsors</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Working together with leading organizations to develop boxing
              excellence in Rwanda
            </p>
          </motion.div>

          {/* Platinum Partners */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
              PLATINUM PARTNERS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platinumPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-purple-900 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-12 h-12 object-contain rounded-full"
                    />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our <span className="text-purple-400">Executive Team</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The passionate professionals dedicated to your boxing journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Team Member Image */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Team Member Details */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrophyIcon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-400 text-xs">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-800 pt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-400 text-xs">
                        {member.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-400 text-xs">
                        {member.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Train With Our Experts?
            </h3>
            <p className="text-gray-400 mb-6">
              Our executive team is here to guide you every step of the way
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success <span className="text-purple-400">Stories</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our members who transformed their lives through boxing
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Video Testimonial Section */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="aspect-video bg-black relative">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop"
                  alt="Video testimonial thumbnail"
                  className="w-full h-full object-cover opacity-60"
                />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-700 transition-all duration-300 transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold">
                    Marie's Transformation Journey
                  </h4>
                  <p className="text-gray-300">
                    From beginner to national competitor in 18 months
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
