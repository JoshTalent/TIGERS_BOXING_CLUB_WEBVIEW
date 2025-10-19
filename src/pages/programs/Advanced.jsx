"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Shield, 
  Zap, 
  Brain, 
  Award, 
  Clock, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AdvancedCompetition = () => {
  const programFeatures = [
    {
      icon: Target,
      title: "Advanced Technique Mastery",
      description: "Perfect complex combinations, defensive maneuvers, and counter-attacking strategies"
    },
    {
      icon: Shield,
      title: "Elite Sparring Sessions",
      description: "Regular high-intensity sparring with national-level competitors"
    },
    {
      icon: Zap,
      title: "Peak Conditioning",
      description: "Sport-specific strength, speed, and endurance training programs"
    },
    {
      icon: Brain,
      title: "Fight IQ Development",
      description: "Tactical analysis, opponent study, and strategic fight planning"
    },
    {
      icon: Award,
      title: "Competition Pathway",
      description: "Structured progression from local to national and international competitions"
    },
    {
      icon: Users,
      title: "Champion Mentorship",
      description: "Direct coaching from experienced competitors and champions"
    }
  ];

  const curriculumModules = [
    {
      phase: "Phase 1",
      title: "Technical Excellence",
      duration: "4 Weeks",
      focus: "Advanced footwork, combination punching, defensive systems",
      skills: ["Angle Creation", "Counter Punching", "Distance Management"]
    },
    {
      phase: "Phase 2",
      title: "Tactical Development",
      duration: "6 Weeks",
      focus: "Ring generalship, fight strategy, opponent analysis",
      skills: ["Fight Planning", "Adaptation", "Pressure Fighting"]
    },
    {
      phase: "Phase 3",
      title: "Competition Preparation",
      duration: "8 Weeks",
      focus: "Peak performance, weight management, mental readiness",
      skills: ["Peak Conditioning", "Mental Toughness", "Recovery Protocols"]
    }
  ];

  const requirements = [
    "Minimum 2 years boxing experience",
    "Completion of Fundamentals Program or equivalent",
    "Medical clearance for competitive sparring",
    "Commitment to 4+ training sessions weekly",
    "Coach approval after assessment session"
  ];

  const successMetrics = [
    { number: "15+", label: "National Champions" },
    { number: "50+", label: "Competition Wins" },
    { number: "100%", label: "Safety Record" },
    { number: "2", label: "International Medals" }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
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
                <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
                  Elite Training Program
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Competition</span> Program
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              variants={{
                hidden: { x: -30, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
              }}
            >
              Designed for serious athletes preparing for national and international competitions. 
              Transform your skills with elite coaching, strategic development, and championship-level conditioning.
            </motion.p>

            {/* Requirements Badge */}
            <motion.div
              className="bg-purple-600/20 border border-purple-500 rounded-xl p-6"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.8 } },
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Program Requirements</h3>
              </div>
              <p className="text-purple-200">
                This program requires coach approval and completion of fundamentals. 
                Designed for experienced boxers with competitive aspirations.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.8 } },
              }}
            >
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Assessment
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Requirements
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Images */}
          <div className="flex-1 relative w-full h-[600px]">
            {[
              {
                src: "https://images.unsplash.com/photo-1601050691818-8b4d27da7f0e?q=80&w=1170&auto=format&fit=crop",
                style: "absolute top-0 left-0 w-3/5 h-4/5 rounded-2xl shadow-2xl",
                delay: 0
              },
              {
                src: "https://images.unsplash.com/photo-1554288204-389f7f23b7a0?q=80&w=870&auto=format&fit=crop",
                style: "absolute top-16 right-4 w-2/5 h-2/5 rounded-2xl shadow-2xl",
                delay: 0.3
              },
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=870&auto=format&fit=crop",
                style: "absolute bottom-8 left-1/4 w-2/5 h-2/5 rounded-2xl shadow-2xl",
                delay: 0.6
              }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                className={img.style}
                initial={{ opacity: 0, scale: 0.8, rotate: idx % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: img.delay }}
              >
                <img
                  src={img.src}
                  alt={`Training ${idx + 1}`}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Championship <span className="text-purple-400">Development</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive training designed to develop complete fighters ready for competitive success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum & Structure */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Structured <span className="text-purple-400">Progression</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three-phase development system taking athletes from technical mastery to competition readiness
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {curriculumModules.map((module, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-2xl h-full border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-purple-200 font-semibold">{module.phase}</span>
                    <div className="flex items-center gap-1 text-yellow-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{module.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
                  <p className="text-purple-100 mb-6 leading-relaxed">{module.focus}</p>
                  
                  <div className="space-y-3">
                    {module.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-purple-100">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Success Metrics */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Program <span className="text-purple-400">Requirements</span>
              </h2>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors duration-300 border border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{requirement}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-purple-600/20 border border-purple-500 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-white">Assessment Required</h3>
                </div>
                <p className="text-purple-200">
                  All athletes must complete a technical assessment with our head coach 
                  to ensure program suitability and safety.
                </p>
              </motion.div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Proven <span className="text-purple-400">Results</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                {successMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-750 transition-colors duration-300 border border-gray-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                      {metric.number}
                    </div>
                    <div className="text-gray-300 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white text-center border border-purple-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ready to Compete?</h3>
                <p className="text-purple-100 mb-4">
                  Take the first step toward your competitive boxing journey
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Schedule Your Assessment
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Begin Your Championship Journey
          </motion.h2>
          <motion.p
            className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join Rwanda's most successful competition program and train with athletes who share your ambition and drive.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Assessment Session
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Contact Head Coach
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdvancedCompetition;