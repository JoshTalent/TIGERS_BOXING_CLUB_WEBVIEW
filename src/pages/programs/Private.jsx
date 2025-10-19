"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Target, Calendar, UserCheck, ArrowRight, Star, Award, Clock, CheckCircle, Users, TrendingUp } from "lucide-react";

const PrivateTraining = () => {
  const targetAudience = [
    {
      icon: Target,
      title: "Technique Refinement",
      desc: "Perfect your form, footwork, and combinations with expert correction",
      goals: ["Advanced combinations", "Defensive techniques", "Ring movement"]
    },
    {
      icon: TrendingUp,
      title: "Weight Loss & Fitness",
      desc: "Customized fitness programs for maximum fat loss and conditioning",
      goals: ["Fat burning workouts", "Cardio endurance", "Body transformation"]
    },
    {
      icon: Award,
      title: "Fight Preparation",
      desc: "Complete fight camp preparation for amateur and professional bouts",
      goals: ["Sparring strategies", "Conditioning peak", "Mental preparation"]
    },
    {
      icon: Users,
      title: "Beginner Development",
      desc: "Build solid foundations with personalized beginner coaching",
      goals: ["Basic techniques", "Fitness foundation", "Confidence building"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      desc: "Comprehensive evaluation of your skills, fitness level, and goals",
      icon: UserCheck,
      details: ["Skill level analysis", "Fitness assessment", "Goal setting session"]
    },
    {
      step: "02",
      title: "Personalized Plan",
      desc: "Custom training program designed specifically for your objectives",
      icon: Target,
      details: ["Tailored workout schedule", "Technical focus areas", "Progress milestones"]
    },
    {
      step: "03",
      title: "One-on-One Sessions",
      desc: "Dedicated coaching with undivided attention and real-time feedback",
      icon: Users,
      details: ["Private training sessions", "Immediate technique correction", "Personalized feedback"]
    },
    {
      step: "04",
      title: "Progress Tracking",
      desc: "Regular assessments and plan adjustments to ensure continuous improvement",
      icon: TrendingUp,
      details: ["Performance metrics", "Video analysis", "Plan optimization"]
    }
  ];

  const coaches = [
    {
      name: "Marcus Johnson",
      specialty: "Technical Boxing & Fight Prep",
      experience: "15+ years",
      credentials: ["Former Pro Boxer", "National Champion", "Level 3 Coach"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "Sarah Chen",
      specialty: "Fitness & Weight Loss",
      experience: "12+ years",
      credentials: ["Sports Science Degree", "Nutrition Specialist", "HIIT Expert"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "David Rodriguez",
      specialty: "Beginner Development",
      experience: "8+ years",
      credentials: ["Youth Coach Certified", "Psychology Background", "Patience Expert"],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500&auto=format&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      desc: "Train at your convenience with sessions that fit your lifestyle"
    },
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      desc: "Every session is designed to bring you closer to your specific objectives"
    },
    {
      icon: Star,
      title: "Expert Technique Correction",
      desc: "Immediate feedback and correction from certified boxing coaches"
    },
    {
      icon: TrendingUp,
      title: "Accelerated Progress",
      desc: "Achieve in weeks what might take months in group classes"
    },
    {
      icon: UserCheck,
      title: "Personalized Attention",
      desc: "100% focused coaching tailored to your unique needs and abilities"
    },
    {
      icon: Award,
      title: "Premium Experience",
      desc: "Access to exclusive training times and personalized equipment"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1605559367730-09f62f3528e0?q=80&w=1170&auto=format&fit=crop",
      title: "Personalized Technique Work",
      desc: "One-on-one focus on perfecting form and movement"
    },
    {
      src: "https://images.unsplash.com/photo-1605559367731-08e92f3528a1?q=80&w=870&auto=format&fit=crop",
      title: "Custom Fitness Training",
      desc: "Tailored conditioning for your specific goals"
    },
    {
      src: "https://images.unsplash.com/photo-1605559367732-07d82f3527f2?q=80&w=870&auto=format&fit=crop",
      title: "Strategic Fight Preparation",
      desc: "Advanced training for competitive boxers"
    }
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
                <div className="w-2 h-10 bg-purple-500 rounded-full"></div>
                <span className="text-purple-400 font-semibold tracking-wider">PERSONALIZED • FOCUSED • RESULTS-DRIVEN</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Private 1-on-1
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block">
                  Training
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
              <strong>Exclusive personalized coaching</strong> for individuals with specific goals. Whether you're refining technique, 
              preparing for competition, or transforming your fitness, our expert coaches create custom programs that deliver 
              exceptional results.
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
                "🎯 Custom Training Plans",
                "⏱️ Flexible Scheduling", 
                "👥 Expert Coach Matching",
                "📊 Progress Tracking"
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
                Book Assessment Session
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Coach Profiles
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
                src="https://images.unsplash.com/photo-1605559367730-09f62f3528e0?q=80&w=1170&auto=format&fit=crop"
                alt="Personalized one-on-one boxing training"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 text-white">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold">100% Personalized Focus</span>
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
                src="https://images.unsplash.com/photo-1605559367731-08e92f3528a1?q=80&w=870&auto=format&fit=crop"
                alt="Expert coach providing real-time feedback"
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
                src="https://images.unsplash.com/photo-1605559367732-07d82f3527f2?q=80&w=870&auto=format&fit=crop"
                alt="Custom training plan execution"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-purple-600 rounded-full p-2">
                <Star className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Designed for <span className="text-purple-400">Your Goals</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're a beginner or advanced athlete, our private training is tailored to your specific objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-14 h-14 bg-purple-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <audience.icon className="w-7 h-7 text-purple-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {audience.desc}
                </p>
                <div className="space-y-2">
                  {audience.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{goal}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It <span className="text-purple-400">Works</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven process ensures you get the most out of every private session
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <step.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {step.desc}
                  </p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-purple-500" />
                  </div>
                )}
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
              Why Choose <span className="text-purple-400">Private Training</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference that personalized attention makes in your boxing journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-purple-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-purple-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.desc}
                </p>
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
              Ready for Personalized Results?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Take your boxing and fitness to the next level with one-on-one coaching designed specifically for your goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Your Assessment
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                View All Coaches
              </button>
            </div>
            
            <p className="text-gray-500 mt-6 text-sm">
              🎯 Personalized Plans • ⏱️ Flexible Scheduling • 👥 Expert Coaches • 📊 Guaranteed Progress
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivateTraining;