"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Shield,
  Heart,
  Target,
  Users,
  Star,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  image12,
  image9,
  image1,
  image13,
  image5,
  image2,
  image15,
  hero2,
  image16,
  image11,
  image14,
} from "../../assets";

const KidsTeensBoxing = () => {
  const ageGroups = [
    {
      range: "6-8 Years",
      title: "Little Champions",
      focus:
        "Fundamental movement skills, basic coordination, and fun introduction to boxing",
      features: [
        "Fun games & activities",
        "Basic stance & footwork",
        "Coordination drills",
        "Social skills development",
      ],
      icon: Star,
    },
    {
      range: "9-12 Years",
      title: "Junior Warriors",
      focus:
        "Technical foundation, discipline development, and confidence building",
      features: [
        "Proper punching technique",
        "Defensive movements",
        "Fitness fundamentals",
        "Teamwork exercises",
      ],
      icon: Target,
    },
    {
      range: "13-17 Years",
      title: "Future Champions",
      focus:
        "Advanced techniques, physical conditioning, and leadership development",
      features: [
        "Advanced combinations",
        "Strength & conditioning",
        "Competition preparation",
        "Leadership skills",
      ],
      icon: Award,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Bullying Prevention",
      desc: "Build confidence and awareness to handle challenging situations",
    },
    {
      icon: Heart,
      title: "Discipline & Focus",
      desc: "Develop self-control and concentration through structured training",
    },
    {
      icon: Target,
      title: "Confidence Building",
      desc: "Achieve milestones and build self-esteem in a supportive environment",
    },
    {
      icon: Users,
      title: "Social Skills",
      desc: "Learn teamwork, respect, and sportsmanship with peers",
    },
    {
      icon: Star,
      title: "Fun & Engagement",
      desc: "Enjoyable activities that make fitness something to look forward to",
    },
    {
      icon: Award,
      title: "Skill Development",
      desc: "Learn proper boxing techniques in a safe, age-appropriate way",
    },
  ];

  const safetyFeatures = [
    {
      title: "Certified Coaches",
      description: "All coaches are certified in youth training and first aid",
      icon: CheckCircle,
    },
    {
      title: "Safety-First Equipment",
      description: "Age-appropriate gloves, headgear, and protective gear",
      icon: Shield,
    },
    {
      title: "Structured Curriculum",
      description: "Progressive learning designed for each age group",
      icon: Target,
    },
    {
      title: "Positive Environment",
      description: "Zero tolerance for bullying, focused on encouragement",
      icon: Heart,
    },
  ];

  const programStats = [
    { number: "100%", label: "Safety-Focused Training" },
    { number: "5:1", label: "Student to Coach Ratio" },
    { number: "10+", label: "Certified Youth Coaches" },
    { number: "0", label: "Tolerance for Bullying" },
  ];

  const galleryImages = [
    {
      src: image12,
      title: "Amani MASENGESHO",
      desc: "Kids enjoying structured boxing games and activities",
    },
    {
      src: image9,
      title: "C.  AKBAR CYIZERECYIMANA ",
      desc: "Certified coaches ensuring proper technique and safety",
    },
    {
      src: image5,
      title: "ANGEL",
      desc: "Building friendships and teamwork skills",
    },
    {
      src: image2,
      title: "Clarissa TURIYA",
      desc: "Building friendships and teamwork skills",
    },
    {
      src: image1,
      title: "Valantine ",
      desc: "Building friendships and teamwork skills",
    },
    {
      src: image13,
      title: "USHINDI",
      desc: "Building friendships and teamwork skills",
    },
    {
      src: image14,
      title: "Gentle Albert CYUSA",
      desc: "Building friendships and teamwork skills",
    },
    {
      src: hero2,
      title: "Yannick ISHIMWE",
      desc: "Building friendships and teamwork skills",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0" />
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
                <div className="w-2 h-10 bg-blue-500 rounded-full"></div>
                <span className="text-blue-400 font-semibold tracking-wider">
                  SAFE • FUN • EDUCATIONAL
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Kids & Teens
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">
                  Boxing Program
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
              <strong>Age-appropriate boxing training</strong> designed to build
              confidence, discipline, and physical fitness while providing
              essential skills for bullying prevention. Our certified coaches
              create a safe, positive environment where young athletes thrive.
            </motion.p>

            {/* Parent Reassurance Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.6, duration: 0.8 },
                },
              }}
            >
              {[
                "🛡️ Certified Safety-First Coaches",
                "🎯 Age-Appropriate Training",
                "🌟 Bullying Prevention Focus",
                "🤝 Positive Social Environment",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {feature}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.8, duration: 0.8 },
                },
              }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                Book Free Trial Class
              </button>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Meet Our Coaches
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
                src={image16}
                alt="Kids enjoying boxing training with coach"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 text-white">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold">
                    Safe & Supervised
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-16 right-4 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ x: 50, opacity: 0, rotate: -5 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={image15}
                alt="Teens learning proper boxing technique"
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
                alt="Group of kids having fun while training"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-blue-600 rounded-full p-2">
                <Star className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Enhanced Gallery Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See Our <span className="text-blue-400">Young Champions</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch as children build confidence, make friends, and develop
              skills in our supportive environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-80">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {programStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
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

      {/* Age Groups Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Designed for <span className="text-blue-400">Every Age</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Age-appropriate programs that grow with your child, from
              fundamental skills to advanced techniques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">
                    {group.range}
                  </h3>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {group.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {group.focus}
                  </p>
                </div>

                <div className="space-y-3">
                  {group.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              More Than <span className="text-blue-400">Just Boxing</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building character and life skills that extend far beyond the gym
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Parent Reassurance Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Child's Safety is Our{" "}
              <span className="text-blue-400">Priority</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We understand your concerns and have built our program around
              safety and positive development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Parent Information */}
          <motion.div
            className="mt-16 bg-gray-900 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              👨‍👩‍👧‍👦 Parent-Friendly Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
              <div>
                <strong className="text-white">Viewing Area</strong>
                <p className="text-sm">Comfortable space to watch training</p>
              </div>
              <div>
                <strong className="text-white">Progress Reports</strong>
                <p className="text-sm">
                  Regular updates on your child's development
                </p>
              </div>
              <div>
                <strong className="text-white">Flexible Scheduling</strong>
                <p className="text-sm">
                  Classes that work with your family's routine
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Empower Your Child?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Give your child the gift of confidence, discipline, and fun
              through our carefully designed boxing program. Join our family of
              young champions today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Free Trial Class
              </button>
              <button className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                Download Parent Guide
              </button>
            </div>

            <p className="text-gray-500 mt-6 text-sm">
              🛡️ Certified Coaches • 🎯 Age-Appropriate • 🤝 Anti-Bullying Focus
              • 🌟 Fun & Safe Environment
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default KidsTeensBoxing;
