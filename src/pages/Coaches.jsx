"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award, Clock, Users, Target, Heart, Star, Trophy, CheckCircle, Mail, Phone } from "lucide-react";
import {  coach, josh } from "../assets";
const coaches = [
  {
    name: "Sciver The Coach",
    role: "Head Boxing Coach",
    expertise: "Boxing Fundamentals, Advanced Competition",
    specialties: ["Technical Boxing", "Fight Preparation", "Advanced Techniques"],
    image: coach,
    credentials: [
      "Former National Champion (2012-2015)",
      "Level 4 Certified Boxing Coach",
      "15+ Years Coaching Experience",
      "Sports Science Degree"
    ],
    experience: "15+ years",
    philosophy: "I believe boxing is more than a sport—it's a vehicle for personal transformation. Every punch thrown with proper technique builds not just physical strength, but mental resilience and character.",
    bio: "Olivier started his boxing journey at age 14 and quickly rose through amateur ranks to become national champion. After retiring from competition, he dedicated his life to coaching and founded Tiger Boxing Club to share his passion with the next generation of fighters.",
    funFact: "Can recite every Rocky movie line while demonstrating perfect boxing form",
    stats: {
      championsTrained: 25,
      yearsExperience: 15,
      successRate: "98%"
    },
    email: "sciver@gmail.com",
    phone: "+250 788 123 456"
  },
  {
    name: "Josue Ntwari",
    role: "Fitness & Conditioning Specialist",
    expertise: "Boxing for Fitness, Strength & Conditioning",
    specialties: ["Weight Loss Programs", "Cardio Conditioning", "Strength Training"],
    image: josh,
    credentials: [
      "Certified Personal Trainer (NASM)",
      "Sports Nutrition Specialist",
      "8+ Years Fitness Coaching",
      "Kinesiology Degree"
    ],
    experience: "8+ years",
    philosophy: "Fitness should be empowering and enjoyable. I combine boxing techniques with smart conditioning to help people discover their strength and achieve their health goals in a fun, sustainable way.",
    bio: "Alice transitioned from competitive athletics to fitness coaching after discovering the transformative power of boxing. She specializes in making boxing accessible for fitness enthusiasts of all levels.",
    funFact: "Once trained a 70-year-old grandmother who went on to complete her first 5K",
    stats: {
      clientsTransformed: 300,
      yearsExperience: 8,
      successRate: "95%"
    },
    email: "ntwarijosue5@gmail.com",
    phone: "+250 788 654 321"
  }
];

const Coaches = () => {
  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Expert Coaches</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Certified professionals dedicated to your success. Each coach brings unique expertise, 
              proven experience, and a passion for helping you achieve your boxing and fitness goals.
            </p>
            
            {/* Stats Overview */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { number: "2", label: "Expert Coaches" },
                { number: "23+", label: "Years Combined Experience" },
                { number: "325+", label: "Members Trained" },
                { number: "97%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coaches Grid Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Coaching <span className="text-purple-400">Team</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each coach brings specialized skills and a unique approach to help you reach your full potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 border border-gray-800 hover:border-purple-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Header with Image and Basic Info */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-4 py-2 text-white font-semibold text-sm shadow-lg">
                        {coach.role}
                      </div>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{coach.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-purple-400" />
                              <span>{coach.experience}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{coach.stats.successRate} Success</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-400">{coach.stats.championsTrained || coach.stats.clientsTransformed}+</div>
                          <div className="text-gray-400 text-xs">Trained</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-400" />
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-300 px-3 py-2 rounded-xl text-sm border border-purple-700/50 backdrop-blur-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Philosophy */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-purple-400" />
                        Coaching Philosophy
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        "{coach.philosophy}"
                      </p>
                    </div>

                    {/* Credentials */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-purple-400" />
                        Credentials
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {coach.credentials.slice(0, 2).map((credential, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-300 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{credential}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">Email</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">Call</span>
                        </div>
                      </div>
                      
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                        Book Session
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Coaches Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Train With <span className="text-purple-400">Our Coaches</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Expertise",
                description: "All coaches hold professional certifications and have proven track records of success"
              },
              {
                icon: Users,
                title: "Personalized Approach",
                description: "Tailored training methods that adapt to your unique goals and learning style"
              },
              {
                icon: Trophy,
                title: "Proven Results",
                description: "Consistent success in helping members achieve their boxing and fitness objectives"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl text-center border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Train with the Best?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a session with one of our expert coaches and experience the difference 
              that professional, personalized training can make in your boxing journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Book Your First Session
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                View Class Schedule
              </button>
            </div>
            
            <p className="text-gray-500 mt-6 text-sm">
              🏆 Certified Coaches • 🎯 Personalized Training • 📊 Proven Results • 💪 All Levels Welcome
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Coaches;