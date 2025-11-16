"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Target, 
  Users, 
  Clock, 
  Dumbbell, 
  Award,
  PlayCircle,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Medal,
  GraduationCap,
  Activity
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { image10  ,hero} from "../../assets";

const BoxingFundamentals = () => {
  const features = [
    { icon: Shield, text: "Self-Defense Skills", desc: "Learn practical self-defense techniques" },
    { icon: Target, text: "Precision Technique", desc: "Master proper form and accuracy" },
    { icon: Users, text: "Supportive Community", desc: "Train with like-minded beginners" },
    { icon: Clock, text: "Time-Efficient Workouts", desc: "45-60 minute focused sessions" },
    { icon: Dumbbell, text: "Full-Body Conditioning", desc: "Complete physical transformation" },
    { icon: Award, text: "Certified Coaches", desc: "Learn from experienced professionals" }
  ];

  const curriculumSections = [
    {
      title: "Foundation & Form",
      icon: GraduationCap,
      items: ["Proper Boxing Stance", "Defensive Guard Positions", "Basic Footwork & Movement", "Balance & Coordination"],
      duration: "Weeks 1-2",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Core Techniques",
      icon: Target,
      items: ["Jab & Cross Mastery", "Hook & Uppercut Fundamentals", "Punch Combinations", "Timing & Rhythm"],
      duration: "Weeks 3-4",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Defense & Strategy",
      icon: Shield,
      items: ["Blocking & Parrying", "Head Movement & Evasion", "Distance Management", "Counter-Attacking"],
      duration: "Weeks 5-6",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Conditioning",
      icon: Activity,
      items: ["Boxing Endurance", "Core Strength Development", "Speed & Agility", "Recovery Techniques"],
      duration: "Weeks 7-8",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Beginners Trained", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "0", label: "Experience Needed", icon: Star },
    { number: "8", label: "Week Program", icon: Clock }
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section with Full Black Background */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-black to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">Perfect for Absolute Beginners</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  <span className="block text-white">Boxing</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Fundamentals
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-2xl leading-relaxed">
                  Master the Art of Boxing from <span className="text-purple-400">Zero to Confident</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Build a rock-solid foundation in boxing technique, conditioning, and mental discipline. 
                Perfect for absolute beginners seeking confidence, fitness, and practical self-defense skills 
                in a supportive, non-intimidating environment.
              </p>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    className="flex items-start gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm mb-1">{feature.text}</h3>
                      <p className="text-gray-400 text-xs">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white text-center overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    Start Free Trial
                    <PlayCircle className="w-5 h-5" />
                  </span>
                </motion.a>
                
                <motion.a
                  href="#curriculum"
                  className="group px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-300 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Curriculum
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-8 pt-8 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-2 border-gray-900 shadow-lg"></div>
                    ))}
                  </div>
                  <span className="text-white">Join 500+ Members</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>No Experience Required</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Medal className="w-4 h-4 text-yellow-400" />
                    <span>Certified Coaches</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Enhanced Image Gallery */}
            <motion.div
              className="relative h-[600px] lg:h-[700px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
            >
              {/* Main Image */}
              <motion.div
                className="absolute top-0 right-0 w-4/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src= {image10}
                  alt="Boxing Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Beginner-Friendly Environment</h3>
                  <p className="text-gray-300 text-sm">Supportive coaches, patient instruction</p>
                </div>
              </motion.div>

              {/* Secondary Image */}
              <motion.div
                className="absolute bottom-20 left-0 w-2/3 h-2/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src= {hero}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                className="absolute bottom-0 right-10 w-64 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-bold text-lg">95% Success Rate</span>
                  </div>
                  <p className="text-gray-300 text-sm">for complete beginners starting their boxing journey</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-11/12"></div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span>Based on 500+ student results</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Curriculum Section */}
      <section id="curriculum" className="py-20 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Structured <span className="text-purple-400">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              8-week progressive curriculum designed to take you from complete beginner to confident boxer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {curriculumSections.map((section, index) => (
              <motion.div
                key={section.title}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                }}
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                    {section.duration}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                  {section.title}
                </h3>
                <ul className="space-y-3 relative z-10">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-6 right-6 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${section.color} transition-all duration-1000`}
                    style={{ width: `${(index + 1) * 25}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to <span className="text-purple-400">Transform</span> Your Life?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of beginners who started with zero experience and discovered 
              confidence, fitness, and community through boxing fundamentals.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              whileHover="hover"
            >
              <motion.a
                href="/booking"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white text-center min-w-[200px] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  Start Your Free Trial
                  <PlayCircle className="w-5 h-5" />
                </span>
              </motion.a>
              
              <motion.a
                href="/contact"
                className="group px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-300 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ask Questions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Guarantee Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-4 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">30-Day Satisfaction Guarantee</div>
                <div className="text-gray-400 text-sm">Love it or your money back</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BoxingFundamentals;