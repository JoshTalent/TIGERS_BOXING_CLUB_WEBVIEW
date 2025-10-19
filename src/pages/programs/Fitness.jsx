"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Music, Heart, Zap, Users, Trophy, Sparkles } from "lucide-react";

const BoxingFitness = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Full-Body Calorie Burn",
      desc: "Torch 500-800 calories per session with high-intensity boxing workouts"
    },
    {
      icon: Zap,
      title: "Improved Strength & Endurance",
      desc: "Build lean muscle and cardiovascular stamina through dynamic training"
    },
    {
      icon: Trophy,
      title: "Enhanced Coordination",
      desc: "Develop precision, balance, and agility with technical boxing drills"
    },
    {
      icon: Sparkles,
      title: "Stress Relief & Mental Clarity",
      desc: "Release endorphins and clear your mind through focused physical activity"
    },
    {
      icon: Users,
      title: "Community Support",
      desc: "Join a motivating environment with like-minded fitness enthusiasts"
    },
    {
      icon: Music,
      title: "Fun & Engaging Workouts",
      desc: "Never get bored with constantly varied routines and energizing music"
    }
  ];

  const programHighlights = [
    {
      title: "Cardio Boxing",
      desc: "High-energy workouts combining boxing techniques and cardio drills to burn calories and improve stamina.",
      features: ["HIIT Training", "Combination Drills", "Footwork Circuits"],
      intensity: "High-Energy",
      duration: "60 mins"
    },
    {
      title: "Strength & Conditioning",
      desc: "Bodyweight exercises, resistance training, and boxing drills to build muscular strength and endurance.",
      features: ["Resistance Bands", "Bodyweight Circuits", "Core Strengthening"],
      intensity: "Moderate-High",
      duration: "45 mins"
    },
    {
      title: "Flexibility & Mobility",
      desc: "Dynamic stretches and mobility exercises to improve flexibility and reduce injury risk.",
      features: ["Dynamic Stretching", "Mobility Drills", "Recovery Techniques"],
      intensity: "Low-Moderate",
      duration: "30 mins"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1170&auto=format&fit=crop",
      title: "Group Energy",
      desc: "High-energy classes with motivating music"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1672791843132-cea1902ad66b?q=80&w=870&auto=format&fit=crop",
      title: "Non-Intimidating",
      desc: "Welcoming environment for all fitness levels"
    },
    {
      src: "https://images.unsplash.com/photo-1554288204-389f7f23b7a0?q=80&w=870&auto=format&fit=crop",
      title: "Fun Atmosphere",
      desc: "Enjoyable workouts that feel like play"
    }
  ];

  const stats = [
    { number: "500-800", label: "Calories Burned per Session" },
    { number: "100%", label: "No Sparring Required" },
    { number: "All Levels", label: "Beginner to Advanced Welcome" },
    { number: "5.0 ★", label: "Member Satisfaction Rating" }
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
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
                <span className="text-purple-400 font-semibold tracking-wider">NO SPARRING • ALL FITNESS LEVELS</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Boxing for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block">
                  Fitness
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              variants={{
                hidden: { x: -30, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
              }}
            >
              <strong>High-energy workouts</strong> designed for anyone seeking cardio, weight loss, and toning without sparring. 
              Experience the perfect blend of boxing techniques and fitness in a fun, music-driven environment that will leave you 
              feeling empowered and energized.
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.8 } },
              }}
            >
              {[
                "🎵 Music-Driven Workouts",
                "💪 No Sparring Required", 
                "👥 Supportive Community",
                "🔥 500-800 Calories/Session"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  {feature}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.8 } },
              }}
            >
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                Start Your Free Trial
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Watch Class Preview
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
                src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1170&auto=format&fit=crop"
                alt="Group fitness class with energetic music"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 text-white">
                  <Music className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold">Energetic Music Playlist</span>
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
                src="https://plus.unsplash.com/premium_photo-1672791843132-cea1902ad66b?q=80&w=870&auto=format&fit=crop"
                alt="Non-intimidating beginner-friendly environment"
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
                src="https://images.unsplash.com/photo-1554288204-389f7f23b7a0?q=80&w=870&auto=format&fit=crop"
                alt="Fun and engaging workout atmosphere"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-purple-600 rounded-full p-2">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
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

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transform Your <span className="text-purple-600">Fitness Journey</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of boxing intensity and fitness fun designed for real results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights - Enhanced */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Program <span className="text-purple-400">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three core components designed for maximum results and endless fun
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programHighlights.map((program, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-purple-900/30 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-purple-400">
                    {program.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className="bg-purple-600 text-xs px-2 py-1 rounded-full">
                      {program.duration}
                    </span>
                    <span className="bg-purple-800 text-xs px-2 py-1 rounded-full">
                      {program.intensity}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.desc}
                </p>

                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience The <span className="text-purple-400">Vibe</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See why our fitness boxing classes are the most enjoyable way to get in shape
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
                  <div className="absolute top-4 right-4 bg-purple-600 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Fitness?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our fun, high-energy boxing fitness classes today. No experience needed - just bring your energy and we'll handle the rest!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Free Trial Class
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Class Schedule
              </button>
            </div>
            
            <p className="text-purple-200 mt-6 text-sm">
              🎵 Fun Music • 💪 No Sparring • 👥 Supportive Community • 🔥 Amazing Results
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BoxingFitness;